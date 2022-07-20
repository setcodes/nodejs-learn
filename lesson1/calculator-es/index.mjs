import * as actionType from './func.mjs';

const culcV1 = (argLeft, action, argRight, decimal) => {
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

culcV1(1003, "/", 459, 2);