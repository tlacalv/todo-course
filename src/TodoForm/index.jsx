import { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext'

import './TodoForm.css'
function TodoForm() {
    const {
        setOpenModal,
        addTodo
    } = useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState('')

    const onSubmit = (e)=> {
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    const onCancel = ()=> {
        setOpenModal(false)
    }
    const onChange = (e)=> {
        setNewTodoValue(e.target.value)
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea value={newTodoValue} onChange={onChange} placeholder="Cortar cebolla para el almuerzo" />
            
            <div className="todo-form-button-container">
                <button type="button" onClick={onCancel} className="todo-form-button todo-form-button-cancel">
                    Cancelar
                </button>
                <button type="submit" className="todo-form-button todo-form-button-add">
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }