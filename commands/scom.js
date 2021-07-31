let fs = require("fs");
function scomfn(paths){
    content = "";
    for(let i = 0  ; i < paths.length ; ++i){
        content = content + fs.readFileSync(paths[i]) + "\n"; 
    }
    contentArr = content.split("\n");
    //console.log(contentArr);
    for(let i = 1 ; i < contentArr.length ; ++i){
        if(contentArr[i] == "" && contentArr[i-1] == ""){
            contentArr[i] = null ;
        }else if(contentArr[i] == "" && contentArr[i-1] == null){
            contentArr[i] = null ;
        }
    }
    //console.log(contentArr);
    let tempArr = [];
    for(let i = 0 ; i < contentArr.length ; ++i){
        if(contentArr[i] != null ){
            tempArr.push(contentArr[i]);
        }
    }
    let ans = tempArr.join("\n");
    //console.log(ans);
    return ans;

}


// function scomfn(content){
//     let enters = 0 ;
//     for(let i = 0 ; i < content.length ; ++i){
//         let x = content.charAt(i);
//         if(x == '\n'){
//             enters++ ;
//             if(enters > 2 ){
//                 continue
//             }
//             process.stdout.write(x);
//         }
//         else{
//             enters = 0 ;
//             process.stdout.write(x);
//         }
//     }
// }

module.exports = {
    scomfn : scomfn 
}