const factorial = require('./factorial');
const { Worker } = require('worker_threads');

const compute = (array) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: {
                array,
            }
        });
        worker.on('message', (msg) => {
            console.log(worker.threadId);
            resolve(msg);
        });
        worker.on('error', (err) => {
            reject(err);
        });
        worker.on('exit', () => {
            console.log("Завершил работу");
        });
    });
}

const main = async () => {
    try {
        performance.mark('start');
        const result = await Promise.all([
            compute([12, 20, 39, 49]),
            compute([12, 20, 39, 49]),
            compute([12, 20, 39, 49]),
            compute([12, 20, 39, 49]),
        ]);
        console.log(result);
        performance.mark('end');
        performance.measure('main', 'start', 'end');
        console.log(performance.getEntriesByName('main').pop());
    } catch (e) {
        console.error(e.message);
    }
}
const timer = setTimeout(() => {
    console.log('timer done!');
}, 1000)
main();
