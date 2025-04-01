// 17.Check if a number a is divisible by b using the modulus operator.

function checkDivisible(a,b){
const result = (a % b) == 0 ;
return result ;
}

var result = checkDivisible(10,2);
console.log(result);