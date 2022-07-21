const { calcEmitter } = require('./emitter.js');
const { addAction, multiplyAction, divisionAction, substractAction } = require('./func.js');

const calcV1 = (argLeft, action, argRight, decimal) => {
    switch (action) {
        case '+':
            calcEmitter.emit('addAction', addAction(argLeft, argRight));
            break;
        case "*":
             calcEmitter.emit('multiplyAction', multiplyAction(argLeft, argRight, decimal));
             break;
        case "/":
             calcEmitter.emit('divisionAction', divisionAction(argLeft, argRight, decimal));
             break;
        case "-":
             calcEmitter.emit('substractAction', substractAction(argLeft, argRight, decimal));
             break;
        default:
            calcEmitter.emit('error', 'Ошибка! Передано некорректно выражение.');
            break;
    }
}
/* func args:
    1 - number;
    2 - expression;
    3 - number;
    4 (optional) - the number of numbers after the decimal point;
    
    return result number vs emitter msg console.log
*/
calcV1(1003, "-", 1, 2);