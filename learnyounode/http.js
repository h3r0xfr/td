const http = require('http');
const port = process.argv[2];

http.get(port, res => {
  res.setEncoding('utf8');
  res.on('data', data => console.log(data));
  res.on('error', console.error);
});
