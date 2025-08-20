// function greet() {
//     console.log('Добро пожаловать, ученица!')
// }

// greet();
// // --------------------------------------------------------------------------------------

// function greet(name) {
//     console.log('Приветики, милашка ' + name + '!')
// }

// greet('Amina');
// greet('Nuni');
// greet('Aliaskar');
// // --------------------------------------------------------------------------------------

// function multiply(a, b) {
//     console.log(a*b);
// };

// multiply(2, 5)
// // --------------------------------------------------------------------------------------

// function multiply2(a, b) {
//     return a + b;
// }

// let sum = multiply2(50,50);
// console.log(sum);
// // --------------------------------------------------------------------------------------

// function square(num) {
//     return num * num;
// }

// let result3 = square(5);
// console.log(result3);
// // --------------------------------------------------------------------------------------

// function raiseToPower(base, exponent = 2) {
//     return base ** exponent;
// }

// let result4 = raiseToPower(3);
// let result5 = raiseToPower(2, 3);

// console.log(result4);
// console.log(result5);
// // --------------------------------------------------------------------------------------

// function checkAge(age) {
//     if (age >= 18) {
//         console.log('Доступ разрешён');
//     } else {
//         console.log('Доступ запрещён');
//     }
// }

// checkAge(15);
// checkAge(18);
// checkAge(23);
// checkAge(17);
// // --------------------------------------------------------------------------------------

// function greetUser(name, isMorning) {
//     if (isMorning) {
//         console.log('Доброе утро, ' + name + '!');
//     } else {
//         console.log('Добрый день, ' + name + '!');
//     }
// }

// greetUser('Amina', false);
// greetUser('Karla', true);
// // --------------------------------------------------------------------------------------

// function add(a, b) {
//     return a + b;
// };

// const add = (a, b) => {
//     return a + b;
// };

// const greet = (name) => {
//     return "Привет, " + name + '!';
// }
// // --------------------------------------------------------------------------------------

// const formatMessage = (name, isVIP) => {
//     if (isVIP) {
//         return 'Добро пожаловать, VIP-гость ' + name + '!';
//     } else {
//         return 'Здравствуйте, ' + name + '!';
//     }
// }

// console.log(formatMessage('Aliya', false));
// console.log(formatMessage('Sanya', true));


// const isVip2 = true;
// const formatMessage2 = isVip2 ? 'Welcome, VIP' : 'Welcome';
// console.log(formatMessage2);

// const formatMessage3 = (name, isVip3) => isVip3 ? "Добро пожаловать, VIP-гость " + name + "!" : "Здравствуйте, " + name + "!";
// console.log(formatMessage3('Amina', true));
// // --------------------------------------------------------------------------------------

// function showGreeting(name) {
//     function formatName(name) {
//         return 'Имя пользователя: ' + name;
//     }

//     console.log('Добро пожаловать!')
//     console.log(formatName(name));
// }

// showGreeting('Amina');

// function prepareOrder(item) {
//     function formatItem(item) {
//         return 'Ваш заказ:' + item;
//     }

//     console.log('Обработка заказа...');
//     console.log(formatItem(item));
// }

//     prepareOrder('notebook');

// function analyzeName(name) {
//     function formatName(str) {
//         return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//     }
//     const formatted = formatName(name);
//     console.log("Обработанное имя: " + formatted);
//     console.log("Количество букв:" + formatted.length);
// }

// analyzeName('аруЖан');
// // --------------------------------------------------------------------------------------

// function sayHi(name) {
//     console.log('Hi' + name + '!');
// }

// function processUserName(callBack) {
//     const userName = 'Amina';
//     callBack(userName);
// }

// processUserName(sayHi);
// // --------------------------------------------------------------------------------------

// function sayHello() {
//     console.log('Привет! Как твои успехи?')
// }

// sayHello()
// // --------------------------------------------------------------------------------------

// function welcomeUser(name = 'гость') {
//     console.log('Добро пожаловать, ' + name + '!');
// }

// welcomeUser();
// welcomeUser('Amina');
// // --------------------------------------------------------------------------------------

// function checkAccess(name, isVip) {
//     if(isVip) {
//         console.log('Добро пожаловать, VIP гость ' + name + '!');
//     } else {
//         console.log('Здравствуйте, ' + name + '!');
//     }
// }

// checkAccess('Amina', true);
// checkAccess('Amina', false);

// function checkAccess(name, isVIP) {
//     const ternaryCheckAccess = isVIP ? 'Добро пожаловать, VIP гость ' : 'Здравствуйте, ';
//     console.log(ternaryCheckAccess + name + '!');
// }

// checkAccess('Nuri', false);
// checkAccess('Nuri', true);
// // --------------------------------------------------------------------------------------

// const sayBye = (name) => 'Bye, ' + name;

// console.log(sayBye('Amina'));

// const greetFull = (firstName, lastName = '') => 'Welcome, ' + firstName + ' ' + lastName + '!';

// console.log(greetFull('Amina', 'Yeszhanova'));

// const greetFull = (firstName, lastName = '') => {
//     return lastName ? 'Welcome, ' + firstName + ' ' + lastName + '!': 'Welcome, ' + firstName + '!';
// }

// console.log(greetFull('Amina', 'Yeszhanova'));
// // --------------------------------------------------------------------------------------

// function getWeatherMessage(temperature, isSunny) {
//     if (isSunny && temperature > 25) {
//         return 'Погода отличная! Солнечно и тепло: 28°C!';
//     } else if (isSunny === false) {
//         return 'Сегодня пасмурно. Температура: 15°C.';
//     } else {
//         return 'На улице 20°C. Возьми кофту на всякий случай.';
//     }
// }

// console.log(getWeatherMessage(28, true));


// function recommendOutfit(temperature, isRainy) {
//     if (isRainy && temperature < 20) {
//         return 'Сегодня идет дождь, надень дождевик и возьми зонтик! Температура: ' + temperature + '°C!';
//     } else if (isRainy === false && temperature > 25) {
//         return 'Сегодня солнечно, может быть жарко, поэтому оденься легко. Температура: ' + temperature + '°C.';
//     } else {
//         return 'На улице ' + temperature + '°C. Возьми кофту на всякий случай.';
//     }
// }

// console.log(recommendOutfit(19, true));


// function recommendDrink(timeOfDay, temperature) {
//     if(timeOfDay === 'утро' && temperature < 15) {
//         return 'Утро холодное. Попей горячего чая.'
//     } else if (timeOfDay === 'день' && temperature > 25) {
//         return 'Жаркий день. Лучше выпей холодного лимонада!'
//     } else if (timeOfDay === 'вечер') {
//         return 'Вечернее время — самое лучшее для какао.'
//     } else {
//         return 'Просто пей воду — она всегда хороша.'
//     }
// }

// console.log(recommendDrink('утро', 14));
// console.log(recommendDrink('день', 26));
// console.log(recommendDrink('вечер', 20));
// console.log(recommendDrink('ночь', 10));
// // --------------------------------------------------------------------------------------

// function analyzeWord(word) {
//     function format(str) {
//         return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//     }
    
//    const formatted = format(word)
//     console.log('Слово после форматирования: ' + formatted);
//     console.log('Количество букв: ' + word.length); 
// }

// analyzeWord('марГарИТ');


// function checkPassword(inputPassword, realPassword) {
//     function formatResult(str) {
//         return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//     }
//     if(inputPassword === realPassword){
//         console.log(formatResult('пароль верен. доступ разрешён.'));
//     } else {
//         console.log(formatResult('пароль неверен. попробуйте снова.'));
//     }
// }

// checkPassword('qwerty', 'qwerty');
// checkPassword('qwerty', 'qwwdeferty');


function checkCity(userCity, correctCity) {
    function formatMessage(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    if(userCity.toLowerCase() === correctCity.toLowerCase()) {
        console.log('Вы из нужного города!');
    } else {
        console.log('Нужный город — ' + formatMessage(correctCity) + ', а вы указали — ' + formatMessage(userCity));
    }
}

checkCity('Талдыкорган', 'талДЫкоРГАн');
checkCity('Алматы', 'Конаев');

























