import styled from "styled-components"

const Texto = styled.h6`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 0.875rem;
    color: #FAFAFA;
`

interface TextoProps {
    texto: string
}

const TextoOferta = ({texto}: TextoProps) => {
    return (
        <Texto>{texto}</Texto>
    )
}

export default TextoOferta