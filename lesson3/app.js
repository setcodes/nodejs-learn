const fs = require('fs');
const { join } = require('path');
const { Worker } = require('worker_threads');
const { performance, PerformanceObserver } = require('perf_hooks');
const {printSuccess, printError, printInverse, measure} = require('./log');


const performanceObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
        printInverse(`${entry.name}: ${entry.duration}`);
    })
});
performanceObserver.observe({entryTypes: ['measure']});


const worker = (path) => {
    return new Promise( (resolve, reject) => {
        performance.mark('worker start');
        const worker = new Worker('./worker.js', {
            workerData: {
                path
            }
        });
        worker.on('message', (msg) => {
            resolve(msg);
            performance.mark('worker end');
            performance.measure('worker', 'worker start', 'worker end');
        })
        worker.on('error', (err) => {
            reject(err);
        });
        worker.on('exit', () => {
            printInverse("Worker завершил работу");
        });

    });
};

const main = async (args) => {

    const path = args[2].toString();
    if (!path) {
        return printError('Ошибка! Укажите путь!!');
    }
    // printSuccess('Количество файлов: ' + getFilesCount(path) + ' шт.');
    printSuccess('Количество файлов: ' + await worker(path) + ' шт.')


}

main(process.argv);


