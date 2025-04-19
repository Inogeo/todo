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
    removeTask: (state, action:PayloadAction<string>) => {
      return state.filter(function(item){return item.uuid != action.payload})
    },
  }
})


export const { addTask, removeTask } = taskSlice.actions

export default taskSlice.reducer  