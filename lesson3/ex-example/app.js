const { Worker } = require('worker_threads');
const { fork } = require('child_process');
const { performance, PerformanceObserver } = require('perf_hooks');

const performanceObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
        console.log(`${entry.name}: ${entry.duration}`);
    })
});
performanceObserver.observe({entryTypes: ['measure']});

const workerFunc = (array) => {
    return new Promise( (resolve, reject) => {
        performance.mark('worker start');
        const worker = new Worker('./worker.js', {
            workerData: {
                array,
            }
        });
        worker.on('message', (msg) => {
            performance.mark('worker end');
            performance.measure('worker', 'worker start', 'worker end');
            resolve(msg);
        });
        worker.on('error', (err) => {
            reject(err);
        });
        worker.on('exit', () => {
            console.log("worker завершил работу");
        });
    });
};

const forkFunc = (array) => {
    return new Promise( (resolve, reject) => {
        performance.mark('fork start');
        const forkProcess = fork('./fork.js');
        forkProcess.send({array});
        forkProcess.on('message', (msg) => {
            performance.mark('fork end');
            performance.measure('fork', 'fork start', 'fork end');
            resolve(msg);
        })
        forkProcess.on('close', (code) => {
            console.log(`Статус выхода: ${code}`);
        })

    });
};
const main = async () => {
    await workerFunc([11, 22, 33, 44]);
    await forkFunc([11, 22, 33, 44]);
}

main();
