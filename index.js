//To CommonJS syntax to use the callback and sync APIs:
const fs = require('node:fs');

// fs.copyFile(src, dest[, mode], callback)

fs.copyFile("file1.txt", "file2.txt", messageFunction);
function messageFunction() {
    console.log("file 1 was copied");
}
