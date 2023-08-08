console.log('learn while loop');


console.log('staring...');

// let i = 1;
// while (i <= 100) {
//     console.log(i);
//     i++;
// }
// console.log('end');

// FizzBuzz Problem
// Range : 1-20
// divided by 3 : PRINT Fizz
// divided by 5 : PRINT Buzz
// divided by 3 and 5 : PRINT FissBuzz
// others PRINT number

// let i = 1;
// let print = '';

// while (i <= 20) {
//     if (i % 3 === 0) {
//         print += 'Fizz'
//     }
//     if (i % 5 === 0) {
//         print += 'Buzz'
//     }
//     console.log(`lopp: ${i} => ${print}`);
//     print = '';
//     i++;
// }

let i = 1;

while (i <= 20) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz')
    }
    else {
        console.log(i);
    }
    i++;
}
