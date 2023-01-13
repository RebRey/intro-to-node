# intro-to-node

## What does copyFile do?
The copyFile() method is used to asynchronously copy a file from the source path to destination path.

**fs.copyFile(src, dest[, mode], callback)**

src <string> | <Buffer> | <URL> source filename to copy
dest <string> | <Buffer> | <URL> destination filename of the copy operation
mode <integer> modifiers for copy operation. Default: 0.
callback <Function>

## How do you use the copyFile method?

STEP 1: create a document called index.js

STEP 2: in the index.js document, require the node module by using import
import { copyFile, constants } from 'node:fs';

STEP 3: Call the method 
function messageFunction(err) {
  if (err) throw err;
  console.log('file1.txt was copied to file2.txt');
}
* destination.txt will be created or overwritten by default.
* by using COPYFILE_EXCL, the operation will fail if destination.txt (file2.txt) exists.
copyFile("file1.txt", "file2.txt", constants.COPYFILE_EXCL, messageFunction);

STEP 4: Create a package.json document
This will solve the SyntaxError: Cannot use import statement outside a module
Type this inside the json document
{
    "_comment": "solves the SyntaxError: Cannot use import statement outside a module",
    "type": "module" 
  }

* Basic JSON Comment Example"
{
  "Id": 1,
  "_comment": "Put your JSON comment here"
}

STEP 5: on the terminal cd into "intro-to-node" then run the command: node index.js
if file 2 already exists you will get an error
Example:
[Error: EEXIST: file already exists, copyfile 'file1.txt' -> 'file2.txt'] {
  errno: -17,
  code: 'EEXIST',
  syscall: 'copyfile',
  path: 'file1.txt',
  dest: 'file2.txt'
}