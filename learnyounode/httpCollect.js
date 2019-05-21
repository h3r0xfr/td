const http = require('http');
const url = process.argv[2];

http.get(url, response => {
    const content = [];
    
    response.setEncoding('utf8');

    response.on("data", content.push);

    response.on("end", () => {
        console.log(content.length);
        console.log(content.join(''));
    });
});
