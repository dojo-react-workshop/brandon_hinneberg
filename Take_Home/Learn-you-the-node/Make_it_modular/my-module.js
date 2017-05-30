const fs = require('fs');
const path = require('path');
module.exports = function filterFilesbyExt(dirname, extension, cb) {
    fs.readdir(dirname, (err, list) => {
        if (err) {
            return cb(err);
        }
        list = list.filter((filename) => {
            path.extname === `.${extension}`;
        });
        cd(null, list);
    })
}