'use client'

import { useAppDispatch, useAppSelector } from 'hooks'
import { useCallback } from 'react'
import { CounterActions, CounterCustomActions, CounterSelectors } from 'store/slices'

const Counter = () => {
  const dispatch = useAppDispatch()
  const counter = useAppSelector(CounterSelectors.counterSelector)

  const handleDecrementCounter = useCallback(() => {
    dispatch(CounterActions.decrement())
  }, [dispatch])

  const handleIncrementCounter = useCallback(() => {
    dispatch(CounterActions.increment())
  }, [dispatch])

  const handleDecrementCounterByAmount = useCallback(() => {
    dispatch(CounterActions.decrementByAmount(5))
  }, [dispatch])

  const handleIncrementCounterByAmount = useCallback(() => {
    dispatch(CounterActions.incrementByAmount(5))
  }, [dispatch])

  const handleIncrementCounterByCustomAction = useCallback(() => {
    dispatch(CounterCustomActions.incrementByCreateAction(4))
  }, [dispatch])

  // Note that this function name will not violate the linting rule defined for function names,
  // since it is NOT exported from this .tsx file. In order to have an idea, please refer to
  // "overrides" section in .eslintrc.json file located in the root directory.
  const renderCounter = useCallback((counter: number) => {
    return (
      <div>
        <span>Counter: {counter}</span>
      </div>
    )
  }, [])

  return (
    <>
      {renderCounter(counter)}
      <div>
        <button type="button" onClick={handleDecrementCounter}>
          Decrement
        </button>
        <button type="button" onClick={handleIncrementCounter}>
          Increment
        </button>
        <button type="button" onClick={handleDecrementCounterByAmount}>
          Decrement by 5
        </button>
        <button type="button" onClick={handleIncrementCounterByAmount}>
          Increment by 5
        </button>
        <button type="button" onClick={handleIncrementCounterByCustomAction}>
          Increment by 4
        </button>
      </div>
    </>
  )
}

export default Counter
