//the node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.
//STEP 1: require the node module to use the callback and sync APIs:
//STEP 2: create a new document called "package.json"
import { copyFile, constants } from 'node:fs';

// fs.copyFile(src, dest[, mode], callback)
// src <string> | <Buffer> | <URL> source filename to copy
// dest <string> | <Buffer> | <URL> destination filename of the copy operation
// mode <integer> modifiers for copy operation. Default: 0.
// callback <Function>

// STEP 2: Create a copy of file1.txt
// file2.txt will be created or overwritten by default.
// by using COPYFILE_EXCL, the operation will fail if file2.txt exists.

function messageFunction(err){
    if (err) throw err;
    console.log('file1.txt was copied to file2.txt');
}

copyFile("file1.txt", "file2.txt", constants.COPYFILE_EXCL, messageFunction);

// STEP 3: in hyper terminal cd into developer, then into intro-to-node and run command node index.js
// rebecca@Rebeccas-MacBook-Pro intro-to-node % node index.js