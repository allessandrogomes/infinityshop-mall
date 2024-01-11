import styled from "styled-components"
import TituloESubtituloSessao from "../TituloESubtituloSessao"
import Cronometro from "./Cronometro"
import SetasSessao from "../SetasSessao"
import CardProduto from "../CardProduto"


const Sessao = styled.section`
    display: flex;
    flex-direction: column;
    margin: 135px 0 0 135px;
    width: 80%;
    gap: 40px;
`

const Cabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
`

const Produtos = styled.div`
    display: flex;
    gap: 30px;
`

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
                    precoAtual={120}
                    precoAnterior={160}
                    avaliacao={5}
                    quantidadeAvaliacoes={88}
                />
                <CardProduto 
                    desconto={40} 
                    imagem="/images/produtos/controle-video-game.svg"
                    nome="HAVIT HV-G92 Gamepad"
                    precoAtual={120}
                    precoAnterior={160}
                    avaliacao={5}
                    quantidadeAvaliacoes={88}
                />
                <CardProduto 
                    desconto={40} 
                    imagem="/images/produtos/controle-video-game.svg"
                    nome="HAVIT HV-G92 Gamepad"
                    precoAtual={120}
                    precoAnterior={160}
                    avaliacao={5}
                    quantidadeAvaliacoes={88}
                />
                <CardProduto 
                    desconto={40} 
                    imagem="/images/produtos/controle-video-game.svg"
                    nome="HAVIT HV-G92 Gamepad"
                    precoAtual={120}
                    precoAnterior={160}
                    avaliacao={5}
                    quantidadeAvaliacoes={88}
                />
            </Produtos>
        </Sessao>
    )
}

export default SessaoToday