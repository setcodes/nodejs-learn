const { parentPort, workerData } = require('worker_threads');
const fs = require("fs");
const {join} = require("path");
const {printError} = require('./log');
const {performance} = require("perf_hooks");

let count = 0;
const getFilesCount = (path) => {
    // for (let i = 0; i < 100000000; i++) {
    //     //optional payload
    // }
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
        printError(e.message);
    }
}
parentPort.postMessage(getFilesCount(workerData.path));

// module.exports = {getFilesCount};
