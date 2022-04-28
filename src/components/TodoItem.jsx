function TodoItem({id, text, completed, toggleTodoComplete, removeTodo}) {
  return (
    <li key={id}>
      <input type="checkbox" checked={completed} onChange={() => toggleTodoComplete(id)} />
      <span>{text}</span>
      <button className='delete' onClick={() => removeTodo(id)}>&times;</button>
    </li>  
  )
}

export default TodoItem;