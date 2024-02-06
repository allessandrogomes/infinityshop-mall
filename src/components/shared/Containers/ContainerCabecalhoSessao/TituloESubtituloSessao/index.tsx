import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
        width: max-content;
        display: flex;
        gap: 10px;
        align-items: center;
    }

    img {
        width: 20px;
        height: 40px;
    }

    h2 {
        font-size: 1rem;
        font-family: 'Poppins';
        font-weight: 600;
        color: #DB4444;
        margin: 0;
    }

    h3 {
        font-family: 'Inter';
        font-size: 2.25rem;
        font-weight: 600;
        color: #000;
        letter-spacing: 1.44px;
        margin: 0;
        width: max-content;

        @media screen and (max-width: 768px) {
            font-size: 1.75rem;
        }
    }
`

interface TituloESubtituloSessaoProps {
    titulo: string
    subtitulo: string
}

const TituloESubtituloSessao = ({ titulo, subtitulo }: TituloESubtituloSessaoProps) => {
    return (
        <Container>
            <div>
                <img src="/images/icone-cabecalho-sessao.svg" />
                <h2>{titulo}</h2>
            </div>
            <h3>{subtitulo}</h3>
        </Container>

    )
}

export default TituloESubtituloSessao