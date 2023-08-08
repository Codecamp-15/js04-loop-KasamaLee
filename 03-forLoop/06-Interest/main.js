let balance = 100000;
let interest = 2.5/100;
let newBalance = balance;

// 100,000 * (2.5/100) => 2,500
// 102,500 * (2.5/100) => 2562.5
// (deposit+interestTotal) * interest

for (let year = 1; year <=10; year++) {

    newBalance += newBalance * interest;
    console.log(`เงินฝากสะสมปีที่ : ${year} => ${newBalance}`);

}

console.log(`เงินต้น : ${balance.toFixed(2)}`);
console.log(`เงินฝากสะสม : ${newBalance.toFixed(2)}`);
