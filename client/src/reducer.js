
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const addTodo = createAsyncThunk("todos/addTodo", async (description) => {
  const body = { description };
  const response = await axios.post("http://localhost:5000/todos", body, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
});


const initialState = {
  todos: [],
 
};


const todosSlice = createSlice({
  name: "reducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default todosSlice.reducer;
