// Problem 1
console.log(first_variable);
var first_variable = 'Yipes I was first';

function firstFunc() {
    first_variable = 'Not anymore!!!';
    console.log(first_variable);
}
console.log(first_variable);

// Problem 2
var food = 'Checken';

function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
    console.log(food);
}
eat();
console.log(food);


// Problem 3
var new_word = 'NEW!';

function lastFunc() {
    new_word = 'old';
}
console.log(new_word);