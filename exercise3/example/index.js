const factorial = require('./factorial');
const compute = (array) => {
    const arr = [];
    for(let i = 0; i < 10000000; i++) {
        arr.push(i * i);
    }
    return array.map( el => factorial(el));
}
const main = () => {
    performance.mark('start');
    const result = [
        compute([12, 20, 39, 49]),
        compute([12, 20, 39, 49]),
        compute([12, 20, 39, 49]),
        compute([12, 20, 39, 49]),
    ]
    console.log(result);
    const timer = setTimeout(() => {
            console.log('timer done!');
    }, 1000)
    performance.mark('end');
    performance.measure('main', 'start', 'end');
    console.log(performance.getEntriesByName('main').pop());
}
main();
