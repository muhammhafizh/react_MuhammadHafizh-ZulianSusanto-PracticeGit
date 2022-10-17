import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../API/AxiosInstance';

const initialState = {
  posts: [],
  status: "idle",
  error: null
};

export const getPosts = createAsyncThunk("posts/getPosts", async() => {
  const res = await instance.get('get')
  return res.data.users
})

export const addPosts = createAsyncThunk("posts/addPosts", async(initialPost) => {
  const res = await instance.post('get', initialPost)
  return res.data.insert_users_one
})

export const updatePosts = createAsyncThunk("posts/updatePosts", async(initialPost) => {
  const dataID = initialPost.id
  const newCompleted = !initialPost.completed

  const res = await instance.put(`get/${dataID}`, {  
    completed: newCompleted
  })
  
  return res.data.update_users.returning[0]
})

export const deletePosts = createAsyncThunk("posts/deletePosts", async(initialPost) => {
  const res = await instance.delete(`get/${initialPost}`)
  return res.data.delete_users.returning[0]
})

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "success"
        state.posts = [...action.payload]
      })
      .addCase(addPosts.fulfilled, (state, action) => {
        state.posts.push(action.payload)
      })
      .addCase(updatePosts.fulfilled, (state, action) => {
        const index = state.posts.findIndex(post => post.id === action.payload.id);
        state.posts[index] = {
          ...state.posts[index],
          ...action.payload,
        };
      })
      .addCase(deletePosts.fulfilled, (state, action) => {
        const index = state.posts.findIndex(post => post.id === action.payload.id);
        state.posts.splice(index, 1);
      })
  }
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, completedTodo } = todoSlice.actions

export default todoSlice.reducer