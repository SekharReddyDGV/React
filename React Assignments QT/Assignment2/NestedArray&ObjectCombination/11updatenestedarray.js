// 11.Update the stock of the Phone to 15.
const catalog = [
    {
        id: 101,
        name: 'Laptop',
        details: { price: 1000, stock: 5 },
    },
    {
        id: 102,
        name: 'Phone',
        details: { price: 500, stock: 10 },
    },
];


catalog[1].details.stock=15;
console.log(catalog);

