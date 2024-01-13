import { ReactNode } from "react"

interface HeaderProps {
    children: ReactNode
}

const Header: React.FC<HeaderProps> = ({children}) => {
    return (
        <header style={{width: '100%'}}>{children}</header>
    )
}

export default Header