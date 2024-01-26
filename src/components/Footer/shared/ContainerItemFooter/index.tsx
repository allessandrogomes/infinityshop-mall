import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: max-content;
    display: flex;
    flex-direction: column;
    font-family: 'Poppins';
    color: #FAFAFA;;
`

interface PropsContainerItemFooter {
    children: ReactNode
    style?: React.CSSProperties
}

const ContainerItemFooter = ({children, style}: PropsContainerItemFooter) => {
    return (
        <Container style={style}>{children}</Container>
    )
}

export default ContainerItemFooter