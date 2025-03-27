let a = 5;
let b = 10;

console.log("a=",a);
console.log("b=",b);

x = a + b; 
b = x - b; 
a = x - b; 

console.log("After swapping:");
console.log("a =", a);
console.log("b =", b); 