import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id : 1, title : "Mengerjakan Exercise", completed : true},
  { id : 2, title : "Mengerjakan Assignment", completed: false}
]

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: state.length + 1,
        title: action.payload,
        completed: false
      }
      return [...state, newTodo]
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id)
    },
    completedTodo: (state, action) => {
        return state.map((todo) => {
          if (todo.id !== action.payload.id) {
            return todo
          }
  
          return {
            ...todo,
            completed: !todo.completed,
          }
        })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, completedTodo } = todoSlice.actions

export default todoSlice.reducer