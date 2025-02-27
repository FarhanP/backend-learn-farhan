const fs = require("fs");
const os = require("os");

// Write data into a file
console.log("Before Blocking operation is executed!");

// blocking operation
const output = fs.readFileSync("./far.txt", "utf-8");
console.log("result", output);

console.log("After Blocking operation is executed!");

// Non blocking operation
console.log("Before non-Blocking operation is executed!");
fs.readFile("./far.txt", "utf-8", (err, res) => {
  console.log("outputnonblock", res);
});

console.log("After non-Blocking operation is executed!");

// Sync function for file - Blocking
fs.writeFileSync("./test.txt", "hello, Farhan!");

// Async function - Non-blocking - requires callback and does not return
fs.writeFile("./far.txt", "Farhan bhai", (err) => {
  if (err) {
    console.log("Error writing file!");
  } else {
    console.log("File is written successfully");
  }
});

// Read data from a file
const result = fs.readFileSync("./users.txt", "utf-8");

console.log(result);

// Appending data into an existing file
fs.appendFileSync(
  "./users.txt",
  `\n\n${new Date(Date.now()).toLocaleString("en-IN")} - Hey there!`
);

console.log(os.cpus().length);
