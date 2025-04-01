import React, { useState } from 'react';
import "./ToDOList.css"

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask(''); 
    }
  };

  return (
    <div className='todo'>
      <h1>Todo List</h1>
      <div className='InputField'>
        <input 
          type="text" 
          placeholder="Add a task" 
          value={newTask} 
          onChange={handleInputChange} 
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;