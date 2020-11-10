const ws = new WebSocket('ws://echo.websocket.org');

ws.binaryType; 

ws.readyState; // 0 1 2 3

ws.onopen = function(){};

ws.onmessage = function(){};

ws.onclose = function(){};

ws.onerror = function(){};

ws.send(/*data - String, Blob, ArrayBuffer*/);

ws.send("Some string");
ws.send(JSON.stringify({ value: 1}));

// 1000 - хорошее закрытие
// 1006 

ws.close(/*code, reason*/)