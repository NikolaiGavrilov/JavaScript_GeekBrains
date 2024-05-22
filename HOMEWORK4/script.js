// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

function writeOddAndEvenNumbers(startingNumber, endingNumber) {
    const array = [];
    for (let index = startingNumber; index < endingNumber + 1; index++) {
        array[index] = `${index} - `;
        if (index === 0) {
            array[index] += 'это ноль';

        } else if (index % 2 !== 0) {
            array[index] += 'нечетное число';
        } else {
            array[index] += 'четное число';
        }
        console.log(array[index]);
    }
}

writeOddAndEvenNumbers(0, 10);


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const removeTwoValuesFromArray = (arrayToProcess, firstValueToRemove, secondValueToRemove) => {
    const newArray = [];
    for (let i = 0; i < arrayToProcess.length; i++) {
        if (arrayToProcess[i] !== firstValueToRemove && arrayToProcess[i] !== secondValueToRemove) {
            newArray.push(arrayToProcess[i]);
        };
    }
    return newArray;
}

const arrayToShorten = [1, 2, 3, 4, 5, 6, 7];
let result = removeTwoValuesFromArray(arrayToShorten, 4, 5);
console.log(result);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, 
// и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function generateRandomArray(arrayLength, arrayMaxValue) {
    const randomArray = [];
    for (let i = 0; i < arrayLength; i++) {
        if (i % 2 == 0) {
            randomArray[i] = Math.ceil((Math.random() * arrayMaxValue));
        } else {
            randomArray[i] = Math.floor((Math.random() * arrayMaxValue));
        }
    }
    return randomArray;
}

function findSumOfArrayElems(arrayToSumm) {
    let sum = 0;
    arrayToSumm.forEach(element => {
        sum += element;
    });
    return sum;
}

const findMinInArray = (arrayToAnalyse) => {
    let min = Infinity;
    for (let i = 0; i < arrayToAnalyse.length; i++) {
        if (min > arrayToAnalyse[i]) {
            min = arrayToAnalyse[i];
        }
    }
    return min;
}

const checkValueInArray = (arrayToCheck, valueToCheck) => {
    let result = false;
    arrayToCheck.forEach(element => {
        if (element === valueToCheck) {
            result = true;
        }
    });
    return result;
}

const resultingRandomArray = generateRandomArray(5, 9);
console.log('В результате рандомной генерации получился массив:', resultingRandomArray);
console.log(`Сумма элементов массива: ${findSumOfArrayElems(resultingRandomArray)}`);
console.log(`Минимальный элемент массива: ${findMinInArray(resultingRandomArray)}`);
const valueToFind = 3;
console.log(`Результат проверки на наличие искомого элемента ${valueToFind} в массиве: ${checkValueInArray(resultingRandomArray, valueToFind)}`);


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

function drawMountain(amountOfRows, symbolToDrawWith) {
    let drawing = '';
    for (let index = 0; index < amountOfRows; index++) {
        drawing += "+";
        for (let j = 0; j < index; j++) {
            drawing += "+";
        }
        drawing += '\n';
    }
    return drawing;
}
console.log(drawMountain(20, 'x'));