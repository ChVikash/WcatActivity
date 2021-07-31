// function newScom(paths){
//     content = "";
//     for(let i = 0  ; i < paths.length ; ++i){
//         content = content + fs.readFileSync(paths[i]) + "\r\n"; 
//     }
//     contentArr = content.split("\r\n");
//     for(let i = 1 ; i < contentArr.length ; ++i){
//         if(contentArr[i] == "" && contentArr[i-1] == ""){
//             contentArr[i] = null ;
//         }else if(contentArr[i] == "" && contentArr[i-1] == null){
//             contentArr[i] = null ;
//         }
//     }
//     tempArr
//     for()
// }


function scomfn(content){
    let enters = 0 ;
    for(let i = 0 ; i < content.length ; ++i){
        let x = content.charAt(i);
        if(x == '\n'){
            enters++ ;
            if(enters > 2 ){
                continue
            }
            process.stdout.write(x);
        }
        else{
            enters = 0 ;
            process.stdout.write(x);
        }
    }
}

module.exports = {
    scomfn : scomfn 
}