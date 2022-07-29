const { Worker } = require('worker_threads');
const { performance, PerformanceObserver } = require('perf_hooks');
const {printSuccess, printError, printInverse} = require('./log');


const performanceObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
        printInverse(`${entry.name}: ${entry.duration.toFixed(1)} ms`);
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
            performance.measure('Затраченное время на выполнение', 'worker start', 'worker end');
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
        return printError('Ошибка! Укажите путь!');
    }
    const {count, totalSize, countDirs} = await worker(path);
    printSuccess('Количество файлов: ' + count + ' шт.')
    printSuccess('Количество вложенных директорий: ' + countDirs + ' шт.')
    printInverse('Общий объем файлов: ' + totalSize + ' kb')
}

main(process.argv);


