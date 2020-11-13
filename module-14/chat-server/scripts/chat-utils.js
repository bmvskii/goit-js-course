const WebSocket = require("ws");

const errors = require("./errors");
const _u = require("./utils");
const types = require("./actionTypes");
const _cu = require("./chat-utils");

const createBroadcast = (server) => {
  return {
    broadcast(data) {
      server.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    },
    broadcastMessage(data) {
      const { msg, socket, connections } = data;
      const { text, id } = msg;
      const conn = connections.find((conn) => id === conn.id);

      if (!conn) {
        const payload = { type: types.ERROR, text: errors.NOT_EXISTED };
        _u.sendMessage(socket, payload);
      }
      const payload = _u.wrap({
        type: types.MESSAGE,
        text,
        status: conn.status,
        author_name: conn.username,
        color: conn.color,
        date: Date.now(),
        id: conn.id,
      });

      this.broadcast(payload);
    },
    broadcastLog(data) {
      const {
        msg: { text },
      } = data;
      const payload = _u.wrap({
        type: types.LOG,
        text,
        date: Date.now(),
      });

      this.broadcast(payload);
    },
  };
};

const createMetaWrapper = (socket, connections) => (msg = "") => ({
  ["msg"]: msg,
  socket,
  connections,
});

const updateToken = (data) => {
  const { msg, connections } = data;
  const { oldId, newId } = msg;

  const conn = connections.find((conn) => conn.id === oldId);
  conn.id = newId;

  console.log("Old token:", oldId);
  console.log("New token:", newId);
};

module.exports = {
  createBroadcast,
  createMetaWrapper,
  updateToken,
};
