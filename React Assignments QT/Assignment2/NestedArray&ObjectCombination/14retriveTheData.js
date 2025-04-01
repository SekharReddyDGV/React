// 14.Retrieve all employees older than 30.

const employees = [
{ name: 'Alice', details: { age: 25, role: 'Developer' } },
{ name: 'Bob', details: { age: 35, role: 'Manager' } },
];


const olderThan30 = employees.filter((employee) => employee.details.age > 30);

console.log(olderThan30);

