import Sessao from "../../shared/Containers/ContainerSessao"
import Cabecalho from "../../shared/Containers/ContainerCabecalhoSessao"
import TituloESubtituloSessao from "../../shared/Containers/ContainerCabecalhoSessao/TituloESubtituloSessao"
import Cronometro from "./Cronometro"
import Produtos from "../../shared/Containers/ContainerProdutosSessao"
import CardProduto from "../../shared/Containers/ContainerProdutosSessao/CardProduto"
import { Divider } from "@mui/material"
import SetasSessao from "../../shared/Buttons/SetasSessao"
import BtnVerTodosProdutos from "../../shared/Buttons/BtnVerTodosProdutos"

const SessaoToday = () => {
    return (
        <Sessao>
            <Cabecalho>
                <TituloESubtituloSessao titulo="Today" subtitulo="Flash Sales" />
                <Cronometro />
                <SetasSessao />
            </Cabecalho>
            <Produtos>
                <CardProduto 
                    desconto={40} 
                    imagem="/images/produtos/controle-video-game.svg"
                    nome="HAVIT HV-G92 Gamepad"
                    preco={120}
                    precoAnterior={160}
                    avaliacao={5}
                    quantidadeAvaliacoes={88}
                />
                <CardProduto 
                    desconto={35} 
                    imagem="/images/produtos/teclado-gamer.svg"
                    nome="AK-900 Wired Keyboard"
                    preco={960}
                    precoAnterior={1160}
                    avaliacao={4}
                    quantidadeAvaliacoes={76}
                />
                <CardProduto 
                    desconto={30} 
                    imagem="/images/produtos/monitor-gamer.svg"
                    nome="IPS LCD Gaming Monitor"
                    preco={370}
                    precoAnterior={400}
                    avaliacao={5}
                    quantidadeAvaliacoes={99}
                />
                <CardProduto 
                    desconto={40} 
                    imagem="/images/produtos/poltrona.svg"
                    nome="S-Series Comfort Chair "
                    preco={375}
                    precoAnterior={400}
                    avaliacao={4.5}
                    quantidadeAvaliacoes={99}
                />
            </Produtos>
            <BtnVerTodosProdutos texto="View All Products"/>
            <Divider sx={{ backgroundColor: '#000', opacity: '0.15', marginTop: '50px' }} />
        </Sessao>
    )
}

export default SessaoToday