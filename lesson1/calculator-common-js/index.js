const { addAction, multiplyAction, divisionAction, sustructAction } = require('./func.js');

const culcV1 = (args) => {

    const argLeft = args[2];
    const action = args[3];
    const argRight = args[4];
    const decimal = args[5] ? args[5] : 0;

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

/* func args:
    1 - number;
    2 - expression;
    3 - number;
    4 (optional) - the number of numbers after the decimal point;
    
    return result number vs emitter msg console.log

    example: node index.js 10 + 10 1
*/
culcV1(process.argv);