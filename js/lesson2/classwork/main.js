// // - Користувач вводить або має два числа.
// //     Потрібно знайти та вивести максимальне число з тих двох .
// //     Також потрібно врахувати коли введені рівні числа.

// let firstNumb = +prompt('first number')
// let secondNumb = parseInt(prompt('second number'))
// if (firstNumb > secondNumb) {
//     console.log(firstNumb)
// } else if (firstNumb < secondNumb) {
//     console.log(secondNumb)
// } else (firstNumb === secondNumb)
// console.log('equal')


// // - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// // Користувач вводить номер квартири просто в змінні або через prompt('') .
// //     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let flatNum = +prompt('flat number')
// if (flatNum <= 1 && flatNum <= 20) {
//     console.log('first enter')
// } else if (flatNum >= 21 && flatNum <= 48) {
//     console.log('second enter')
// } else if (flatNum >= 49 && flatNum <= 90) {
//     console.log('third enter')
// } else {
//     console.log('error')
// }


// // Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
// // якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +prompt('enter number');
// if (number === 10) {
//     console.log('ВІРНО')
// } else if(number != 10)
// console.log('НЕВІРНО')


// // - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// //     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// // якщо в змінну записали щось інше, спрацьовує else

// let x = 9;
// if (typeof x === "number") {
//     console.log('1')
// } else if (typeof x === "string") {
//     console.log('2')
// } else if (typeof x === "boolean") {
//     console.log('3')
// } else if (typeof x === "object") {
//     console.log('3')
// }


// // - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// //     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// //     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temp = +prompt('temperature')
// if (temp >= 10 && temp <= 22) {
//     console.log('ми йдемо ВЧИТИСЯ')
// } else
//     console.log('сидимо вдома і вчимося ОНЛАЙН')


// // - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// //     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення -
// //     що число не вірне ... .

// let test = prompt('numbers');
// switch (test) {
//     case '1':
//         console.log('auto')
//         break;
//     case '2':
//         console.log('moto')
//         break;
//     case '3':
//         console.log('phone')
//         break;
//     case '4':
//         console.log('money')
//         break;
//     case '5':
//         console.log('fried chicken')
//         break;
//     default:
//         console.log('error')
// }