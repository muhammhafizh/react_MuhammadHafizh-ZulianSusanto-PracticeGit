/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import './App.css';

function App() {
  const [works, setWorks] = useState([
      { id : 1, title : "Mengerjakan Exercise", completed : true},
      { id : 2, title : "Mengerjakan Assignment", completed: false}
    ]
  )

  const [titleWork, setTitleWork] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let newID = works.length
    setWorks(prevWork => [...prevWork, {id : newID + 1, title : titleWork, completed : false}])
    setTitleWork('')
  }

  const handleCompleted = (idFind) => {
    const textCompeleted = works.map((work) => {
      if (work.id === idFind.id) {
        return { ...work, completed: !work.completed };
      } else {
        return work;
      }
    });

    setWorks(textCompeleted)
  }

  const handleDelete = (idDelete) => {
    const deleteList = works.filter((work) => {
      return work.id !== idDelete.id
    })

    setWorks(deleteList)
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
