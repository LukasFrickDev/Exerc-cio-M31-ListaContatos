import { FormEvent, useState } from 'react'
import { Botao, Container, ContainerTitulo } from '../../styles'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adicionarContato } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const telefoneLimpo = telefone.replace(/\D/g, '')
    if (nome === '') {
      alert('Você precisa preencher os campos')
      return
    }
    if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
      alert(
        'O telefone está incorreto, deve conter DDD e no máximo 11 digitos.'
      )
      return
    }
    if (!email.includes('@')) {
      alert('O e-mail deve ser válido e conter "@".')
      return
    }
    dispatch(adicionarContato({ nome, telefone, email }))
    navigate('/')
  }
  return (
    <>
      <Container>
        <ContainerTitulo>
          <h2>Adicionar Contato</h2>
          <Botao to="/">Voltar</Botao>
        </ContainerTitulo>
        <S.Form onSubmit={cadastrarContato}>
          <S.Label htmlFor="">Nome:</S.Label>
          <S.Campo
            value={nome}
            onChange={({ target }) => setNome(target.value)}
            type="text"
            placeholder="Insira o Nome do Contato"
          />
          <S.Label htmlFor="">Telefone:</S.Label>
          <S.Campo
            value={telefone}
            onChange={({ target }) => setTelefone(target.value)}
            type="text"
            placeholder="Insira o Telefone do Contato"
          />
          <S.Label htmlFor="">Email:</S.Label>
          <S.Campo
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="text"
            placeholder="Insira o E-mail do Contato"
          />
          <S.BotaoSalvar>Salvar</S.BotaoSalvar>
        </S.Form>
      </Container>
    </>
  )
}

export default Formulario
