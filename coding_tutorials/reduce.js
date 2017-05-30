const array = [1, 2, 3, 4];

// Reduce function -> takes a callback as an argument 
//It will repeat the logic for each amount in the array and then return a single value.
const sum = array.reduce((currentSum, currentVal) => {
    return currentSum + currentVal;
}, 100);

console.log(sum);


// What it is actually doing:
Array.prototype.reduce = function(cb, currVal, ) {
    let i = 1;

    // Setup code
    if (currVal === undefined) {
        currVal = this[0];
        i = 1;
    }

    // Logic 
    for (i; i < this.length; i += 1) {
        currVal = cb(currVal, this[i]);
    }

    return currVal;
}