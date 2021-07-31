function ncomfn(content){
    let v = 1 ;
    if(content.length > 0){
        process.stdout.write(v.toString());
    }
    for(let i = 0 ; i < content.length ; ++i){
        let x = content.charAt(i);
        process.stdout.write(x);
        if(x == '\n'){
            v++ ;
            process.stdout.write(v.toString());
        }
    }
}

module.exports = {
    ncomfn : ncomfn 
}