// 14.Check if a number is positive or negative using the ternary operator.

function checkNumber(number) {
    return number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
  }
  
  const result = checkNumber(5);
  console.log("The number is:", result); 