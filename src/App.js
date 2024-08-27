import './App.css';
import React, { useState, useEffect } from 'react';
import TodoItem from './Components/TodoItem';
import TaskColumn from './Components/TaskColumn';
import TodoIcon from './Assets/direct-hit.png';
import DoingIcon from './Assets/glowing-star.png';
import DoneIcon from './Assets/check-mark-button.png';

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks)  )
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTask)
  }

  console.log("Task:", tasks);
  return (
    <div className="App">
      <TodoItem setTasks={setTasks} />
      <main className='app_main'>

        <TaskColumn
          Title='To do'
          icon={TodoIcon}
          tasks={tasks}
          status="todo" 
          handleDelete={handleDelete}
          />

        <TaskColumn
          Title='Doing'
          icon={DoingIcon}
          tasks={tasks}
          status="doing" 
          handleDelete={handleDelete} />

        <TaskColumn
          Title='Done'
          icon={DoneIcon}
          tasks={tasks}
          status="done" 
          handleDelete={handleDelete}/>
      </main>

    </div>
  );
}

export default App;
