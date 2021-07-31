let fs = require("fs");
let scom = require("./commands/scom");
let ncom = require("./commands/ncom");
let bcom = require("./commands/bcom");

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
let content = "" ;
for(let i = 0  ; i < paths.length ; ++i){
    content = content + fs.readFileSync(paths[i]) + "\n"; 
}

let ans = "";

if(conditions.length == 0){
    console.log(content);
}else{
    if(conditions.length > 3 ){
        console.log("Invalid Commands options : -s, -n, -b and once only");
        return ;
    }else{
        if(conditions[0] == 's'){
            ans = scom.scomfn(content);
            if(conditions.length > 1){
                if(conditions[1] == 'b'){
                    bcom.bcomfn(ans);
                    return ;
                }else if(conditions[1] == 'n'){
                    ncom.ncomfn(ans);
                    return ;
                }
            }
            
        }else if(conditions[0] == 'b'){
            bcom.bcomfn(content);
        }else if(conditions[0] == 'n'){
            ncom.ncomfn(content);
        }
        console.log(ans);      
    }

}
