import styled from "styled-components"


const Titulo = styled.span`
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 24px;
`

interface PropsTituloItemFooter {
    titulo: string
}

const TituloItemFooter = ({titulo}: PropsTituloItemFooter) => {
    return (
        <Titulo>{titulo}</Titulo>
    )
}

export default TituloItemFooter