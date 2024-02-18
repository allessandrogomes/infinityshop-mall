import styled from "styled-components"
import Cabecalho from "../../shared/Containers/ContainerCabecalhoSessao"
import TituloESubtituloSessao from "../../shared/Containers/ContainerCabecalhoSessao/TituloESubtituloSessao"
import ProdutoPrincipal from "./ProdutoPrincipal"
import ProdutoSecundario from "./ProdutoSecundario"
import ProdutoMenor from "./ProdutoMenor"
import Sessao from "../../shared/Containers/ContainerSessao"

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #FFF;
    color: #FAFAFA;
    gap: 30px;
    justify-content: center;
`


const DivOutrosProdutos = styled.div`
    width: 570px;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 30px;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

const DivProdutosMenores = styled.div`
    display: flex;
    width: 100%;
    height: 284px;
    gap: 30px;

    @media screen and (max-width: 768px) {
        justify-content: space-around;
    }
`

const SessaoFeatured = () => {
    return (
        <Sessao>
            <Cabecalho>
                <TituloESubtituloSessao titulo="Featured" subtitulo="New Arrival" />
            </Cabecalho>
            <Container>
                <ProdutoPrincipal
                    imagem="/images/produtos/ps5.svg"
                    titulo="PlayStation 5"
                    subtitulo="Black and White version of the PS5 coming out on sale."
                />
                <DivOutrosProdutos>
                    <ProdutoSecundario
                        imagem="/images/produtos/shoes-women.png"
                        titulo="Women’s Collections"
                        subtitulo="Featured woman collections that give you another vibe."
                    />
                    <DivProdutosMenores>
                        <ProdutoMenor 
                            imagem="/images/produtos/speakers.svg" 
                            titulo="Speakers" 
                            subtitulo="Amazon wireless speakers"
                        />
                        <ProdutoMenor 
                            imagem="/images/produtos/perfume.svg" 
                            titulo="Perfume" 
                            subtitulo="GUCCI INTENSE OUD EDP"
                        />
                    </DivProdutosMenores>
                </DivOutrosProdutos>
            </Container>
        </Sessao>
    )
}

export default SessaoFeatured