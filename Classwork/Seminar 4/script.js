// // Задание 1
// // Создайте массив с элементами 1, 2, 3.
// // Выведите на экран каждый из этих элементов.

// const arrayNums = [1, 2, 3];
// for (let i = 0; i < arrayNums.length; i++) {
//     console.log(arrayNums[i]);
// }

// // Создайте массив с произвольными элементами.Выведите на экран количество элементов в этом массиве.

// const arrayRandom = [1, true, "hello", "223", false, null];
// console.log(arrayRandom.length);

// //* Создать функцию, выдающую массив с рандомными числами (длина задается через параметр)
// function createRandomArr(arrayLength) {
//     const randomArr = [];
//     for (let x = 0; x < arrayLength; x++) {
//         randomArr[x] = Math.random();
//     }
//     return randomArr;
// }
// console.log(createRandomArr(3));

// // Создайте массив с элементами 'a', 'b', 'c'.
// // Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.

// const arrayNew = ['a', 'b', 'c'];
// for (let i = 0; i < arrayNew.length; i++) {
//     arrayNew[i] = i + 1;
// }
// console.log(arrayNew);

// Задание 2
// Создайте массив с элементами 1, 2 и 3. С помощью оператора ++
// увеличьте каждый элемент массива на единицу.
// const arrayNumsToIncrease = [1, 2, 3];
// for (let i = 0; i < arrayNumsToIncrease.length; i++) {
//     arrayNumsToIncrease[i] += 1;
// }
// console.log(arrayNumsToIncrease);

//Функция, которая увеличивает все элементы массива на 1
// function increaseNumsInArray(arrayToUpgrade) {
//     for (let i = 0; i < arrayToUpgrade.length; i++) {
//         arrayToUpgrade[i] += 1;
//     }
//     return arrayToUpgrade;
// }
// const arrayForFunction = [11, -1, 5, 7];
// console.log(increaseNumsInArray(arrayForFunction));

// Узнайте длину следующего массива:
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);
// console.log(arr);

// //         Пусть дан такой массив:
// // const arr = [1, 2, 3];
// // Добавьте ему в конец элементы 4 и 5

// const arr2 = [1, 2, 3];
// arr2.push(4, 5);
// console.log(arr2);

// // Создайте произвольный массив из 5 элементов, Удалите из него два
// // элемента. Проверьте, какое станет значение свойства length после
// // этого.

// const arr3 = ['a', true, 'b', 4, 5];
// console.log(arr3);
// console.log(arr3.length);
// arr3.pop();
// arr3.pop();
// console.log(arr3);
// console.log(arr3.length);

//Функция, удаляющая 2 последних элемента
// function popTwoElems(arrayToProcess) {
//     for (let x = 0; x < 2; x++) {
//         arrayToProcess.pop()
//     }
//     return arrayToProcess;
// }

// const arrayForFunction2 = ["1", 2, true, false, null, Infinity, 'x'];
// console.log(arrayForFunction2);
// console.log(popTwoElems(arrayForFunction2));
// console.log(popTwoElems(arrayForFunction2));


// Задача 3
// С помощью цикла for выведите в консоль числа от 11 до 33.
// let result = [];
// for (let index = 11; index < 33 + 1; index++) {
//     result.push(index);
// }
// console.log(...result);

// С помощью цикла for выведите в консоль нечетные числа в
// промежутке от 1 до 99.

// let result2 = [];
// for (let index = 1; index < 99 + 1; index++) {
//     if (index % 2 !== 0) {
//         result2.push(index);
//     }
// }
// console.log(result2);

// // С помощью цикла for выведите в консоль числа от 100 до 0.

// let result3 = [];
// for (let index = 100; index >= 0; index--) {
//     result3.push(index);

// }
// console.log(result3);

// function numbersInRangeBetween(numStart, numEnd) {
//     let result4 = [];
//     if (numStart < numEnd) {
//         for (let index = numStart; index < numEnd; index++) {
//             result4.push(index);
//         }
//     } else if (numStart > numEnd) {
//         for (let index = numEnd; index > numEnd; index--) {
//             result4.push(index);
//         }
//     } else {
//         result4.push(numStart);
//     }
//     console.log(result4);
// }

// console.log(numbersInRangeBetween(10, 20));
// console.log(numbersInRangeBetween(-10, 0));
// console.log(numbersInRangeBetween(99, 99));

// // Дано число num с неким начальным значением.
// // Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000.
// // Какое число получится? Посчитайте количество итераций, необходимых для этого.

// function multiplyUpToThousandAndSmth(number) {
//     count = 0;
//     if (number < 0) {
//         number = number * (-1);
//         while (number < 1000) {
//             number *= 3;
//             count++;
//         }
//         console.log("Итоговое число больше 1000 " + number);
//         console.log("Колво итераций " + count);
//     } else if (number === 0) {
//         console.log("Печалька, ноль есть ноль, его не умножить");
//     } else {
//         while (number < 1000) {
//             number *= 3;
//             count++;
//         }
//         console.log("Итоговое число больше 1000 " + number);
//         console.log("Колво итераций " + count);
//     }
// }

// multiplyUpToThousandAndSmth(3);
// multiplyUpToThousandAndSmth(-2);
// multiplyUpToThousandAndSmth(0);




// Задание 4
// Дан массив const arr = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива, которые больше 3 - х, но
// меньше 10.
// const arr = [2, 5, 9, 15, 1, 4];
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > 3 && arr[index] < 10) {
//         console.log(arr[index]);
//     }
// }

// // Найдите сумму четных чисел от 2 до 100.
// let summ = 0;
// for (let index = 0; index <= 100; index++) {
//     if (index % 2 === 0) summ += index;
// }
// console.log(summ);

// let summ1 = 0;
// for (let index = 0; index <= 100; index += 2) {
//     summ1 += index;
// }
// console.log(summ1);


// // Дан массив const = [2, 5, 9, 3, 1, 4];
// // Найдите сумму элементов этого массива.
// const arrToSumm = [2, 5, 9, 3, 1, 4];
// let summOfElems = 0;
// arrToSumm.forEach(element => {
//     summOfElems += element;
// });
// console.log(summOfElems);

// С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
let i = 1;
let arrFutureString = [];
while (i !== 10) {
    arrFutureString.push('-');
    arrFutureString.push(i);
    i++;
}
arrFutureString.push('-');
console.log(arrFutureString.join(""));

// Дан массив с числами.const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл,
//     который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0.
// После этого цикл должен завершить свою работу.
const array2 = [2, 5, 9, 0, 3, 1, 4];
for (let index = 0; index < array2.length; index++) {
    if (array2[index] === 0) {
        break;
    } else { console.log(array2[index]); }
}