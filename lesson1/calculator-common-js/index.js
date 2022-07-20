const { addAction, multiplyAction, divisionAction, sustructAction } = require('./func.js');

const culcV1 = (argLeft, action, argRight, decimal) => {
    switch (action) {
        case '+':
            console.log(addAction(argLeft, argRight));
            break;
        case "*":
            console.log(multiplyAction(argLeft, argRight, decimal));
             break;
        case "/":
            console.log(divisionAction(argLeft, argRight, decimal));
             break;
        case "-":
            console.log(sustructAction(argLeft, argRight, decimal));
             break;
        default:
            console.log("Ошибка! Передано некорректно выражение.");
            break;
    }
}

culcV1(1003, "*", 459, 2);