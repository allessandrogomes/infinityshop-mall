import BotaoInformacao from "../shared/BotaoInformacao"
import ContainerItemFooter from "../shared/ContainerItemFooter"
import TituloItemFooter from "../shared/TituloItemFooter"


const Account = () => {
    return (
        <ContainerItemFooter>
            <TituloItemFooter titulo="Account"/>
            <BotaoInformacao informacao="My Account"/>
            <BotaoInformacao informacao="Login / Register"/>
            <BotaoInformacao informacao="Cart"/>
            <BotaoInformacao informacao="Wishlist"/>
            <BotaoInformacao informacao="Shop"/>
        </ContainerItemFooter>
    )
}

export default Account