const WebSocket = require("ws");
const uuid = require("uuid");
const express = require("express");

const app = express();
const wss = new WebSocket.Server({ port: 7000 });

const clients = [];

const statuses = {
  ACTIVE: "ACTIVE",
  NOT_ACTIVE: "NOT_ACTIVE",
  AFK: "AFK",
};

const broadcast = (data) => {
  wss.clients.forEach((client) => {
    if (client !== wss && client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

const unwrap = (message) => JSON.parse(message);
const wrap = (message) => JSON.stringify(message);

const createNewClient = () => ({
  id: uuid.v4(),
  status: statuses.NOT_ACTIVE,
  color: generateUserColor(),
});

const broadcastMessage = (text, id) => {
  const client = clients.find((client) => id === client.id);

  if (!client) {
    ws.send(wrap({ type: "error", text: "User doesn't exist" }));
  }
  const payload = wrap({
    type: "message",
    text,
    author_name: client.username,
    color: client.color,
    date: Date.now(),
  });
  broadcast(payload);
};

const generateUserColor = () =>
  Math.floor(Math.random() * 16777215).toString(16);

const broadcastLog = (text) => {
  const payload = wrap({
    type: "log",
    text,
    date: Date.now(),
  });

  broadcast(payload);
};

wss.on("connection", (ws) => {
  const client = createNewClient();

  clients.push(client);
  console.log(`Client ${client.id} successfully connected to server`);

  ws.send(wrap({ type: "initial", id: client.id }));

  ws.on("message", (message) => {
    try {
      const msg = unwrap(message);

      if (msg.type === "join") {
        const { username } = msg;
        const client = clients.find((client) => msg.id === client.id);
        client.username = username;

        if (client) {
          broadcastLog(`${username} successfully joined the chat.`);
        } else {
          ws.send(wrap({ type: "error", text: "User is already existed" }));
        }
      } else if (msg.type === "message") {
        broadcastMessage(msg.text, msg.id);
      }
    } catch (err) {}
  });

  //   ws.send(wrap({ type: "connections-info", userAmount: clients.length }));

  //   ws.on("close", )
});
