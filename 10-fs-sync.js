// const fs = require("fs");
// console.log(fs.readFileSync);

// Destructure method
// const { readFileSync } = require("fs");
// console.log(readFileSync);

const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const first = readFileSync("./content/first.txt", "utf8");

const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

// console.log(first, "\n", second);

//////////////////////////////////////////////////////////
/* 
// When a writeFileSync function is called, every other statement after it will have to wait until the function creates a new file or throws an error for not creating a new file.

//  Attention: the writeFileSync method cannot create a directory in Node (can only create file)

// The flag property controls how the file will be created and written on. The default flag is w, which creates the file (if the file does not already exist) or overwrites whatever data the file has with the new data (if the file does already exist).

// Other flags are as follows:
    a: creates the file (if it does not exist) or appends to the existing data (if it does exist)
    ax and wx: creates the file (if it does not exist) or throws an error (if it already exists)

*/

// flag = w ==>> default: creates the file (if the file does not already exist) or overwrites whatever data the file has with the new data (if the file does already exist).
// writeFileSync(
//     "./content/result-sync.txt",
//     `Here is the result : ${first}, ${second}`,
//     { flag: "w" }
// );

// flag = a ==>> creates the file (if it does not exist) or appends to the existing data (if it does exist)
writeFileSync(
    "./content/result-sync.txt",
    `Here is the result : ${first}, ${second}`,
    { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
//////////////////////////////////////////////////////////
