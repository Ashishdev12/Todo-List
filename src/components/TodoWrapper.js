import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
// uuidv4();


const TodoWrapper = () => {

  const [todos, setTodos] = useState([]);

  // addTodo fun
  const addTodo = (todo) =>{
     setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
  }

  // toggle complete fun
 const toggleComplete = (id) =>{
  setTodos(todos.map(todo => todo.id === id ? {
    ...todo, completed: !todo.completed} : todo))
    
  }

  // delete icon fun
  const deleteTodo = (id) =>{
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  //Edit icon fun
  const editTodo = (id) => {
    setTodos(todos.map(todo =>todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo));
  }

  // Edit task fun

  const editTask = (task, id) =>{
    setTodos(todos.map(todo => todo.id === id ?
      {...todo, task, isEditing: !todo.isEditing} : todo))
  }

  return (
    <div className='TodoWrapper'>
      <h1>Lets Get Started!!</h1>

      <TodoForm addTodo={addTodo}/>

      {todos.map((todo, index)=>(
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo}/>
          ) : (
            <Todo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
        )
       
      ))}
      
    </div>
  )
}

export default TodoWrapper
