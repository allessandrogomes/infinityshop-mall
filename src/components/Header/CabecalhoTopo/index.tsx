import styled from "styled-components"
import TextoOferta from "./TextoOferta"
import BotaoOferta from "./BotaoOferta"
import SelecionarIdioma from "./SelecionarIdioma"

const Container = styled.div`
    display: flex;
    width: 100vw;
    min-height: 48px;
    background-color: #000;
    align-items: center;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 1024px) {
        justify-content: center;
        padding: 15px 15px;
        flex-direction: column;
        height: 100%;
    }
`

const DivOferta = styled.div`
    max-width: 551px;
    display: flex;
    gap: 2px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const CabecalhoTopo = () => {
    return (
        <Container>
            <DivOferta>
                <TextoOferta texto="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"/>
                <BotaoOferta texto="ShopNow"/>
            </DivOferta>
            <SelecionarIdioma />
        </Container>
    )
}

export default CabecalhoTopo