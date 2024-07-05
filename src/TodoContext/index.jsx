import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext()

function TodoProvider({children}) {
    const {item: todos, saveItem: saveTodos, loading, error }= useLocalStorage('TODOS_V1', [])
    const [query, setQuery] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const completedTodos = todos.length
    const totalTodos = todos.filter(todo=>!!todo.completed).length
    const searchedTodo = todos.filter(
        (todo)=>{
        const todoText = todo.text.toLocaleLowerCase();
        const searchText = query.toLocaleLowerCase()
        return todoText.includes(searchText)
        }
    )

    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            text,
            completed: false
        })
        saveTodos(newTodos)
    }
    const handleComplete = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo=>todo.text===text)
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed
        saveTodos(newTodos)
    }
    const handleDelete = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo=>todo.text===text)
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            query,
            setQuery,
            searchedTodo,
            handleComplete,
            handleDelete,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }