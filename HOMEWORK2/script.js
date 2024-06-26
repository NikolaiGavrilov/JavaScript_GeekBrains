// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = +prompt("Введите первое число");
let num2 = +prompt("Введите второе число");
console.log((num1 <= 1) ? "Правильно! Первое число меньше или равно 1" : "Первое число должно быть больше 1");
console.log((num2 >= 3) ? "Правильно! Второе число больше или равно 3" : "Второе число должно быть меньше 3");

// Задание 2
// Перепишите код к тернарному оператору
// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

let test = true;
console.log((test === true) ? "+++" : "---");

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

function inputDay() {
    let day = +prompt("Введите число из интервала от 1 до 31");
    if (day >= 1 && day <= 10) {
        console.log(`День ${day} принадлежит к 1-й декаде`)
    } else if (day >= 11 && day <= 20) {
        console.log(`День ${day} принадлежит ко 2-й декаде`)
    } else if (day >= 21 && day <= 31) {
        console.log(`День ${day} принадлежит к 3-й декаде`)
    } else {
        console.log("Введены некорректные данные, выполняется перезапуск программы.")
        inputDay();
    }
}

inputDay();

// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , 
// десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, 
// ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

// Уточнение: пользователь всегда вводит корректное положительное целое число.

let userNumber = prompt("Введите число");
if (userNumber < 1000) {
    console.log(`В числе ${userNumber} количество сотен: ${userNumber / 100 - userNumber % 100 / 100}, количество десятков: ${(userNumber / 10 - userNumber % 10 / 10) % 10}, количество единиц: ${userNumber % 10}`);
} else if (userNumber > 1000) {
    console.log(`В числе ${userNumber} количество сотен: ${(userNumber / 100 - userNumber % 100 / 100) % 10}, количество десятков: ${(userNumber / 10 - userNumber % 10 / 10) % 10}, количество единиц: ${userNumber % 10}`);
}