const chalk = require('chalk');

const printError = (error) => {
    console.log(chalk.bgRed("ERROR! ") + " " + error);
}
const printSuccess = (message) => {
    console.log(chalk.green.bold("DONE ") + " " + message);
}
const printInverse = (message) => {
    console.log(chalk.blue("INFO ") + " " + message);
}
const printUnderline = (message) => {
    console.log(chalk.yellowBright("INFO ") + " " + message);
}

module.exports = { printError, printSuccess, printInverse};

