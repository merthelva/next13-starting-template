import { createSelector } from '@reduxjs/toolkit'
import type { RootStateType } from 'store'

const rootCounterState = (state: RootStateType) => state.counter

export const counterSelector = createSelector(rootCounterState, ({ value }) => value)
