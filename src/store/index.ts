import { configureStore } from '@reduxjs/toolkit'
import contatoReducer from './reducers/contatos'

export const store = configureStore({
  reducer: {
    contato: contatoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
