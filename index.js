module.exports = number=>{
    if(typeof number !== 'number'){
        throw TypeError(`Expected type number got-${typeof number}`)
    }
    if(number<1)
        return false

    let maximumDivide = (a,b)=>{
        while(a%b === 0)
            a  = a/b
        return a;
    }
    number = maximumDivide(number,2);
    number = maximumDivide(number,3);
    return maximumDivide(number,5)  === 1;
}

