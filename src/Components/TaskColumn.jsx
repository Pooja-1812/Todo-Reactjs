import React from 'react'
import Todo from '../Assets/direct-hit.png'
import './TaskColumn.css'
import TaskCard from './TaskCard';

const TaskColumn = ({ Title, icon, tasks, status, handleDelete }) => {
  console.log(Todo);
  return (
    <section className='task_col'>
      <h2 className='task_col_heading'>
        <img className='task_col_icon' src={icon} alt='' />
        {Title}
      </h2>
      {/* <TaskCard/> */}

      {
        tasks.map(
          (task, index) =>
            task.status === status &&
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />)
      }
    </section>

  );
};

export default TaskColumn