import { createAction } from '@reduxjs/toolkit'

export const incrementByCreateAction = createAction(
  'counter/incrementByCreateAction',
  function prepare(val?: number) {
    return {
      payload: {
        value: val ?? 1,
      },
    }
  },
)
