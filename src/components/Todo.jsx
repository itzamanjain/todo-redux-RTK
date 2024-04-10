import  { useSelector } from 'react-redux'
import Addform from './Addform';
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../features/todo/todoSlice';
import { markAsDone } from '../features/todo/todoSlice';

export default function Todo() {
    const todos = useSelector((state) => state.todos)
    console.log(todos);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        console.log(` delete ${id}`)
        dispatch(deleteTodo(id))
    }

    const handleDone = (id) => {
        console.log('done')
        dispatch(markAsDone(id))
    }

    return(
       <>
         <h3>Todos</h3>
         <Addform />
        <ul>
            {todos.map((todos) => (
                <li key={todos.id} >
                    <button onClick={() => handleDone(todos.id)}>Marks as done </button>
                    {todos.task}
                <button onClick={() => handleDelete(todos.id)}>delete</button>
                </li>
            ))}
        </ul>
       </>
    )
}