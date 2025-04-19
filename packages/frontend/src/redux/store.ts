import { combineReducers, configureStore } from '@reduxjs/toolkit'
import taskReducer from './taskSlice'

const rootReducer = combineReducers({
  tasks: taskReducer,
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']