//use CommonJS syntax to use the callback and sync APIs:
const fs = require('node:fs');

// fs.copyFile(src, dest[, mode], callback)
// src <string> | <Buffer> | <URL> source filename to copy
// dest <string> | <Buffer> | <URL> destination filename of the copy operation
// mode <integer> modifiers for copy operation. Default: 0.
// callback <Function>
fs.copyFile("file1.txt", "file2.txt", messageFunction);
function messageFunction() {
    console.log("file 1 was copied");
}
