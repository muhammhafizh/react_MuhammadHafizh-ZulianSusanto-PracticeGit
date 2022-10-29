/* eslint-disable no-unused-expressions */
import { useMutation, useSubscription } from '@apollo/client';
import { useState } from 'react';
import { GET_USERS, UPDATE_USERS, DELETE_USERS, INSERT_USERS, SUBSCRIBE_USERS } from './apollo/Todo-list';
import './App.css';

function App() {
  const { loading, data  } = useSubscription(SUBSCRIBE_USERS);
  const [ updateTodo, { loading: loadingUpdate} ] = useMutation(UPDATE_USERS, {refetchQueries: [GET_USERS]})
  const [ deleteTodo, { loading: loadingDelete} ] = useMutation(DELETE_USERS, {refetchQueries: [GET_USERS]})
  const [ insertTodo, { loading: loadingInsert} ] = useMutation(INSERT_USERS, {refetchQueries: [GET_USERS]})
  const [titleWork, setTitleWork] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await insertTodo({
      variables: {
        title: titleWork
      }
    })

    setTitleWork('')
  }

  const handleCompleted = async (idFind) => {
    updateTodo({
      variables: {
        id: idFind.id,
        completed: !idFind.completed
      }
    })
  }

  const handleDelete = async (idDelete) => {
    await deleteTodo({
      variables: {
        id: idDelete.id
      }
    })
  }

  if (loading || loadingUpdate || loadingDelete || loadingInsert) {
    return <h1 style={{"textAlign": "center", "marginTop": "200px", "color": "orange"}}>Please Wait</h1>
  }

  return (
    <div className="App">
      <h1>TODOS</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='Add Todo...' value={titleWork} onChange={(e) => setTitleWork(e.target.value)} />
      </form>
      {data?.users.map(work => {
        return (
          <ul key={work.id}>
            <li className='list'>
              <input type='checkbox' value={work.id} onClick={() => handleCompleted(work)} checked={work.completed}/>
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