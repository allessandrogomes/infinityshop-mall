import styled from "styled-components"
import TituloESubtituloSessao from "../TituloESubtituloSessao"
import Cronometro from "./Cronometro"
import SetasSessao from "../SetasSessao"
import CardProduto from "../CardProduto"
import BtnVerTodosProdutos from "../BtnVerTodosProdutos"
import { Divider } from "@mui/material"


export const Sessao = styled.section`
    display: flex;
    flex-direction: column;
    width: max-content;
    max-width: 80vw;
    gap: 40px;
`

export const Cabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
`

const Produtos = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
            <BtnVerTodosProdutos />
            <Divider sx={{ backgroundColor: '#000', opacity: '0.15', marginTop: '50px' }} />
        </Sessao>
    )
}

export default SessaoToday