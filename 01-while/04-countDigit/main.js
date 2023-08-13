// ให้เขียนโค้ดเพื่อนับจำนวนหลักเลขโดด  
//     - รับค่าตัวเลขจากผู้ใช้งาน  
//     - แสดงผลลัพธ์เป็นจำนวนหลักของตัวเลข

// เลขโดด : 0-9

// 1150 / 10 => 115 => count = 1;
// 115 / 10 => 11.5 => count = 2;
// 11.5/10 => 1.15 => count = 3;
// 1.15/10 => 0.115 => count = 4;

// let n = +prompt('Enter number : ');
// let count = 0;

// if (n < 0) n = -n;

// while (n >= 1) {
//     n = n/10;
//     console.log(n);
//     count++;
// }
// console.log(count);


// -----------------------------------------------------
// (1152-2) / 10 => n' => 115
// (115-5) / 10 => n' => 11
// (11-1) / 10 => n' => 1
// (1-1) /10 => n' => 0

let n = +prompt('Enter number : ');
let count = 0;
let sum = 0;

while (n) {
    let remainder = n % 10;
    n = (n-remainder) / 10;
    sum += remainder;
    count++;
}
console.log(count, sum);

