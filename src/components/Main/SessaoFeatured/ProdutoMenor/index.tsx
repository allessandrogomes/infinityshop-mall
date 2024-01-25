import styled from "styled-components"
import { EfeitoFundoImagem } from "../../BannerDestaque"
import { PropsInformacoes } from "../shared/interfaces"
import Informacoes from "../shared/Informacoes"

const Container = styled.div`
    width: 270px;
    height: 284px;
    position: relative;
    background-color: #0D0D0D;
`

const DivImagem = styled.div`
    position: absolute;
    width: 80%;
    height: 80%;
    bottom: 22px;
    right: 26px;

    div {
        filter: blur(150px);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const ProdutoMenor = ({ imagem, titulo, subtitulo }: PropsInformacoes) => {
    return (
        <Container>
            <DivImagem>
                <EfeitoFundoImagem />
                <img src={imagem} />
            </DivImagem>
            <Informacoes titulo={titulo} subtitulo={subtitulo}/>
        </Container>
    )
}

export default ProdutoMenor