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

// let question = 1;

// while (question == 1) {
//     let num1 = +prompt("Введіть перше число");
//     let num2 = +prompt("Введіть друге число");
//     let task = +prompt("Введіть дію: \n 1. + \n 2. - \n 3. / \n 4. *");
//     switch (task) {
//         case 1:
//             alert(num1 + num2);
//         break;
//         case 2:
//             alert(num1 - num2);
//         break;
//         case 3:
//             alert(num1 / num2);
//         break;
//         case 4:
//             alert(num1 * num2);
//         break;
//     }
//     // if (task === 1) {
//     //     alert(num1 + num2);
//     // } else if (task === 2) {
//     //     alert(num1 - num2);
//     // } else if (task === 3) {
//     //     alert(num1 / num2);
//     // } else if (task === 4) {
//     //     alert(num1 * num2);
//     // };


//     question = confirm("Бажаєте продовжити?");
//     if (question === true) {
//         question = 1;
//     } else if (question === false) {
//         question = 0;
//     }
// }



/*
7. Запросіть у користувача число і на скільки цифр його змістити. Змістіть цифри числа та виведіть результат (якщо
число 123456 змістити на 2 цифри, то вийде 345612).
*/


// let number = prompt("Введіть число:");
// let shift = prompt("Введіть, на скільки цифр зсунути число:");
// // Зсуваємо цифри числа на вказану кількість цифр
// let shiftedNumber = number.toString().slice(shift) + number.toString().slice(0, shift);
// let result = (`Число ${number} зсунуто на ${shift} цифр і стало ${shiftedNumber}`);
// out.innerHTML = result;



/* 
8. Зацикліть виведення днів тижня таким чином: «День
тижня. Бажаєте побачити назву наступного дня тижня?”,
і так доти, доки користувач натискатиме OK.
*/



// let days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'];
// console.log(days);

// let currentDay = new Date().getDay();
// console.log(currentDay);

// do {
//   alert(days[currentDay] + '. Бажаєте побачити назву наступного дня тижня?');
//   currentDay = (currentDay + 1) % 7;
//   console.log(days[currentDay]);
// } while (confirm('Бажаєте продовжити?'));



/* 
9. Виведіть таблицю множення для всіх чисел від 2 до 9.
Кожне число необхідно помножити на числа від 1 до 10.
*/


// let number1 = 2;
// let number2 = 9;
// let summ = 0;

// for (let i = number1; i <= number2; i++) {
//     let row = '';
//     console.log(`Наше рівняння ${i} * ${number2}`);  
//   for (let j = 1; j <= 10; j++) {
//     row = (i * j);
//     console.log(`${i} * ${j} = ${row}`);
//   }
// }



/* 
10. Гра «Вгадай число». Запропонуйте користувачеві загадати
число від 0 до 100 і відгадати його наступним способом: в
кожній ітерації циклу поділяєте діапазон чисел навпіл,
записуєте результат в N і запитуєте у користувача «Ваше
число > N, < N або == N?». Залежно від відповіді користувача, зменшуєте діапазон. Початковий діапазон від 0 до
100, поділяєте навпіл і отримуєте 50. Якщо користувач
вказав, що його число > 50, змінюєте діапазон числа від 51
до 100. І так доти, доки користувач не вибере == N.
*/



