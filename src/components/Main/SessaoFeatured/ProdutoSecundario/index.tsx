import styled from "styled-components"
import { EfeitoFundoImagem } from "../../BannerDestaque"
import Informacoes from "../shared/Informacoes"
import { PropsInformacoes } from "../shared/interfaces"

const Container = styled.div`
    border-radius: 4px;
    position: relative;
    width: 100%;
    height: 284px;
    background-color: #0D0D0D;
`

const DivImagem = styled.div`
    position: absolute;
    width: 250px;
    height: 250px;
    right: 45px;
    bottom: 0px;

    div {
        filter: blur(200px);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media screen and (max-width: 425px) {
        width: 180px;
        height: 180px;

        img {
            position: relative;
            left: 30px;
            bottom: 133px;
        }
    }
`

const ProdutoSecundario = ({ imagem, titulo, subtitulo }: PropsInformacoes) => {
    return (
        <Container>
            <DivImagem>
                <EfeitoFundoImagem />
                <img src={imagem} />
            </DivImagem>
            <Informacoes titulo={titulo} subtitulo={subtitulo} />
        </Container>
    )
}

export default ProdutoSecundario