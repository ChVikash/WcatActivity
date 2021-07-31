function bcomfn(content){
    contentArr = content.split("\n");
    let  val = 1 ;
    for(let i = 0 ; i < contentArr.length ; ++i){
        if(contentArr[i].length > 0){
            console.log(val , " " , contentArr[i]);
            val++;
        }else {
            console.log();
        }
    }

}

module.exports = {
    bcomfn : bcomfn 
}



