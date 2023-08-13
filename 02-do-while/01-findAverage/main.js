// - ให้เขียนโค้ดเพื่อรับ input มาเป็นตัวเลข
// - โดยให้รับมาเรื่อยๆ จนกว่า ผู้ใช้จะพิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเลข
// - ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา

// ```js
// /*
// GET : Input
// CHECK : number
// IF number
//     ADD number to sum
//     ADD 1 to count
//     BACK TO LINE 7 
// ELSE 
//     PRINT sum
//     PRINT average
// */ 


let number;
let sum = 0;
// let avg = 0;
let count = 0;


do {
    number = prompt("Enter number : ");

    if (+number <= 0) {
        break; // Exit the loop
    }

    sum += Number(number);
    count++;
    // console.log(`Sum : ${sum}`);
    // console.log(`Avg : ${sum / count}`);

} while (!(number === null || number == '' || isNaN(number)));

console.log(`Sum : ${sum}`);
console.log(`Avg : ${sum / count}`);

