// 15.Write a function to remove a product from the products array by its name.
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
];


function removeProductByName(products, productName) {
    return products.filter((product) => product.name !== productName);
  }
  
  const updatedProducts = removeProductByName(products, 'Phone');
  console.log(updatedProducts); 