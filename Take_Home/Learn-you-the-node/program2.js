// process.argv.forEach((val,index, array)=>{
//     console.log(val)
// })
// console.log(process.argv[1]);

//console.log(process.argv);

var args = process.argv.slice(2);

function add(total, num) {
    return total + Number(num);
}

var sum = args.reduce(add, 0);

console.log(sum);