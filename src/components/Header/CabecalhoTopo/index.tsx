import styled from "styled-components"
import TextoOferta from "./TextoOferta"
import BotaoOferta from "./BotaoOferta"
import SelecionarIdioma from "./SelecionarIdioma"

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 48px;
    background-color: #000;
    align-items: center;
    justify-content: center;
`

const DivOferta = styled.div`
    width: max-content;
    display: flex;
    gap: 2px;
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