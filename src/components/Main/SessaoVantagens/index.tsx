import styled from "styled-components"
import Vantagem from "./Vantagem"

const Sessao = styled.section`
    display: flex;
    justify-content: space-around;
    gap: 88px;
    flex-wrap: wrap;
    width: 90vw;
`

const SessaoVantagens = () => {
    return (
        <Sessao>
            <Vantagem 
                icone="/images/icons/fast-delivery.svg" 
                titulo="FREE AND FAST DELIVERY" 
                subtitulo="Free delivery for all orders over $140"
            />
            <Vantagem 
                icone="/images/icons/call-center.svg" 
                titulo="24/7 CUSTOMER SERVICE" 
                subtitulo="Friendly 24/7 customer support"
            />
            <Vantagem 
                icone="/images/icons/escudo.svg" 
                titulo="MONEY BACK GUARANTEE" 
                subtitulo="We reurn money within 30 days"
            />
        </Sessao>
    )
}

export default SessaoVantagens