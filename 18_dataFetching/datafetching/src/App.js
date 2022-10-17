/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addPosts, updatePosts, deletePosts } from './features/TodoState';

function App() {  
  
  const works = useSelector(state => state.todo.posts)
  const status = useSelector(state => state.todo.status)
  const dispatch = useDispatch()
  const [titleWork, setTitleWork] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addPosts({
      id: works.length + 1,
      title: titleWork,
      completed: false
    }))
    setTitleWork('')
  }

  const handleCompleted = (idFind) => {
    dispatch(updatePosts(idFind))
  }

  const handleDelete = (idDelete) => {
    return dispatch(deletePosts(idDelete.id))
  }

  return (
    <div className="App">
      <h1>TODOS</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='Add Todo...' value={titleWork} onChange={(e) => setTitleWork(e.target.value)} />
      </form>
      { status === 'idle' ? (
        <h1>Please wait</h1>
      ) : works?.map(work => {
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