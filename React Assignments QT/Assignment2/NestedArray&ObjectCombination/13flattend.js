// 13.Write a function to flatten the nestedArray.

const nestedArray = [[1, 2], [3, 4], [5, 6]];

function flattenArray(arr) {
  return arr.reduce((flattened, subArray) => {
    return flattened.concat(subArray); 
  }, []); 
}

const flattened = flattenArray(nestedArray);
console.log(flattened);