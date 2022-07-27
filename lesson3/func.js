const fs = require('fs');

const isFile = (path) => {
    return !!fs.stat(path).isFile();
}
const isDir = (path) => {
    return !!fs.stat(path).isDirectory();
}
module.exports = { isDir, isFile };
