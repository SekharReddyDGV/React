// 3.Add a New Item to a Nested Array
//  Add 'Node.js' to the skills array of the developer Alice.
const team = [
    {
    name: 'Alice',
    skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
    name: 'Bob',
    skills: ['Java', 'Spring Boot'],
    },
];


team[0].skills.push('Node.js');

console.log (team);