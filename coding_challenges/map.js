// Map creates a new array with the output of data processed from a prior array 

Array.prototype.map = function(callback) { // Because of the 'Array.' you must use method invocation to use this
    const newArry = [];
    this.foreach(function(value, index, array) { // uses the object that map is prototyped to -> you just need function(value) but know 'index' and 'array' are also passed implicitly
        newArray.push(callback(value))
    });
    return newArray;
};

// other way to do it
Array.prototype.map = function(callback) { // Because of the 'Array.' you must use method invocation to use this
    const newArry = [];
    for (let i = 0; i < this.length; i += 1) {
        newArray.push(callback(this[i]));
    }

    return newArray;
};