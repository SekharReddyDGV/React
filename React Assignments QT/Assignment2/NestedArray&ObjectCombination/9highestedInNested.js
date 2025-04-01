// Write a function to find the employee with the highest salary.
const employees = [
{
name: 'Alice',
details: { salary: 50000, role: 'Developer' },
},
{
name: 'Bob',
details: { salary: 75000, role: 'Manager' },
},
];

var salary1 = employees[0].details.salary;
var salary2 = employees[1].details.salary;

var highestSalary = salary1 > salary2 ? employees[0] : employees[1];

console.log(highestSalary);
 