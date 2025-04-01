// 10.Group the employees by their role.
const employees = [
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Manager' },
    { name: 'Charlie', role: 'Developer' },
];

function groupEmployeesByRole(employees) {
    return employees.reduce((groupedEmployees, employee) => {
      const { role } = employee; 
      (groupedEmployees[role] || (groupedEmployees[role] = [])).push(employee); 
      return groupedEmployees; 
    }, {}); 
  }
  
  const groupedEmployees = groupEmployeesByRole(employees);
  console.log(groupedEmployees); 