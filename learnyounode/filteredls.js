const fs = require('fs');

const dir = process.argv[2]; // /path/to/dir
const extensionFile = process.argv[3]; // txt

const fileRegex = new RegExp(`.${extensionFile}$`);

fs.readdir(dir, (err, filesNames) => {
	if (err) throw err;

	filesNames
		.filter(filename =>  fileRegex.test(filename))
		.forEach(filename => console.log(filename));
});
