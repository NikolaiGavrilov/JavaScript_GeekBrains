// // Задание 1
// // Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели.
// // Выведите на экран “Вторник”

// const week = {
//     1: "понедельник",
//     2: "вторник",
//     3: "среда",
//     4: "четверг",
//     5: "пятница",
//     6: "суббота",
//     7: "воскресенье"
// }

// for (const key in week) {
//     if (key == 2) {
//         console.log(week[key]);
//     }
// }

// // Создайте объект user с ключами 'name', 'surname', ‘age’.
// // Выведите на экран фамилию, имя и возраст через дефис.

// const user = {
//     name: "Nick",
//     surname: "Gavrilov",
//     age: 28
// }
// console.log(`${user.name}-${user.surname}-${user.age}`);

// // Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры
// // Удалите свойство surname
// user.patronymicName = prompt("Введите ваше отчество");
// delete user.surname;
// console.log(user);

// // Задание 2
// // Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:

// // С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера(или наоборот)

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// let object = {};
// for (let index = 0; index < arr2.length; index++) {
//     object[index] = arr1[index];
// }
// let object2 = {};
// for (let index = 0; index < arr2.length; index++) {
//     object2[arr1[index]] = arr2[index];
// }

// console.log(object);
// console.log(object2);


// // Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
// let obj = { x: 1, y: 2, z: 3 };
// for (let key in obj) {
//     obj[key] **= 2;
// }
// console.log(obj);

// //Задание 3
// //Найдите сумму элементов 
// const obj2 = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }

// let summ = 0;
// for (const x in obj2) {
//     for (const y in obj2[x]) {
//         summ += obj2[x][y];
//     }
// }
// console.log(summ);

// console.log(Object.values(obj2).reduce((acc, el) => acc + Object.values(el).reduce((acc, el) => acc + el), 0));

// Задание 4
//     Создайте объект riddles 
// Добавьте свойства question, answer
// создайте метод askQuestion который задает вопрос question и сравнивает ответ с answer
// Если ответил неверно, то в консоль выводится текст: “вы проиграли”
// * По желанию, создать 2 подсказки, если пользователь ответил неверно

const riddles = {
    question: "Мягкие лапки, в лапках цапцарапки",
    answer: "кошка",
    assists: 0,
    askQuestion: function () {
        let userAnswer = prompt(this.question);
        if (this.answer === userAnswer) {
            console.log("Вы угадали");
        } else {
            if (this.assists === 0) {
                this.assists += 1;
                alert("Это животное");
                riddles.askQuestion();
            } else if (this.assists === 1) {
                this.assists += 1;
                alert("Это домашнее животное, мимимишное");
                riddles.askQuestion();
            }
            else {
                console.log("Вы проиграли");
            }
        }
    }
};

console.log(riddles.askQuestion());