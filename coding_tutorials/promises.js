//********PROMISES***********/
//  Things of a recipt as an analogy

//  3 types of states:
//  -pending
//  -resolved
//  -reject 

//  Once either resolved or rejected a promises state cannot change. 
//  If pending it can only become either resolved or rejected

//Base promise structure
// receipt
//     .then(function() {
//         console.log('this promise has resolved');
//     })
//     .catch(function() {
//         console.log('this promise has rejected')
//     }); // Promise


const receiptA = new Promise((resolve, reject) => {
    const rand = Math.random() * 1000;
    setTimeout(function() {
        resolve();
    }, rand);
});

const receiptB = new Promise(() => {
    const rand = Math.random() * 1000;
    setTimeout(function() {
        resolve();
    }, rand);
});

receiptA
    .then(function() {
        console.log('A has resolved');
        return receiptB;
    })
    .then(function() {
        console.log('B has resolved');
    });



// Another example
somPromise
    .then(function() { console.log('resolved!') })
    .then(function() {
        console.log('I might throw an error...');
        const rand = Math.random();
        if (rand > 0.5) { throw new Error('error!') }
    })
    .then(function() { console.log(`I didn't throw an error`) })
    .catch(function() { console.log('rejected!') }) // Always have a '.catch' at the end for good measure