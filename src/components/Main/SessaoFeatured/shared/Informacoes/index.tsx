import styled from "styled-components"
import BotaoOferta from "../../../../Header/CabecalhoTopo/BotaoOferta"
import { PropsTexto } from "../interfaces"

const Container = styled.div`
    max-width: 225px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: absolute;
    bottom: 5%;
    left: 5%;
`

const Titulo = styled.span`
    font-family: 'Inter';
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.72px;
`

const Subtitulo = styled.span`
    font-family: 'Poppins';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 21px;
`

const Informacoes = ({ titulo, subtitulo }: PropsTexto) => {
    return (
        <Container>
            <Titulo>{titulo}</Titulo>
            <Subtitulo>{subtitulo}</Subtitulo>
            <BotaoOferta texto="Shop Now" />
        </Container>
    )
}

export default Informacoes