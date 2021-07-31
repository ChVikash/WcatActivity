let fs = require("fs");

let inputArr = process.argv.slice(2);


for(let path in inputArr){
    let stats = fs.lstatSync(path);
    if(fs.existsSync(path) == false || stats.isFile() == false){
        
    }
}

