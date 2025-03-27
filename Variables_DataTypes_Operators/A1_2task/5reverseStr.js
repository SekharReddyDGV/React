// Declare a variable word and write a function to reverse the string and log the reversed string to the console.

var word= "Welcome";

function reverseStr(data){
    return data.split("").reverse().join("");
}

const required = reverseStr(word);
console.log(required);