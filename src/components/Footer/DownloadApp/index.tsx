import styled from "styled-components"
import ContainerItemFooter from "../shared/ContainerItemFooter"
import TituloItemFooter from "../shared/TituloItemFooter"

const Span = styled.span`
    font-size: 0.75rem;
    font-weight: 500;
    opacity: 0.7;
    margin-bottom: 10px;
`

const Container = styled.div`

    display: flex;
    align-items: center;
    gap: 8px;

    img {
        cursor: pointer;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
`

const DownloadApp = () => {
    return (
        <ContainerItemFooter>
            <TituloItemFooter titulo="DownloadApp"/>
            <Span>Save $3 with App New User Only</Span>
            <Container>
                <img className="qrcode-icon" src="/images/icons/qrcode.svg" />
                <div>
                    <img className="store-icon" src="/images/icons/playstore.svg" />
                    <img className="store-icon" src="/images/icons/appstore.svg" />
                </div>
            </Container>
        </ContainerItemFooter>
    )
}

export default DownloadApp