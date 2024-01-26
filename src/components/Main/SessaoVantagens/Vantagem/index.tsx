import styled from "styled-components"

const Container = styled.div`
    width: 260px;
    height: 161px;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    position: relative;
`

const Titulo = styled.span`
    color: #000;
    font-family: 'Poppins';
    font-size: 1.25rem;
    font-weight: 600;
`

const Subtitulo = styled.span`
    color: #000;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 0.875rem;
`

const Icone = styled.div`
    position: relative;
    .vantagem-icone {
        position: absolute;
        left: 110px;
        bottom: 20px;
    }
`

interface PropsVantagem {
    icone: string
    titulo: string
    subtitulo: string
}

const Vantagem = ({ icone, titulo, subtitulo }: PropsVantagem) => {
    return (
        <Container>
            <Icone>
                <img src="/images/icons/escudo-icon.svg" />
                <img className="vantagem-icone" src={icone} />
            </Icone>
            <Titulo>{titulo}</Titulo>
            <Subtitulo>{subtitulo}</Subtitulo>
        </Container>
    )
}

export default Vantagem