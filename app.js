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


const express = require('express');

const app = express();

app.get('/', function (request, response) {
    response.end('Hello from Express')
})

app.listen(3000)