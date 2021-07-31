
let fs = require("fs");

let inputArr = process.argv.slice(2);

let content = "";

for(let i = 0 ; i < inputArr.length ; ++i){
    let path = inputArr[i];
    let stats = fs.lstatSync(path);
    if(fs.existsSync(path) == false || stats.isFile() == false){
        Console.log("File Not Found Error");
    }
    else {
        content += fs.readFileSync(path);
    }
}
console.log(content);
