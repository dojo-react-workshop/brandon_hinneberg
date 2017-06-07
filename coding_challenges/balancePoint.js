function balancePoint(array){
    let sum1 = array.reduce((accum, val)=>{
        return accum + val;
    });

    let sum2 = 0;

    for(let1=0;i<array.length;i+=1){
        if(sum1===sum2){return true;}
        let current = array[i];
        sum2+= current;
        sum-=current;
    }

    return false;

}


console.log(balancePoint([20,-10,10]))