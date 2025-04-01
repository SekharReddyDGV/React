//12. Extract the names of all employees from the departments.
const departments = [
{
name: 'HR',
employees: ['Alice', 'Bob'],
},
{
name: 'IT',
employees: ['Charlie', 'David'],
},
];

const allEmployeeNames = departments.flatMap((department) => department.employees);

console.log(allEmployeeNames);


