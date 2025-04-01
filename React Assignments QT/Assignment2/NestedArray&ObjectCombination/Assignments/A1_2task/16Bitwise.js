// 16.Perform a bitwise AND operation on two numbers and return the result.

function bitwiseAnd(num1, num2) {
    return num1 & num2;
  }
  

  const number1 = 12; // Binary: 1100
  const number2 = 15; // Binary: 1111
  
  const result = bitwiseAnd(number1, number2);
  console.log("Bitwise AND of", number1, "and", number2, "is:", result); // Output: 12