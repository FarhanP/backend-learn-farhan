const fs = require('fs');

// Write data into a file

// Sync function for file
fs.writeFileSync("./test.txt", "hello, Farhan!");


// Async function - requires callback and does not return
fs.writeFile('./far.txt', 'Farhan bhai', (err)=>{
    if(err){
        console.log('Error writing file!');
    } else {
        console.log('File is written successfully');
        
    }
})


// Read data from a file
const result = fs.readFileSync('./users.txt', 'utf-8');

console.log(result);


// Appending data into an existing file
fs.appendFileSync('./users.txt',`\n\n${new Date(Date.now()).toLocaleString('en-IN')} - Hey there!`);