import styled from "styled-components"

const Btn = styled.button`
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 16px;
    border: none;
    background-color: transparent;
    color: #FAFAFA;
    text-align: start;
    width: max-content;
`

interface PropsInformacao {
    informacao: string
}

const BotaoInformacao = ({informacao}: PropsInformacao) => {
    return (
        <Btn>{informacao}</Btn>
    )
}

export default BotaoInformacao