import './CreateTodoButton.css'
function CreateTodoButton({setOpenModal}) {
    return (
      <button onClick={(event)=>{
        setOpenModal(state=> !state)
      }} className="create-todo-button">
        +
      </button>
    )
  }
export { CreateTodoButton }