import { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([]);
  let allTodos = [...todos];

  const updateStatus = (index) => {
    let updateTodo = todos[index];
    updateTodo.status = (updateTodo.status === 'Pending')? 'Completed': 'Pending';
    allTodos[index] = updateTodo
    setTodos(allTodos);
  }

  const removeTodo = (index) => {
    let remainTodos = allTodos.filter((todo, i)=> i !== index);
    setTodos(remainTodos);
  }

  return (
    <>
      <AddTodo setTodos={setTodos} todos={todos} />
      <div className='todo-list'>
        {todos.length !== 0 &&
          todos.map((todo, index) => (
            <Todo key={index} todo={todo} index={index} updateStatus={updateStatus} removeTodo={removeTodo} />
          ))
        }
      </div>
    </>
  )
}

export default App
