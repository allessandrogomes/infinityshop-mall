import styled from "styled-components"
import { ReactNode } from "react"


const Container = styled.footer`
    width: 100vw;
    min-height: 440px;
    background-color: #000;
    margin-top: 150px;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 50px 0;
`

interface PropsFooter {
    children: ReactNode
}

const Footer = ({children}: PropsFooter) => {
    return (
        <Container>{children}</Container>
    )
}

export default Footer