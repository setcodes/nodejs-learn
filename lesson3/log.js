const chalk = require('chalk');
const {PerformanceObserver, performance} = require("perf_hooks");

const printError = (error) => {
    console.log(chalk.bgRed("Ошибка! ") + " " + error);
}
const printSuccess = (message) => {
    console.log(chalk.green("Выполнено ") + " " + message);
}
const printInverse = (message) => {
    console.log(chalk.inverse("Информация ") + " " + message);
}

module.exports = { printError, printSuccess, printInverse};

