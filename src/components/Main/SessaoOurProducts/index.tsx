import BtnVerTodosProdutos from "../../shared/Buttons/BtnVerTodosProdutos"
import SetasSessao from "../../shared/Buttons/SetasSessao"
import Cabecalho from "../../shared/Containers/ContainerCabecalhoSessao"
import TituloESubtituloSessao from "../../shared/Containers/ContainerCabecalhoSessao/TituloESubtituloSessao"
import Produtos from "../../shared/Containers/ContainerProdutosSessao"
import CardProduto from "../../shared/Containers/ContainerProdutosSessao/CardProduto"
import Sessao from "../../shared/Containers/ContainerSessao"


const SessaoOurProducts = () => {
    return (
        <Sessao>
            <Cabecalho>
                <TituloESubtituloSessao titulo="Our Products" subtitulo="Explore Our Products" />
                <SetasSessao nomeSessao="our-products"/>
            </Cabecalho>
            <Produtos>
                <CardProduto
                    imagem="/images/produtos/racao-de-cachorro.svg"
                    nome="Breed Dry Dog Food"
                    preco={100}
                    avaliacao={3}
                    quantidadeAvaliacoes={35}
                />
                <CardProduto
                    imagem="/images/produtos/camera-profissional.svg"
                    nome="CANON EOS DSLR Camera"
                    preco={360}
                    avaliacao={4}
                    quantidadeAvaliacoes={95}
                />
                <CardProduto
                    imagem="/images/produtos/notebook.svg"
                    nome="ASUS FHD Gaming Laptop"
                    preco={700}
                    avaliacao={5}
                    quantidadeAvaliacoes={325}
                />
                <CardProduto
                    imagem="/images/produtos/creme-para-pele.svg"
                    nome="Curology Product Set"
                    preco={500}
                    avaliacao={4}
                    quantidadeAvaliacoes={145}
                />
                <CardProduto
                    imagem="/images/produtos/carro-de-crianca.svg"
                    nome="Kids Electric Car"
                    preco={960}
                    avaliacao={5}
                    quantidadeAvaliacoes={65}
                    produtoNovo={true}
                />
                <CardProduto
                    imagem="/images/produtos/chuteira.svg"
                    nome="Jr. Zoom Soccer Cleats"
                    preco={1160}
                    avaliacao={5}
                    quantidadeAvaliacoes={35}
                />
                <CardProduto
                    imagem="/images/produtos/controle-videogame-usb.svg"
                    nome="GP11 Shooter USB Gamepad"
                    preco={660}
                    precoAnterior={924}
                    avaliacao={4.5}
                    quantidadeAvaliacoes={55}
                    produtoNovo={true}
                    desconto={40}
                />
                <CardProduto
                    imagem="/images/produtos/casaco-verde.svg"
                    nome="Quilted Satin Jacket"
                    preco={660}
                    avaliacao={4.5}
                    quantidadeAvaliacoes={55}
                />
            </Produtos>
            <BtnVerTodosProdutos texto="View All Products"/>
        </Sessao>
    )
}

export default SessaoOurProducts