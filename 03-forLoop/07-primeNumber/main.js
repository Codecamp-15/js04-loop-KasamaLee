let isPrime = true;

for (let i = 13; i <= 100; i++) {

    for (let j = 2; j <= 9; j++) {
        if (i % j === 0) {
            // console.log(i + " can divided by " + j);
            isPrime = false;
            break;
        } else {
            isPrime = true;
        }
    }

    if (isPrime) {
        console.log(i + ' is Prime')
    }
}

// 12 %1 => 0
// 12 %2 => 0 => prime
// 12 %3 => 0 => prime
// 12 %4 => 0 => prime
// 12 %5 => 2 => Not prime => break loop
// 12 %6 => 0
// 12 %7 => 5
// 12 %8 => 4
// 12 %9 => 3

// 13 % 1 => 0
// 13 % 2 => 1 => prime
// 13 % 3 => 1 => prime
// 13 % 4 => 1 => prime
// 13 % 5 => 3 => prime
// 13 % 6 => 1 => prime
// 13 % 7 => 6 => prime
// 13 % 8 => 5 => prime
// 13 % 9 => 4 => prime  => prime