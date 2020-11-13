const unwrap = (message) => JSON.parse(message);

const wrap = (message) => JSON.stringify(message);

const generateUserColor = () =>
  Math.floor(Math.random() * 16777215).toString(16);

const log = (msg) => console.log(msg);

const sendMessage = (socket, payload) => socket.send(wrap(payload));

module.exports = {
  unwrap,
  wrap,
  generateUserColor,
  log,
  sendMessage,
};
