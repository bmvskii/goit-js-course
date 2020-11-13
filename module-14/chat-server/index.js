const WebSocket = require("ws");
const uuid = require("uuid");
const express = require("express");

const types = require("./scripts/actionTypes");
const errors = require("./scripts/errors");

const _u = require("./scripts/utils");
const _cu = require("./scripts/chat-utils");

const app = express();
const wss = new WebSocket.Server({ port: 7000 });
const bcs = _cu.createBroadcast(wss);

const connections = [];
const privateChats = [];

const statuses = {
  ACTIVE: "ACTIVE",
  NOT_ACTIVE: "NOT_ACTIVE",
  AFK: "AFK",
};

const createNewConnection = (socket) => ({
  id: uuid.v4(),
  status: statuses.NOT_ACTIVE,
  color: _u.generateUserColor(),
  socket,
});

const processNewConnection = (data) => {
  const { socket, connections } = data;
  const connection = createNewConnection(socket);

  const msg = `Client ${connection.id} successfully connected to server`;
  const payload = { type: types.INITIAL, id: connection.id };

  connections.push(connection);

  _u.log(msg);
  _u.sendMessage(socket, payload);
};

const processUserJoin = (data) => {
  const { msg, socket, connections } = data;
  const { username, id } = msg;

  const hasAlreadyJoinedUser =
    connections.find((conn) => conn.username === username) !== undefined;

  if (hasAlreadyJoinedUser) {
    const payload = { type: types.ERROR, text: errors.ALREADY_CONNECTED };
    _u.sendMessage(socket, payload);
  }

  const client = connections.find((conn) => id === conn.id);
  client.username = username;
  client.status = statuses.ACTIVE;

  if (client) {
    const text = `${username} successfully joined the chat.`;
    const payload = {
      ...data,
      msg: { text },
    };
    bcs.broadcastLog(payload);
  }
};

const processClosing = (data) => {
  const { connections, msg, socket } = data;
  const { id } = msg;

  const conn = connections.find((conn) => conn.id === id);

  connections = connections.filter((conn) => conn.id === id);

  const connectionsNumber = getActualConnectionsNumber();

  console.log(`${conn.username || "Anonym"} successfuly exited the chat.`);
  console.log("Current connections:", connectionsNumber);

  socket.close();
};

const sendInvitation = (data) => {
  const { msg, connections } = data;
  const { recipientId, clientId } = msg;

  const requester = connections.find((conn) => conn.id === clientId);
  const recipient = connections.find((conn) => conn.id === recipientId);

  const payload = _u.wrap({
    username: requester.username,
    requesterId: clientId,
    type: types.INVITE_TO_CHAT,
  });

  recipient.socket.send(payload);
};

const acceptInvitation = (data) => {
  const { msg, connections } = data;
  const { recipientId, requesterId } = msg;

  const requester = connections.find((conn) => conn.id === requesterId);
  const recipient = connections.find((conn) => conn.id === recipientId);

  const reqPayload = _u.wrap({
    username: requester.username,
    personId: requesterId,
    type: types.ACCEPT_INVITATION,
  });

  const recPayload = _u.wrap({
    username: recipient.username,
    personId: recipientId,
    type: types.ACCEPT_INVITATION,
  });

  recipient.socket.send(reqPayload);
  requester.socket.send(recPayload);
};

const processPrivateMessage = (data) => {
  const { msg, connections } = data;
  const { from, to, text } = msg;

  const toPerson = connections.find((conn) => conn.id === to);
  const fromPerson = connections.find((conn) => conn.id === from);

  const payload = _u.wrap({
    type: types.PRIVATE_MESSAGE,
    text,
    status: fromPerson.status,
    author_name: fromPerson.username,
    color: fromPerson.color,
    date: Date.now(),
    id: fromPerson.id,
  });

  toPerson.socket.send(payload);
  fromPerson.socket.send(payload);
};

const getActualConnectionsNumber = () => connections.length;

const rejectInvitation = (data) => {
  const { msg, connections } = data;
  const { recipientId, requesterId } = msg;

  const requester = connections.find((conn) => conn.id === requesterId);
  const recipient = connections.find((conn) => conn.id === recipientId);

  const payload = _u.wrap({
    type: types.REJECT_INVITATION,
    text: `${recipient.username} decline private chat invitation.`,
  });
  requester.socket.send(payload);
};

wss.on("connection", (ws) => {
  const wrapWithMeta = _cu.createMetaWrapper(ws, connections);
  const meta = wrapWithMeta();

  processNewConnection(meta);

  ws.on("message", (message) => {
    try {
      const msg = _u.unwrap(message);
      const wMsg = wrapWithMeta(msg);

      const actions = {
        [types.JOIN]: processUserJoin,
        [types.MESSAGE]: bcs.broadcastMessage.bind(bcs),
        [types.CLOSE]: processClosing,
        [types.UPDATE_TOKEN]: _cu.updateToken,
        [types.INVITE_TO_CHAT]: sendInvitation,
        [types.ACCEPT_INVITATION]: acceptInvitation,
        [types.PRIVATE_MESSAGE]: processPrivateMessage,
        [types.REJECT_INVITATION]: rejectInvitation,
      };

      const currentAction = actions[msg.type];
      currentAction(wMsg);
    } catch (err) {
      console.log(err);
    }
  });
});
