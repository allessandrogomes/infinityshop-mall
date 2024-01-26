import ContainerItemFooter from "../shared/ContainerItemFooter"
import Informacao from "../shared/Informacao"
import TituloItemFooter from "../shared/TituloItemFooter"


const Support = () => {
    return (
        <ContainerItemFooter style={{width: '217px'}}>
            <TituloItemFooter titulo="Support"/>
            <Informacao informacao="111 Bijoy sarani, Dhaka, DH 1515, Bangladesh."/>
            <Informacao informacao="exclusive@gmail.com"/>
            <Informacao informacao="+88015-88888-9999"/>
        </ContainerItemFooter>
    )
}

export default Support