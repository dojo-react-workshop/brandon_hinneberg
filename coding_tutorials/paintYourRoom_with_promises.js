const orderSupplies = (item) => {
    // The orderSupplies function first finds the item you requested
    // action is a function
    const warehouse = [
        { item: 'paint', action() { return 'start mixing!' } },
        { item: 'brush', action() { return 'start painting!' } }
    ];

    // Choices a random time to use in the 'setTimeout' function
    const deliveryTime = Math.random() * 3000 + 1000;



    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundItem = warehouse.find((obj) => obj.item === item);

            if (foundItem) {
                resolve(foundItem);
            }

        }, deliveryTime)
    })
}

const printItem = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`);

let brushPromise = orderSupplies('brush');
let paintPromise = orderSupplies('paint');

paintPromise
    .then((item) => {
        paintItem(item);
        return brushPromise;
    })
    .then((item) {
        paintItem(item);
    })





// orderSupplies('paint')


//     .then(function(item) {
//         printItem(item);
//     })

// orderSupplies('brush')
//     .then(function(item) {
//         printItem(item);
//         return 
//     })