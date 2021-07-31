let fs = require("fs");
let path = require("path");

function fn(paths){
    content = "";
    for(let i = 0  ; i < paths.length ; ++i){
        content += fs.readFileSync(paths[i]); 
    }
    return content ;
}

module.exports ={
    fn:fn 
} 