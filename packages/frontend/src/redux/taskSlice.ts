import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import TaskType from '../types/Task'

const initialState: TaskType[] = [];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action:PayloadAction<TaskType>) => {
      state.push(action.payload)
    },
  }
})

// Action creators are generated for each case reducer function
export const { addTask } = taskSlice.actions

export default taskSlice.reducer  