console.log('learn counting loop');

console.log('staring...');

// for (let i = 0; i<=20; i+=2) {
//     console.log(i);
// }
// console.log('end')


// FizzBuzz
// Range : 1-20
// divided by 3 : PRINT Fizz
// divided by 5 : PRINT Buzz
// divided by 3 and 5 : PRINT FissBuzz
// others PRINT number
// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     }
//     else if (i % 3 === 0) {
//         console.log('Fizz');
//     }
//     else if (i % 5 === 0) {
//         console.log('Buzz')
//     }
//     else {
//         console.log(i);
//     }
// }
// console.log('end')

// EX.3 : skip Fizz
// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
//     else if (i % 3 === 0) console.log('Fizz');
//     else if (i % 5 === 0) continue;  
//     else console.log(i);
    
// }
// console.log('end')


// EX.3-B
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 ==0) console.log(i);
//     else continue;
//     console.log('even');
// }


// EX.4 : Concat String
// let str = '';
// for (let i = 1; i <= 10; i++) {
//     if (i % 3 ==0) continue;
//     str += i;
//     // '' + 1 => '1'
// }
// console.log(str);


// EX.5 : remove vowel (a, e, i, o, u)
// let src = 'codecamp';
// let result = ''; //cdcmp

// SOLV.1
// for (let i = 0; i < src.length; i++) {
//     // console.log(src[i]);
//     let c = src[i];
//     let isVowel = (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u');
//     if (isVowel) {
//        continue;
//     }
//     result += src[i];
// }
// console.log(result);

// SOLV.2
// for (let i in src) {
//     if (src[i] == 'a' || src[i] == 'e' || src[i] == 'i' || src[i] == 'o' || src[i] == 'u') {
//         continue;
//      }
//     result += src[i];
// }
// console.log(result);

// SOLV.3
// for (let char of src) {
//     if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
//         continue;
//      }
//     result += char;
// }
// console.log(result);


// ADVANCE : Nested loop;
// Multiplication Table
for (let i = 1; i <= 12; i++) {
    console.log(`Multiplication ${i}`)
    for (let j = 1; j <= 12; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
    console.log('\n');
}

