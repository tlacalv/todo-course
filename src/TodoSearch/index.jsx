import { useContext } from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';
function TodoSearch() {
  const {query, setQuery} = useContext(TodoContext)
  return(
    <input 
      className="todo-search" 
      placeholder="Cortar ceblolla" 
      value={query}
      onChange={(event)=>{
        setQuery(event.target.value)
      }}
    />
  )
}
export { TodoSearch };