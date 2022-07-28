const { parentPort, workerData } = require('worker_threads');
const fs = require('fs');
const {join} = require('path');
const {printError} = require('./log');

let count = 0;
let totalSize = 0;
let countDirs = 0;

const getFilesCount = (path) => {
    //additional load
    // for (let i = 0; i < 100000000; i++) {
    // }
    try {
        let content = fs.readdirSync(path, {withFileTypes: true})
        content.map( el => {
            if (fs.statSync(join(path, el.name)).isDirectory()) {
                countDirs = countDirs + 1;
                getFilesCount(join(path, el.name));
            }else {
                count = count + 1;
                totalSize = fs.statSync(join(path, el.name)).size;
            }
        })
        return {count, totalSize, countDirs};
    }catch (e) {
        printError(e.message);
    }
}
parentPort.postMessage(getFilesCount(workerData.path));
