import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }`

export const Container = styled.div`
  max-width: 600px;
  margin: auto;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  padding: 2rem;
`
export const ContainerTitulo = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Botao = styled(Link)`
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  background-color: rgb(11, 168, 45);
  border-radius: 8px;
  margin-bottom: 24px;
  text-decoration: none;
`
export default EstiloGlobal
