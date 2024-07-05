import './TodosLoading.css'
function TodosLoading() {
    return(
      <div className="loading-todo-container">
        <span className="loading-todo-complete-icon"></span>
        <p className="loading-todo-text"></p>
        <span className="loading-todo-delete-icon"></span>
      </div>
    )
  }
export { TodosLoading };