const http = require('http');
const parser = require('url');
const port = Number(process.argv[2]);

function parseTime(date) {
    return {
        'hour': date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()
    };
}

function parseUnix(date) {
    return {
        'unixtime': date.getTime()
    };
}

http.createServer((req, res) => {
    const url = parser.parse(req.url, true);
    const date = new Date(url.query.iso);

    function returnResponse(body) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(body));
    }

    if (url.pathname === '/api/parsetime') {
        return returnResponse(parseTime(date));
    }

    if(url.pathname === '/api/unixtime') {
        return returnResponse(parseUnix(date));
    }

    res.writeHead(404).end();
}).listen(port);
