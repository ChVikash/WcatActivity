let fs = require("fs");
let path = require("path");
let readCon = require("./readCon");
let scom = require("./commands/scom");
let inputArr = process.argv.slice(2);

let content = "";

let paths = []

let conditions = []; 
for(let i = 0 ; i < inputArr.length ; ++i){
    let str = inputArr[i];
    if(str.charAt(0) == '-'){
        conditions.push(str.slice(1));
    }else{
        paths.push(str);
        if(fs.existsSync(str) == false){
            console.log("File Not Found Error");
            return;
        }
    }
}
content = readCon.fn(paths);
if(conditions.length == 0){
    console.log(content);
}else{
    if(conditions[0] == 's'){
        scom.scomfn(content);
    }
}
