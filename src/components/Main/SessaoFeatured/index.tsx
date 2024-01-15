import styled from "styled-components"
import Cabecalho from "../../shared/Containers/ContainerCabecalhoSessao"
import TituloESubtituloSessao from "../../shared/Containers/ContainerCabecalhoSessao/TituloESubtituloSessao"
import Sessao from "../../shared/Containers/ContainerSessao"
import BotaoOferta from "../../Header/CabecalhoTopo/BotaoOferta"

const Container = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    background-color: #FFF;
    color: #FAFAFA;
    gap: 30px;
    justify-content: center;
`

const ProdutoPrincipal = styled.div`
    width: 570px;
    height: 100%;
    position: relative;
    background-color: #000;
`

const DivOutrosProdutos = styled.div`
    width: 570px;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 30px;
    justify-content: space-between;
`

const ProdutoSecundario = styled.div`
    width: 100%;
    height: 284px;
    background-color: blue;
`

const DivProdutosMenores = styled.div`
    display: flex;
    width: 100%;
    height: 284px;
    gap: 30px;
`

const ProdutoMenorUm = styled.div`
    width: 270px;
    height: 284px;
    background-color: purple;
`

const ProdutoMenorDois = styled.div`
    width: 270px;
    height: 284px;
    background-color: green;
`

const DivInformacoes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: absolute;
    bottom: 5%;
    left: 10%;
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

const SessaoFeatured = () => {
    return (
        <Sessao>
            <Cabecalho>
                <TituloESubtituloSessao titulo="Featured" subtitulo="New Arrival" />
            </Cabecalho>
            <Container>
                <ProdutoPrincipal>
                    <DivInformacoes>
                        <Titulo>Playstation 5</Titulo>
                        <Subtitulo>Black and White version of the PS5 coming out on sale.</Subtitulo>
                        <BotaoOferta texto="Shop Now" />
                    </DivInformacoes>
                </ProdutoPrincipal>
                <DivOutrosProdutos>
                    <ProdutoSecundario>

                    </ProdutoSecundario>
                    <DivProdutosMenores>
                        <ProdutoMenorUm></ProdutoMenorUm>
                        <ProdutoMenorDois></ProdutoMenorDois>
                    </DivProdutosMenores>
                </DivOutrosProdutos>    
            </Container>
        </Sessao>
    )
}

export default SessaoFeatured