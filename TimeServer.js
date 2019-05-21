const net = require('net');
const moment = require('moment');
const port = process.argv[2];

const server = net.createServer((socket) => {
    socket.end(moment().format('YYYY-MM-DD HH:mm') + '\n');
});

server.listen(port);
