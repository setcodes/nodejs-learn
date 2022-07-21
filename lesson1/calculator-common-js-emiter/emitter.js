const EventEmitter = require('events');
const calcEmitter = new EventEmitter;
const msg = 'action done. Result: ';
calcEmitter.once('addAction', (result) => {
    console.log("addAction" + msg + result);
});

calcEmitter.once('multiplyAction', (result) => {
    console.log("multiplyAction" + msg + result);
});

calcEmitter.once('divisionAction', (result) => {
    console.log("divisionAction" + msg + result);
});

calcEmitter.once('substractAction', (result) => {
     console.log("substractAction" + msg + result);
});
calcEmitter.once('error', (msg) => {
     console.log(new Error(msg));
});

module.exports = { calcEmitter };