import { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const { totalTodos:total, completedTodos: completed } = useContext(TodoContext)
  return(
    <h1 className='todo-counter'>
      Has completado <span>{completed}</span> de de <span>{total}</span> TODOS
    </h1>
  )
}
export { TodoCounter };