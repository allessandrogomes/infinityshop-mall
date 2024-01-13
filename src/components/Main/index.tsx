import { ReactNode } from "react"
import styled from "styled-components"

interface MainProps {
    children: ReactNode
}

const MainEstilizado = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 200px;
`

const Main: React.FC<MainProps> = ({children}) => {
    return <MainEstilizado>{children}</MainEstilizado>
}

export default Main