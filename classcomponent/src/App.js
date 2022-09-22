/* eslint-disable array-callback-return */
import './App.css';
import React, { Component } from 'react'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
      {
        todoItems: [
          {id: 1, title: "Mengerjakan Exercise", completed: true},
          {id: 2, title: "Mengerjakan Assignment", completed: false}
        ],
        titleWorks: " "
      }
    ;
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newID = this.state.todoItems.length
    this.setState({ todoItems: [
        ...this.state.todoItems,
        { id: newID + 1, title: this.state.titleWorks, completed: false }
      ] 
    })
    this.setState({ titleWorks: ''})
  }

  handleCompleted = (idFind) => {
    const textCompeleted = this.state.todoItems.map((works) => {
      if (works.id === idFind.id) {
        return { ...works, completed: !works.completed };
      } else {
        return works;
      }
    });

    this.setState({ todoItems: textCompeleted})
  }

  handleDelete = (idDelete) => {
    const deleteList = this.state.todoItems.filter((work) => {
      return work.id !== idDelete.id
    })

    this.setState({ todoItems: deleteList})
  }


  render() {
    return (
      <div className="App">
        <h1>TODOS</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='Add Todo...' value={this.state.titleWorks} onChange={(e) => this.setState({ titleWorks: e.target.value })}/>
        </form>

        {this.state.todoItems.map(works => {
          return (
            <ul key={works.id}>
              <li>
              <input type='checkbox' value={works} defaultChecked={works.completed} onClick={() => this.handleCompleted(works)} />
              <span className={works.completed === true ? 'list-completed' : ''}>{works.title}</span>
              <button onClick={() => this.handleDelete(works)}>Delete</button>
              </li>
            </ul>
          )
        })}
    </div>
    )
  }
}
