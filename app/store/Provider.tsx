'use client'

import { Provider as StoreProvider } from 'react-redux'
import { store } from '.'

const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <StoreProvider store={store}>{children}</StoreProvider>
}

export default Provider
