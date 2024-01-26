import styled from "styled-components"
import { PropsInformacoes } from "../shared/interfaces"
import Informacoes from "../shared/Informacoes"


const Container = styled.div`
    border-radius: 4px;
    width: 570px;
    height: 600px;
    position: relative;
    background-color: #0D0D0D;
`

const DivImagem = styled.div`
    position: absolute;
    width: 90%;
    height: 511px;
    bottom: 0px;
    left: 30px;
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