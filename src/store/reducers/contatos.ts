import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  contato: Contato[]
}

const initialState: ContatoState = {
  contato: [
    {
      id: 1,
      nome: 'Lucas Silva',
      email: 'lucas.silva@example.com',
      telefone: '11987654321'
    },
    {
      id: 2,
      nome: 'Maria Oliveira',
      email: 'maria.oliveira@example.com',
      telefone: '21987654321'
    }
  ]
}

export const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contato = action.payload
      const contatoExistenteTelefone = state.contato.find(
        (c) => c.telefone === contato.telefone
      )
      const contatoExistenteEmail = state.contato.find(
        (c) => c.email === contato.email
      )
      if (!contatoExistenteTelefone && !contatoExistenteEmail) {
        const ultimoContato = state.contato[state.contato.length - 1]
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.contato.push(novoContato)
      } else {
        alert('Telefone ou e-mail já existem')
      }
    },
    editarContato: (state, action: PayloadAction<Contato>) => {
      const contato = action.payload
      const index = state.contato.findIndex((c) => c.id === contato.id)
      if (index !== -1) {
        state.contato[index] = action.payload
      }
    },
    removerContato: (state, action: PayloadAction<number>) => {
      state.contato = state.contato.filter((c) => c.id !== action.payload)
    }
  }
})

export const { adicionarContato, editarContato, removerContato } =
  contatoSlice.actions
export default contatoSlice.reducer
