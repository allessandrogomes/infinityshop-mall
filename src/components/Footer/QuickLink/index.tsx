import BotaoInformacao from "../shared/BotaoInformacao"
import ContainerItemFooter from "../shared/ContainerItemFooter"
import TituloItemFooter from "../shared/TituloItemFooter"


const QuickLink = () => {
    return (
        <ContainerItemFooter>
            <TituloItemFooter titulo="Quick Link"/>
            <BotaoInformacao informacao="Privacy Policy"/>
            <BotaoInformacao informacao="Terms Of Use"/>
            <BotaoInformacao informacao="FAQ"/>
            <BotaoInformacao informacao="Contact"/>
        </ContainerItemFooter>
    )
}

export default QuickLink