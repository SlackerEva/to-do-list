import TodoItem from './TodoItem';

function TodoList({todos, toggleTodoComplete, removeTodo}) {
  return (
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo} {...todo} />)}
    </ul>
  )
}

export default TodoList;