import React, { useState } from 'react'

const EditTodoForm = ({ editTodo, task }) => {

  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();

    // call editTodo function
    editTodo(value, task.id);

  }


  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" placeholder='Update Task' className='todo-input' value={value} onChange={(e) => { setValue(e.target.value); }} />
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm
