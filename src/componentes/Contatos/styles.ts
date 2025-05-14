import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 8px;
  background-color: #fafafa;
`
export const Titulo = styled.h2`
  font-size: 16px;
  margin-bottom: 8px;
`

export const Textos = styled.p`
  font-size: 15px;
  margin-bottom: 6px;

  span {
    font-weight: bold;
  }
`
export const ContainerBotao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  border: 1px solid black;
  cursor: pointer;
  background-color: #ccc;
  border-radius: 8px;
  margin-right: 8px;
`
