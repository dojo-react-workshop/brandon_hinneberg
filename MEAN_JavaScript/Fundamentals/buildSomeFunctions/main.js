// Function 1
function runningLogger() {
    console.log(`I'm running!!`);
}

// Function 2
function multiplyByTen(value) {
    return value * 10;
}

// Function 3
function stringReturnOne() {
    return 'software';
}

function stringReturnTwo() {
    return 'update';
}

// Function 4
function caller(value) {
    if (typeof value === 'function') {
        value();
    }
}

// Function 5
function myDoubleConsoleLog(val1, val2) {
    if (typeof val1 === 'function') {
        console.log(var1());
    }
    if (typeof val2 === 'function') {
        console.log(val2());
    }
}

// Function 6
function caller2(value) {
    console.log('starting');
    if (typeof value === 'function') {
        setInterval(value, 2000);
    }
    console.log('ending');
    return 'interesting';
}

let value = function val() {
    console.log('hello');
}

caller2(value);