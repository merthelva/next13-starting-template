import { counterReducer } from './slices'

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

type RootStateType = ReturnType<typeof store.getState>
type AppDispatchType = typeof store.dispatch

export { store, type AppDispatchType, type RootStateType }
