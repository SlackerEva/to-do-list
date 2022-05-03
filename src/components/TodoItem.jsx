import {useDispatch} from 'react-redux';
import {removeTodo, toggleTodoComplete} from '../store/todoSlice';

function TodoItem({id, text, completed}) {

  const dispatch = useDispatch();

  return (
    <li key={id}>
      <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodoComplete({id}))} />
      <span>{text}</span>
      <button className='delete' onClick={() => dispatch(removeTodo({id}))}>&times;</button>
    </li>  
  )
}

export default TodoItem;