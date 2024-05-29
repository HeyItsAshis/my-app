import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const initialTodos = [
  {
    id: 1,
    title: "Learn React JS",
    complete: false,
  },
  {
    id: 2,
    title: "Learn Node JS",
    complete: false,
  },
  {
    id: 3,
    title: "Learn MySQL DB",
    complete: false,
  },
];

const reducerFunc = (initState, action) => {
  switch (action.type) {
    case 'COMPLETE':
      return initState.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return initState;
  }
}

function App() {
  console.log("Rendered");
  const [todos, dispatch] = useReducer(reducerFunc, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
    dispatch({ type: "PENDING", id: todo.id });
  };
  
  return (
    <>
    <div className='container'>
      <div className="row">
        <div className="col-md-4 mx-auto">
          <h1 className="text-center">Todo List</h1>
          <ul className='list-group'>
            {todos.map((todo) => (
              <li className='list-group-item' key={todo.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={ ()=>{
                      handleComplete(todo);
                    }}
                  />
                  <span className='ms-3'>{todo.title}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default App;
