import styled from "styled-components"

const Botao = styled.button`
    padding: 0;
    background-color: transparent;
    border: none;
    text-decoration: underline;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 0.875rem;
    color: #FAFAFA;
    cursor: pointer;
`

interface TextoProps {
    texto: string
}

const BotaoOferta = ({texto}: TextoProps) => {
    return (
        <Botao>{texto}</Botao>
    )
}

export default BotaoOferta