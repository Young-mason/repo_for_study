const toFraction = function (num) {

    let int = String(num).split('.')[0]
    let dec = String(num).split('.')[1]? String(num).split('.')[1]: ''
  

    let numerator = Number(int + dec) 
    let denominator = Math.pow(10, dec? dec.length:0)
    
    if(numerator ===0) {
        return '0/1'
    }
    console.log (numerator)
    console.log (denominator)

    let gcd;
    let n = Math.abs(numerator)
    let d = Math.abs(denominator)
    for (i=0; i<=Math.min(n, d); i++) {
        if (n%i === 0 && d%i === 0) {
            gcd = i;
        }
    }
    console.log(gcd)

    return String(numerator/gcd) + '/' + String(denominator/gcd)
};
