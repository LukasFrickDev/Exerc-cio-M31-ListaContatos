import { useDispatch } from 'react-redux'
import InputMask from 'react-input-mask'

import ContatoClass from '../../models/Contato'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { editarContato, removerContato } from '../../store/reducers/contatos'

type Props = ContatoClass

function formatarTelefone(telefone: string): string {
  const telefoneLimpo = telefone.replace(/\D/g, '') // Remove caracteres não numéricos
  const match = telefoneLimpo.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]} ${match[3]}-${match[4]}`
  }
  return telefone // Retorna o telefone original se não corresponder ao formato
}

const Contato = ({
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (
      nomeOriginal.length > 0 &&
      telefoneOriginal.length > 0 &&
      emailOriginal.length > 0
    ) {
      setEmail(emailOriginal)
      setNome(nomeOriginal)
      setTelefone(telefoneOriginal)
    }
  }, [nomeOriginal, telefoneOriginal, emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setNome(nomeOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.ContactContainer>
      <div>
        {estaEditando ? (
          <input
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
          />
        ) : (
          <S.Titulo>{nome}</S.Titulo>
        )}
        <S.Textos>
          <span>Telefone:</span>{' '}
          {estaEditando ? (
            <InputMask
              mask="(99) 9 9999-9999"
              value={telefone}
              onChange={(evento) => setTelefone(evento.target.value)}
            >
              {(inputProps) => <input {...inputProps} type="text" />}
            </InputMask>
          ) : (
            formatarTelefone(telefone)
          )}
        </S.Textos>
        <S.Textos>
          <span>Email:</span>{' '}
          {estaEditando ? (
            <input
              type="email"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />
          ) : (
            email
          )}
        </S.Textos>
      </div>
      <S.ContainerBotao>
        {estaEditando ? (
          <>
            <S.Botao
              onClick={() => {
                dispatch(editarContato({ id, nome, telefone, email }))
                setEstaEditando(false)
                setEmail(emailOriginal)
                setNome(nomeOriginal)
                setTelefone(telefoneOriginal)
              }}
            >
              Salvar
            </S.Botao>
            <S.Botao onClick={() => cancelarEdicao()}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.Botao onClick={() => dispatch(removerContato(id))}>
              Remover
            </S.Botao>
          </>
        )}
      </S.ContainerBotao>
    </S.ContactContainer>
  )
}

export default Contato
