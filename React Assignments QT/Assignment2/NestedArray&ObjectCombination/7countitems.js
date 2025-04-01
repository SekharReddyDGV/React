// 7.Count the total number of tasks in all projects.
const projects = [
    {
        name: 'Website',
        tasks: ['Design', 'Develop', 'Test'],
    },
    {
        name: 'App',
        tasks: ['Plan', 'Build'],
    },
];

const totalTasks = projects.reduce((count, project) => count + project.tasks.length, 0);

console.log("Total tasks:", totalTasks);


