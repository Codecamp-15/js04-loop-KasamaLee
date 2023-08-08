let sum = 0;
let sumEven = 0;
let sumEvenSquare = 0;
let sumOdd = 0;
let sumThirdSquare = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
    if (i % 2 === 0){ 
        sumEven += i; 
        // console.log(i);
    } else {
        sumOdd += i;
        // console.log(i);
    }
}
console.log(`summation of number : ${sum}`); // 5050
console.log(`summation of even number : ${sumEven}`); // 2550
console.log(`summation of odd number : ${sumOdd}`); // 2500
// *** สังเกตว่าจริง ๆ แล้ว sumOdd = sum - sumEven; ***


for (let i = 1; i <= 100; i++) {
    sum += i;
    if (i % 2 === 0){ 
        sumEven += i; 
        sumEvenSquare = sumEvenSquare + i**2;
        // console.log(i);
    }
    if (i % 3 == 0) {
        sumThirdSquare = sumThirdSquare + i**2;
        // console.log(i);
    }
}

console.log(`summation of even number ^ 2 : ${sumEvenSquare}`); // 10000
console.log(`summation of third number ^ 2 : ${sumThirdSquare}`); // 9801
console.log(`summation of (even number ^ 2) - (third number ^ 2) : ${sumEvenSquare - sumThirdSquare}`);