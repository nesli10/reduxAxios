import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {fetchTodos} from "./redux/todosSlice";

function App() {

  const dispatch = useDispatch()
  const todos = useSelector((state) =>state.todos)
  return (
    <div >
      <button onClick={()=>dispatch(fetchTodos())}>fetch todos</button>
      {todos.loading && "fetching data"}
      {todos.error && todos.error}
      <div className='todo-wrapper'>
        {todos.data.length >0 &&
          todos.data.map((todo) => (
          <div key={todo.id} className="todo">
            <h3 className='todo-title'>{todo.title}</h3>
            
            <input type="checkbox" checked={todo.completed} className="todo-complated">
            </input>
             </div>
         ) )}

      </div>



    </div>
  );
}

export default App;
