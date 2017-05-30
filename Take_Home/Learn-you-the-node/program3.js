let fs = require('fs');

let path = process.argv[2];

let contents = fs.readFileSync(path, 'UTF-8').toString();
let lines = contents.split('\n');
let newlines_count = lines.length - 1;
console.log(newlines_count);