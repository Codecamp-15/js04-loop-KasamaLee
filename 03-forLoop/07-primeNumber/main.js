// ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100

/*
let isPrime;

for (let i = 2; i <= 100; i++) {
    isPrime = true; // flag
    for (let divider = 2; divider < i; divider++) {
        // console.log(i + '/' + j)
        if (i % divider === 0) {
            // console.log(i + " can divided by " + j);
            isPrime = false;
            break;
        } else {
            isPrime = true;
        }
    }

    if (isPrime) {
        console.log(i + ' is Prime');
    }
}
*/

// 12 %1 => 0 X
// 12 %2 => 0 => prime
// 12 %3 => 0 => prime
// 12 %4 => 0 => prime
// 12 %5 => 2 => Not prime => break loop
// 12 %6 => 0 X
// 12 %7 => 5 X
// 12 %8 => 4 X
// 12 %9 => 3 X
// 12 %10 =>  X
// 12 %11 =>  X
// 12 %12 =>  X

// 13 % 1 => 0 X
// 13 % 2 => 1 => prime
// 13 % 3 => 1 => prime
// 13 % 4 => 1 => prime
// 13 % 5 => 3 => prime
// 13 % 6 => 1 => prime
// 13 % 7 => 6 => prime
// 13 % 8 => 5 => prime
// 13 % 9 => 4 => prime
// 13 % 10 => 3 => prime
// 13 % 11 => 2 => prime
// 13 % 12 => 1 => prime => end
// 13 % 13 => 0 X

// 2 % 1 => 0 => prime
// 2 % 2 => 0 => prime => end



// ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100
// - Program : จำนวนที่กำหนดให้เป็นจำนวนเฉพาะหรือเปล่า ?

let n = 5;
// 5/1 X
// 5/2
// 5/3
// 5/4
// 5/5 X
for (let n = 2; n <= 100; n++) {
    let isPrime = true; // flag // redeclaration of variables
    for (let divider = 2; divider < n; divider++) {
        // divider 2,3,4,...,n-1
        if (n % divider == 0) {
            isPrime = false;
            break;
        }  
    }
    
    if (isPrime) console.log(`number ${n} is prime number`);
}

