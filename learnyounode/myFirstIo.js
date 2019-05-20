//destructuration of method fs for readFileSync() function
const { readFileSync } = require('fs');
const arg = process.argv[2];

function countFileLines(path) {
    return readFileSync(path).toString().split('\n').length - 1;
}

console.log(countFileLines(arg));
