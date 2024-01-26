import { ReactNode } from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 88px;
    flex-wrap: wrap;
`

interface PropsContainerItems {
    children: ReactNode
}

const ContainerItems = ({ children }: PropsContainerItems) => {
    return (
        <Container>{children}</Container>
    )
}

export default ContainerItems