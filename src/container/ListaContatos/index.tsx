import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'
import Contato from '../../componentes/Contatos'
import { Botao, Container, ContainerTitulo } from '../../styles'
import * as S from './styles'

const ListaContatos = () => {
  const contatos = useSelector((state: RootReducer) => state.contato.contato)
  return (
    <Container>
      <ContainerTitulo>
        <S.Titulo>Lista de contatos</S.Titulo>
        <Botao to="/adicionar">Adicionar Contato</Botao>
      </ContainerTitulo>
      <ul>
        {contatos.map((contato) => (
          <li key={contato.id}>
            <Contato
              id={contato.id}
              nome={contato.nome}
              telefone={contato.telefone}
              email={contato.email}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaContatos
