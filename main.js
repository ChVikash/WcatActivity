let fs = require("fs");
let path = require("path");
let readCon = require("./readCon");
let scom = require("./commands/scom");
const ncom = require("./commands/ncom");


let inputArr = process.argv.slice(2);

let paths = [];

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

let ans = "";
if(conditions.length == 0){
    let content = readCon.fn(paths);
    console.log(content);
}else{
    if(conditions[0] == 's'){
        ans = scom.scomfn(paths);
    }
    if(conditions[0] == 'n'){
        ncom.ncomfn(content);
    }

}
