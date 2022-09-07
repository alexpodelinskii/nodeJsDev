/* Что такое Node JS. Начало работы
const http = require('http');
http
    .createServer(function (request, response) {
        response.end('Hello NodeJS!')
    })
    .listen(3000, '127.0.0.1', function () {
        console.log(
            'Сервер начал прослушивание запросов на порту 3000'
        )
    })
    */

//******************** */

//Первое приложение на Node.js
// const os = require('os');
// const greeting = require('./greeting');

// const name = os.userInfo().username;
// console.log(`Date:   ${greeting.date}`);
// console.log(greeting.getMessage(name));

//*********************************


// Модули
// const User = require('./user');

// const eugene = new User('Eugene', 32)
// eugene.displayInfo();
// eugene.sayHi();

//**************************************** */.

// Работа с модулями

// const welcome = require('./welcome/index');

// welcome.gerEveningMessage();
// welcome.getMorningMessag();

/// *******************************************

// Объект global и глобальные переменные


// const greeting = require('./greeting_2')

// global.name = 'Alex';

// global.console.log(date);

// console.log(greeting.getMessage())

///********************************************

// Передача аргумента
// const nodePath = process.argv[0];
// const appPath = process.argv[1];
// const name = process.argv[2];
// const age = process.argv[3];

// console.log(`nodePath: ${nodePath}`);
// console.log(`appPath: ${appPath}`);
// console.log(``);
// console.log(`name: ${name}`);
// console.log(`age: ${age}`);


///************************************** */

/// NPM. Package.json. Установка модулей. Определение команд


// const express = require('express');

// const app = express();

// app.get('/', function (request, response) {
//     response.end('Hello from Express')
// })

// app.listen(3000)

///******************************************* */

/// NOdemon

// const http = require('http')

// let message = 'Hello World!'
// http
//     .createServer(function (request, response) {
//         console.log(message)
//         response.end(message)
//     })
//     .listen(3000, '127.0.0.1', () => {
//         console.log('Сервер начал прослушивание запросов')
//     })

//**************************************************** */

//Работа с файлами

const fs = require('fs');

const path = './files/hello.txt'

const fileContent = fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }

})

