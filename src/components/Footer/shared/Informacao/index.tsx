import styled from "styled-components"

const Span = styled.span`
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 16px;
`

interface PropsInformacao {
    informacao: string
}

const Informacao = ({informacao}: PropsInformacao) => {
    return (
        <Span>{informacao}</Span>
    )
}

export default Informacao