// Задание 1
// Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, 
// преобразовать значение в температуру по фаренгейту.
// Формула перевода градусов Цельсия в градусы Фаренгейта: 
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Вывести в консоль температуру в Цельсиях и Фаренгейтах.

const temperatureCels = 20;
const temperatureFahr = (9 / 5) * temperatureCels + 32;
console.log(`Температура по Цельсию: ${temperatureCels}`);
console.log(`Температура по Фаренгейту: ${temperatureFahr}`);


// Задание 2
// Необходимо создать переменную name, записать в эту переменную свое имя.
// Необходимо также создать переменную admin и присвоить этой переменной значение 
// из переменной name.Вывести значение переменной admin в консоль.
const name = "Николай";
// let admin = name;
let admin;
admin = name;
console.log(name);

// Задание со звездочкой 1
// Необходимо создать несколько переменных для хранения информации о погоде:
// Температура в градусах Цельсия.
// Описание погоды(например, "солнечно", "облачно", "дождливо").
// Затем, используя шаблонные строки, составьте сообщение, которое включает в себя
// температуру и описание погоды, и выведите это сообщение в консоль.
// Например, сообщение может выглядеть так:
// "Сегодня на улице 20°C и солнечно."

const temprCels = 20;
const weatherSunny = "солнечно"
const weatherCloudy = "облачно"
const weatherRainy = "дождливо"
console.log(`Сегодня на улице ${temprCels}°C и ${weatherSunny}.`);

// Задание  со звездочкой 2
// Создайте несколько переменных для хранения следующей информации:
// Ваш возраст.
// Ваше любимое число.
// Ваше имя.
// Затем, используя шаблонные строки, создайте сообщение, которое
// объединяет всю эту информацию в интересный факт о вас, и
// выведите это сообщение в консоль.
// Например, сообщение может выглядеть так:
// "Меня зовут Иван, мне 25 лет, и мое любимое число — 7."

let myInfo = {
    myName: "Николай",
    myAge: 28,
    myFavouriteNum: 7
};

console.log(`Меня зовут ${myInfo.myName}, мне ${myInfo.myAge} лет, и моё любимое число - ${myInfo.myFavouriteNum}.`)