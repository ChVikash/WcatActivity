
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