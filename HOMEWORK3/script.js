// Задание 1
// Создайте функцию которая возводит переданное число в куб, 
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const thirdDegree = number => number ** 3;

console.log(thirdDegree(2));
console.log(thirdDegree(3));
console.log(`Сумма: ${thirdDegree(2) + thirdDegree(3)}`);

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль
// текст "Размер заработной платы за вычетом налогов равен значение"

function salaryAfterTax(salaryAmount) {
    if (Number.isNaN(salaryAmount / 2)) {
        console.log("Значение задано неверно. Это должно быть число");
    } else {
        console.log(`Размер заработной платы за вычетом налогов равен ${salaryAmount - salaryAmount * 0.13} рублей`);
    }
}

salaryAfterTax(prompt("Введите размер заработной платы без учета налога"));
// salaryAfterTax(100000);
// salaryAfterTax('80000');
// salaryAfterTax("пятьдесят тысяч");


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет
// максимальное значение среди этих чисел

function findMaxNum(num1, num2, num3) {
    switch (true) {
        case ((num1 > num2 && num1 > num3) || (num1 > num2 && num2 === num3)):
            console.log("Первое число максимальное");
            break;
        case ((num1 < num2 && num2 > num3) || (num1 < num2 && num1 === num3)):
            console.log("Второе число максимальное");
            break;
        case ((num1 < num3 && num2 < num3) || (num1 < num3 && num1 === num2)):
            console.log("Третье число максимальное");
            break;
        case (num1 === num3 && num2 === num3):
            console.log("Все введенные числа равны");
            break;
        case (num1 > num3 && num1 === num2):
            console.log("Первое и второе числа максимальные");
            break;
        case (num2 < num1 && num1 === num3):
            console.log("Первое и третье числа максимальные");
            break;
        case (num1 < num3 && num2 === num3):
            console.log("Второе и третье числа максимальные");
            break;
        default:
            console.log("Одно или несколько введенных значений некорректно");
            break;
    }
}

findMaxNum(+prompt("Введите первое число"), +prompt("Введите второе число"), +prompt("Введите третье число"));

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и 
// выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение 
// console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция 
// сложения в данном примере, ваши названия функций могут отличаться). 
// Округлять значения, которые возвращают функции не нужно, однако, обратите 
// внимание на разность, функция должна вычесть из большего числа меньшее, либо 
// вернуть 0, если числа равны. Функциям всегда передаются корректные числа, 
// проверки на NaN, Infinity делать не нужно.

const sumNums = (number1, number2) => (+number1) + (+number2);
const differenceNums = (number1, number2) => {
    if (number1 === number2) {
        return 0;
    } else if (number1 > number2) {
        return (+number1) - (+number2);
    } else {
        return (+number2) - (+number1);
    }
};
const multiplyNums = (number1, number2) => (+number1) * (+number2);
const divideNums = (number1, number2) => (+number1) / (+number2);

console.log(sumNums(3, 2)); //Сумма
console.log(differenceNums(10, 3)); //Разность, где первое большее. Из него будет вычитаться второе
console.log(differenceNums(7, 9)); //Разность, где второе большее. Из него будет вычитаться первое (СОГЛАСНО ТЗ)
console.log(differenceNums(2, 2)); //Разность, где числа равны. Функция вернет 0
console.log(multiplyNums(3, 7)); //Умножение
console.log(divideNums(10, 4)); //Деление