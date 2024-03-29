import styled from "styled-components"
import { PropsInformacoes } from "../shared/interfaces"
import Informacoes from "../shared/Informacoes"


const Container = styled.div`
    border-radius: 4px;
    width: 570px;
    height: 600px;
    position: relative;
    background-color: #0D0D0D;

    @media screen and (max-width: 768px) {
        width: 100%;
        border-radius: 0;
    }
`

const DivImagem = styled.div`
    position: absolute;
    width: 90%;
    height: 511px;
    bottom: 0px;
    left: 30px;

    @media screen and (max-width: 768px) {
        img {
            width: 100%;
            height: 100%;
        }
    }
`



const ProdutoPrincipal = ({imagem, titulo, subtitulo}: PropsInformacoes) => {
    return (
        <Container>
            <DivImagem>
                <img src={imagem} />
            </DivImagem>
            <Informacoes titulo={titulo} subtitulo={subtitulo}/>
        </Container>
    )
}

export default ProdutoPrincipal