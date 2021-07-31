let fs = require("fs");
let path = require("path");

function fn(paths){
    content = "";
    for(let i = 0  ; i < paths.length ; ++i){
        let path = paths[i];
        let stats = fs.lstatSync(path);
        if(fs.existsSync(path) == false || stats.isFile() == false){
            let name = path
            Console.log("File Not Found Error" );
        }
        else {
            content += fs.readFileSync(path);
        }
    }
    return content ;
}

module.exports ={
    fn:fn 
} 