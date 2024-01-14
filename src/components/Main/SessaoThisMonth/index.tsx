import Cabecalho from "../../shared/Containers/ContainerCabecalhoSessao"
import CardProduto from "../../shared/Containers/ContainerProdutosSessao/CardProduto"
import Sessao from "../../shared/Containers/ContainerSessao"
import TituloESubtituloSessao from "../../shared/Containers/ContainerCabecalhoSessao/TituloESubtituloSessao"
import Produtos from "../../shared/Containers/ContainerProdutosSessao"
import BtnVerTodosProdutos from "../../shared/Buttons/BtnVerTodosProdutos"

const SessaoThisMonth = () => {
    return (
        <Sessao>
            <Cabecalho>
                <TituloESubtituloSessao titulo="This Month" subtitulo="Best Selling Products" />
                <BtnVerTodosProdutos style={{ width: '159px', margin: '0' }} texto="View All" />
            </Cabecalho>
            <Produtos>
                <CardProduto
                    imagem="/images/produtos/casaco-rosa.svg"
                    nome="The north coat"
                    preco={260}
                    avaliacao={5}
                    quantidadeAvaliacoes={65}
                />
                <CardProduto
                    imagem="/images/produtos/bolsa-feminina.svg"
                    nome="Gucci duffle bag"
                    preco={960}
                    avaliacao={4.5}
                    quantidadeAvaliacoes={65}
                />
                <CardProduto
                    imagem="/images/produtos/cooler-rgb.svg"
                    nome="RGB liquid CPU Cooler"
                    preco={160}
                    avaliacao={4.5}
                    quantidadeAvaliacoes={65}
                />
                <CardProduto
                    imagem="/images/produtos/estante-pequena.svg"
                    nome="Small BookSelf"
                    preco={360}
                    avaliacao={5}
                    quantidadeAvaliacoes={65}
                />
            </Produtos>
        </Sessao>
    )
}

export default SessaoThisMonth