let func1 = function sum(x, y) {
    let sum = 0;
    for (var i = x; i <= y; i++) {
        sum += i;
    }
    console.log(sum);
}

let func2 = function findMin(arr) {
    let min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    console.log(min);
}


let Brandon = {
    name: 'brandon',
    distance_traveled: 0,
    say_name: function() {
        console.log(this.name);
    },
    say_something: function(msg) {
        if (msg === 'I am cool') {
            console.log(`${this.name} says I am cool`);
        }
    },
    walk: function() {
        console.log(`${this.name} is walking`);
        travler.distance_traveled += 3;
    },
    run: function() {
        console.log(`${travler.name} is running`);
        travler.distance_traveled += 10;
    },
    crawl: function() {
        console.log(`${traveler.name} is crawling`)
        travler.distance_traveled += 1;
    }

}