"use strict"

// const { Children } = require("react");

// let i = 0;

// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// Виведіть # стільки разів, скільки вказав користувач.

// let count = +prompt("Enter count #");
// let i = 0;
// let symbol = "";

// while (i < count) {
//   //   symbol += "#";
//   symbol = symbol + "#";
//   console.log(symbol);
//   i++;
// }
// symbol += "#" === symbol = symbol + "#";

// Користувач ввів число, а на екран було виведено всі числа:
// від введеного до 0.

// let number = +prompt("Enter number");
// let i = 0;

// while (number >= i) {
//   console.log(number);
//   number -= 1;
// }


//Applications

// let number = 10;

// while (number) console.log(number--);

///do while

// let count = 0;

// do {
//   console.log("count");
//   count++;
// } while (count < 0);









// for(початок, умова, крок){
//     тіло циклу
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i == 5; i++) {
//   console.log(i);
// }

// let i = 0;
// for (; i < 10; i++) {
//   console.log(i);
// }

// let i = 0;
// for (; i < 10; ) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// for (;;) {
//   console.log(i);
//   i++;
//   if (i > 10) break;
// }
// let i, j;

// for (let i = 0, j = 10; i != j; i++, j--) {
//   console.log(i, "!=", j);
// }

//TODO потрібно згенерувати не більше десяти випадкових чисел діапазону 1-7.
//TODO Якщо випаде четвірка, генерація припиниться.

// for (let i = 0; i < 10; i++) {
//   let random = Math.round(Math.random() * 6 + 1);
//   if (random === 4) break;
//   console.log(random);
// }

//* треба згенерувати рівно 10 випадкових чисел, але без четвірок, у такому випадку краще використати цикл while, оскільки нам не відомо, скільки буде ітерацій циклу, щоб випало 10 чисел без 4-ки.

// let i = 0;
// let n = 0;
// while (i < 10) {
//   let random = Math.round(Math.random() * 10);
//   if (random == 4) continue;
//   //   console.log("i = ", i, random);
//   i++;
//   n++;
//   console.log(n);
// }

// //TODO
// for (let i = 0; i < 10; i++) {
//   let random = Math.round(Math.random() * 10);
//   if (random == 4) continue;
//   console.log(random, " - ", i);
// }

// for(let i = 0; i < 10; i++){
//     i != 2 ? console.log('i != 2') : continue
// }

/*
1. Виведіть усі числа від 1 до 100, які кратні числу зазначеному користувачем.
*/

// let userNumber = +prompt("Enter number");

// for (let i = 0; i < 100; i++) {
//   let result = i + 1;

//   //   console.log(i, " ---- ", result);

//   if (result % userNumber === 0) {
//     console.log(result);
//   }
// }

/*
Виведіть кожен 4-ий елемент із зазначеного користувачем
діапазону. Користувач вказує мінімальне та максимальне
значення діапазону. 
*/

// let min = +prompt("Enter min number");
// let max = +prompt("Enter max number");

// if (min && max) {
//   for (let i = min; i <= max; i += 4) {
//     console.log(i);
//     if (i > max) break;
//   }
// }

// // min - 16
// // i + 4

// i - 16 + 4 = 20
// i - 20 + 4 = 24
// i - 24 + 4 = 28

//Запросіть число і перевірте, чи просте воно. Просте число
// ділиться без залишку тільки на себе і на 1.

// let number = +prompt("Enter number");

// if (
//   number % 1 == 0 &&
//   number % number == 0 &&
//   (number % 2 !== 0 ? false : true)
// ) {
//   alert("ok");
// } else {
//   alert("no");
// }

// let number = +prompt("Enter number");

// function primeNumb(num) {
//   if (num > 1) {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         return "Не просте число";
//       }
//     }
//     return "Просте число";
//   } else {
//     return "Число має бути більше 1";
//   }
// }

// console.log(primeNumb(number)); // тут вводимо число

// let java = confirm("Хочете ще користуватися калькулятором");
// console.log("java: ", java);

// console.log("🐢");

//кількість ітерацій циклу
// let count = 0;
// for (let i = 150; i < 200; i++) {
// //   console.log(i);

// count++;
// console.log(count);
// }

// const input = document.querySelector('[type="color"]');
// console.log("input: ", input);

// textContent надає доступ до тексту всередині елемента: тільки текст, мінус всі <теги>.

// innerHTML: вміст
// Властивість innerHTML дозволяє отримати HTML всередині елемента як рядок.

// Ми також можемо це змінити. Отже, це один з найпотужніших способів зміни сторінку.

// На прикладі показано вміст document.body який потім повністю замінюється.

// const box = document.getElementById("box");

// box.textContent = "<mark>HELLO</mark>";
// box.innerText = "<mark>HELLO</mark>";
// box.innerHTML = "<mark>HELLO</mark>";

// console.log(text);
// console.log(text.textContent);
// console.log(text.innerHTML);

// for (let i = 0; i < 10; i++) {
//   box.innerHTML += `<mark>${i}</mark>`;
// }
// console.log(box.innerHTML);



// for(початок, умова, крок){
//     тіло циклу
// }

// Task 1
// 1. Підрахуйте суму всіх чисел у заданому користувачем діапазоні. 

// let number1 = +prompt("Введіть перше число: ");
// let number2 = +prompt("Введіть другечисло: ");
// let summ = 0;


// for (let i = number1; i <= number2; i++) {
//     summ += i;
//     // summ = summ + i;
//     console.log(i, "i");
//     console.log(summ, "підрахунок");
// }

// console.log(summ, "Finish");


// Task 2
// 2. Запросіть 2 числа і знайдіть тільки найбільший спільний дільник

// let y = 15;
// //  +prompt("Введіть перше число: ");
// let x = 35;
// //  +prompt("Введіть другечисло: ");

// // function NOD (x, y) {
// // 	if (y > x) return NOD(y, x);
// // 	if (!y) return x;
// // 	return NOD(y, x % y);
// // }
// // console.log(NOD(number1, number2));

// let number1 = +prompt("Введіть перше число: ");
// let number2 = +prompt("Введіть другечисло: ");
// let gcd;
// while (number1!=number2) {
//   if (number1>number2) {
//     number1 = number1 -number2;
//   }
//   else {
//     number2 = number2 - number1;
//   }
// }
// gcd = number1;
// console.log(gcd);


// Task 3
// 3. Запросіть у користувача число та виведіть усі дільники цього числа

let out = document.getElementById("out");
let number = +prompt("Введіть число та отримайте усі дільники цього числа");

let tmp = "";

for(let i = 0; i < number; i++) {
  if (number === 1 || number === 0) {
    tmp = "Потрібно ввести більше число";
  } else if(number%i===0){
    tmp = tmp + i + ", ";
  }
}

out.innerHTML = tmp;






// Вивести чісла від 4 до 400 на екран


// for (let i = 4; i <= 400; i++) {
//   tmp = tmp + i + " ";
// }

// Вивести числа в послідовності 4 7 10 13 з допомогою цикла

// for (let i = 4; i <= 13; i+=3) {
//   tmp = tmp + i + " ";
// }









