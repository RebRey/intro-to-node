//the node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.
//STEP 1: require the node module to use the callback and sync APIs:
import * as fs from 'node:fs';

// fs.copyFile(src, dest[, mode], callback)
// src <string> | <Buffer> | <URL> source filename to copy
// dest <string> | <Buffer> | <URL> destination filename of the copy operation
// mode <integer> modifiers for copy operation. Default: 0.
// callback <Function>

// STEP 2: Create a copy of file1.txt
// file2.txt will be created or overwritten by default.
// by using COPYFILE_EXCL, the operation will fail if file2.txt exists.
fs.copyFile("file1.txt", "file2.txt", constants.COPYFILE_EXCL, messageFunction);
function messageFunction() {
    console.log("file 1 was copied");
}

