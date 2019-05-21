const fs = require('fs');

module.exports = function(folder, ext, callback) {
    fs.readdir(folder, (err, files) => {
        if (err) {
            return callback(err);
        }
        
        return callback(null, files.filter((file) =>  file.endsWith(`.${ext}`)));
    });
}
