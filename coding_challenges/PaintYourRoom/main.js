const orderSupplies = (item, callback) => {
    // The orderSupplies function first finds the item you requested
    // action is a function
    const warehouse = [
        { item: 'paint', action() { return 'start mixing!' } },
        { item: 'brush', action() { return 'start painting!' } }
    ];

    // Choices a random time to use in the 'setTimeout' function
    const deliveryTime = Math.random() * 3000 + 1000;

    setTimeout(() => {
        const foundItem = warehouse.find((obj) => obj.item === item);

        if (foundItem) {
            callback(foundItem);
        }

    }, deliveryTime)
}

const printItem = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`);

let paintRecieved = false;
let brush = null;

orderSupplies('paint', (item) => {
    if (paintRecieved == false)
})

orderSupplies('paint', (item) => {

})

// // Initial problem -> we don't know the order things will be 
// orderSupplies('paint', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`));
// orderSupplies('brush', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`));



// // // Solution #1:
// // // We only need to change the bottom 


// orderSupplies('paint', (item) => {
//     printItem(item);
//     orderSupplies('brush', printItem);
// });

//const printItem = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`);
// let paintReady = false;
// let brush = null;

// // // Solution #2:
// // We only need to change the bottom 
// orderSupplies('paint', (item) => {
//     printItem(item);
//     paintReceived = true;

//     if (brush) {
//         printItem(brush);
//     }
// });

// orderSupplies('brush', (item) => {

//     if (paintRecieved) {
//         printItem(item);
//     } else {
//         brush = item;
//     }
//     // printItem(item); only if paint has been delivered
//     // otherwise, 
// });