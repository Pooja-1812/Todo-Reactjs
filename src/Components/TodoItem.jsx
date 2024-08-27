import React, { useState } from 'react'
import './TodoItem.css'
import Tag from './Tag'


function TodoItem({ setTasks }) {
    const [taskData, setTaskData] = useState(
        {
            task: "",
            status: "todo",
            tags: [],
        }
    );


    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag) => {
        if (taskData.tags.some(item => item === tag)) {
            const filterTags = taskData.tags.filter(item =>
                item !== tag)

            setTaskData(prev => {
                return { ...prev, tags: filterTags }
            })
        } else {
            setTaskData(prev => {
                return { ...prev, tags: [...prev.tags, tag] }
            })
        }
    };


    const handleChange = (e) => {
        //object destructuring
        const { name, value } = e.target

        setTaskData(prev => {
            return { ...prev, [name]: value }
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData);
        setTasks(prev => {
            return [...prev, taskData];
        });
        setTaskData(
            {
                task: "",
                status: "todo",
                tags: [],
            }
        )
    }

    return (
        <header className='app_header'>
            <form onSubmit={handleSubmit}>
                <input type='text'
                    name='task'
                    value={taskData.task}
                    className='task_input'
                    placeholder='Enter task'
                    onChange={handleChange}
                />

                <div className='task_form_bottom_line'>
                    <div>
                        <Tag tagName='HTML' selectTag={selectTag} selected={checkTag('HTML')} />
                        <Tag tagName='CSS' selectTag={selectTag} selected={checkTag('CSS')} />
                        <Tag tagName='JS' selectTag={selectTag} selected={checkTag('JS')} />
                        <Tag tagName='DotNET' selectTag={selectTag} selected={checkTag('DotNET')} />
                    </div>

                    <div>

                        <select
                            className='task_status'
                            value={taskData.status}
                            name='status'
                            onChange={handleChange}>
                            <option value='todo'>todo</option>
                            <option value='doing'>doing</option>
                            <option value='done'>done</option>
                        </select>
                        <button type='submit' className='task_submit'>+Add Task</button>
                    </div>
                </div>
            </form>
        </header>

    )
}

export default TodoItem 