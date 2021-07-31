function ncomfn(content){
    
    for(let i = 0 ; i < content.length ; ++i){

        let x = content.charAt(i);
        process.stdout.write(x);
        if(x == '\n'){
            
        }
        
    }
}

module.exports = {
    ncomfn : ncomfn 
}