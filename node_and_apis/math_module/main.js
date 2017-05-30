const myMathService = require('./math');



console.log('Add: ' + myMathService.sum(2, 3));

console.log('Product: ' + myMathService.product(2, 3));
console.log('Square: ' + myMathService.square(2));
console.log('Random:' + myMathService.random(2, 9));
// let fs = require('fs');

// fs.readFile('node.txt', 'utf8', (err, data) => {
//     console.log(data.toUpperCase());
// })


// console.log('Do completely unrelated stuff...');