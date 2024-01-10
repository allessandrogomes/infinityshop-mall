import { ReactNode } from "react"

interface MainProps {
    children: ReactNode
}

const Main: React.FC<MainProps> = ({children}) => {
    return <main>{children}</main>
}

export default Main