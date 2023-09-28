import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { incrementByCreateAction } from './actions'
import type { InitialStateType } from './slice.type'

const initialState: InitialStateType = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByCreateAction, (state, action) => {
      state.value += action.payload.value
    })
  },
})

const { actions } = counterSlice

export default counterSlice.reducer
export { actions, counterSlice }
