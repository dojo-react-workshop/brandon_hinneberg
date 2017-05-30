const dirname = process.argv[2];
const extFilter = process.argv[3];

const filterFilesbyExt = require('./my-module');

filterFilesbyExt(dirname, extFilter, (err, fileArray) => {
    if (err) {
        return console.log('There was an error', err);
    } else {
        fileArray.forEach((filename) => {
            console.log(filename);
        });
    }
});