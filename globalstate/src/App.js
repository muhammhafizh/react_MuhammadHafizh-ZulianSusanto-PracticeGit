/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTodo, deleteTodo, completedTodo } from './features/TodoState';

function App() {
  const works = useSelector(state => state.Todo)
  const dispatch = useDispatch()
  //console.log(works)

  const [titleWork, setTitleWork] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(titleWork))
    setTitleWork('')
  }

  const handleCompleted = (idFind) => {
    return dispatch(completedTodo(idFind))
  }

  const handleDelete = (idDelete) => {
    return dispatch(deleteTodo(idDelete))
  }

  return (
    <div className="App">
      <h1>TODOS</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='Add Todo...' value={titleWork} onChange={(e) => setTitleWork(e.target.value)} />
      </form>
      {works.map(work => {
        return (
          <ul key={work.id}>
            <li className='list'>
              {/* deepcode ignore ReactControlledUncontrolledFormElement: <please specify a reason of ignoring this> */}
              <input type='checkbox' value={work.id} defaultChecked={work.completed} onClick={() => handleCompleted(work)} />
              <span className={work.completed === true ? 'list-completed' : ''}>{work.title}</span>
              <button onClick={() => handleDelete(work)}>Delete</button>
            </li>
          </ul>
        )
      })}
    </div>
  );
}

export default App;