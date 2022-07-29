import * as actionType from './func.mjs';

const culcV1 = (args) => {
    const argLeft = args[2];
    const action = args[3];
    const argRight = args[4];
    const decimal = args[5] ? args[5] : 0;

    switch (action) {
        case '+':
            console.log(actionType.add(argLeft, argRight));
            break;
        case "*":
            console.log(actionType.multiply(argLeft, argRight, decimal));
             break;
        case "/":
            console.log(actionType.division(argLeft, argRight, decimal));
             break;
        case "-":
            console.log(actionType.substract(argLeft, argRight, decimal));
             break;
        default:
            console.log("Ошибка! Передано некорректно выражение.");
            break;
    }
}
/* func args:
    1 - number;
    2 - expression;
    3 - number;
    4 (optional) - the number of numbers after the decimal point;
    
    return result number console.log

    example: node index.js 10 + 10 1
*/

culcV1(process.argv);