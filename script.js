"use strict"

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

// let out = document.getElementById("out");
// let number = +prompt("Введіть число та отримайте усі дільники цього числа");

// let tmp = "";

// for(let i = 0; i < number; i++) {
//   if (number === 1 || number === 0) {
//     tmp = "Потрібно ввести більше число";
//   } else if(number%i===0){
//     tmp = tmp + i + ", ";
//   }
// }

// out.innerHTML = tmp;



// Task 4
// 4. Визначте кількість цифр у введеному числі


// let out = document.getElementById("out");
// let num = +prompt("Введіть число та отримайте загальну цифру цього числа");
// let len = 0;

// for(let i = 0; i < num || num == 1 ; i++){
//   num = Math.trunc(num/10);
//   len++ ;
// }
// out.innerHTML = len;



// Task 5
// 5. Запросіть у користувача 10 чисел і підрахуйте, скільки він 
// ввів додатних чисел, від’ємних та нулів. При цьому підрахуйте також кількість парних і непарних чисел. Виведіть 
// статистику на екран. Враховуйте те, що достатньо однієї 
// змінної (не 10) для введення чисел користувачем

// let out = document.getElementById("out");

// let start = confirm("Ви готові вводити 10 чисел?");
// let tmp = 0;
// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0; // парні
// let odd = 0; // не парні 
// let number = 1; // для промпта
// while (start == true) { // змінна start запускає цикл
//   if (tmp < 10) { 

    
//     let num = +prompt(`Введіть ${number} число: `);
//     number++;
//     tmp++;
//     console.log(tmp + "-число: " + num);
//     let result = num % 2 == 0 ? (even = even + 1) : (odd = odd + 1);
//     result; // це для того щоб тернарний вище працював і рахував парні та не парні
//     Math.sign(num);
//       if (num > 0) {
//         positive++;
//       } else if (num < 0) {
//         negative++;
//       } else if (num === 0 || num === -0) {
//         zero++;
//       } else {
//         alert("Невірно введене число");
//       }
    
//   } else {
//     break;
//   }
// } 

// out.innerHTML = `
//     <p>Всього введено чисел: <span>${tmp}</span></p>
//     <p>Додатніх чисел: <span>${positive}</span></p>
//     <p>Від’ємних чисел: <span>${negative}</span></p>
//     <p>Нулів: <span>${zero}</span></p>
//     <p>Парних чисел: <span>${even}</span></p>
//     <p>Не парних чисел: <span>${odd}</span></p>
// `


// console.log("Всього введено чисел: " + tmp); це було тестово, вище зміг перенести все на html
// console.log("Додатніх чисел: " + positive);  
// console.log("Від’ємних чисел: " + negative); ще не доріс до рівня аби вводити данні не через confirm а через input :D
// console.log("Нулів: " + zero); 
// console.log("Парних чисел: " + even);
// console.log("Не парних чисел: " + odd);



/*
6. Зацикліть калькулятор. Запросіть у користувача 2 числа і
знак, розв’яжіть приклад, виведіть результат і запитайте,
чи хоче він розв’язати ще один приклад. І так триватиме
доти, доки користувач не відмовиться.
*/







/*
7. Запросіть у користувача число і на скільки цифр його змістити. Змістіть цифри числа та виведіть результат (якщо
число 123456 змістити на 2 цифри, то вийде 345612).
*/

// let num1 = +prompt("Введіть число: ");
// let num2 = +prompt("Введіть на скільки число змістити: ");


let number = prompt("Введіть число:");
let shift = prompt("Введіть, на скільки цифр зсунути число:");

// Конвертуємо число та зсув у цілі числа
number = parseInt(number);
shift = parseInt(shift);

// Зсуваємо цифри числа на вказану кількість цифр
let shiftedNumber = number.toString().slice(shift) + number.toString().slice(0, shift);

console.log(`Число ${number} зсунуто на ${shift} цифр і стало ${shiftedNumber}`);







// for(i = 2; i <= 9; i ++);{
//   console.log(number);
//     for(b = 1; b <= 10; b + 1){
//         number = i * b
//         console.log(number);
//     }
    
// }

// Вивести чісла від 4 до 400 на екран


// for (let i = 4; i <= 400; i++) {
//   tmp = tmp + i + " ";
// }

// Вивести числа в послідовності 4 7 10 13 з допомогою цикла

// for (let i = 4; i <= 13; i+=3) {
//   tmp = tmp + i + " ";
// }









