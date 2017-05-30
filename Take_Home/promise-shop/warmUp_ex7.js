first()
    .then((val) => {
        return second(val);
    })
    .then((val) => {
        consle.log(val);
    });


// OR this
const firstPromise = first();

firstPromise
    .then(function(secretVal) {
        return second(secretVal);
    })
    .then(function(newVal) {
        console.log('newVal')
    })