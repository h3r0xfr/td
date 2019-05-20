const fs = require('fs');

fs.readFile(process.argv[2], function (err, buffer) {
    console.log(buffer.toString().split('\n').length - 1);
});

/*
fs.promises.readFile(process.argv[2]).then((buffer) => {
    console.log(buffer.toString().split('\n').length - 1);
});
*/

/*
async function withAsyncAwait() {
    const buffer = await fs.promises.readFile(process.argv[2]);
    console.log(
        buffer.toString().split('\n').length - 1
    );
}
withAsyncAwait();
*/
