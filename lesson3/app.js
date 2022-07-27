const fs = require('fs');
const { join } = require('path');
const { performance, PerformanceObserver } = require('perf_hooks');

const performanceObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
        console.log(`${entry.name}: ${entry.duration}`);
    })
});
performanceObserver.observe({entryTypes: ['measure']});

let count = 0;

const getFilesCount = (path) => {
    try {
        try {
            let content = fs.readdirSync(path, {withFileTypes: true})
            content.map( el => {
                if (fs.statSync(join(path, el.name)).isDirectory()) {
                    getFilesCount(join(path, el.name));
                }else {
                    count = count + 1;
                }
            })
            return count;
        }catch (e) {
            console.log(e.message);
        }

    }catch (e) {
        console.log(e.message);
    }
}

const main = (args) => {
    performance.mark('worker start');
    const path = args[2];
    if (!path) {
        return console.error('Ошибка! Укажите путь!');
    }
    console.log('Количество файлов: ' + getFilesCount(path) + ' шт.');
    performance.mark('worker end');
    performance.measure('worker', 'worker start', 'worker end');
}

main(process.argv);
