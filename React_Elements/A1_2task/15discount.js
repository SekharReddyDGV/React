// 15.Calculate the discounted price after applying a percentage discount.

function discounted(original,discount){
   var finalprice = original - discount;
   return finalprice;

}

const result= discounted(100,20);
console.log(result);