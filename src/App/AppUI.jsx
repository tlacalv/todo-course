import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import { TodoForm } from '../TodoForm'
import { Modal } from '../Modal';


function AppUI() {
    const {
        loading,
        error,
        searchedTodo,
        handleComplete,
        handleDelete,
        openModal,
        setOpenModal,
    } = useContext(TodoContext)
    return (
    <>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
            {loading && (
                <>
                    <TodosLoading />
                    <TodosLoading />
                    <TodosLoading />
                </>
            )}
            {error && <TodosError />}
            {(!loading && searchedTodo.length === 0) && <EmptyTodos />}
            {searchedTodo.map(todo=> <TodoItem 
                text={todo.text} 
                key={todo.text} 
                completed={todo.completed}
                onComplete={()=>handleComplete(todo.text)}
                onDelete={()=>handleDelete(todo.text)}
                />)}
        </TodoList>
        <CreateTodoButton setOpenModal={setOpenModal} />
        
        {openModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}
    </>
    );
}

export { AppUI }