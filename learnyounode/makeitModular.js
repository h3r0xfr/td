const filter = require('./makeItModular-module');

const path = process.argv[2];
const extension = process.argv[3];

filter(path, extension, (err, files) => {
    if (err) {
        console.error(err);
    }

    files.forEach(file => console.log(file));
})
