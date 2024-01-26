import styled from "styled-components"
import Logo from "../../Header/CabecalhoPrincipal/Logo"
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ContainerItemFooter from "../shared/ContainerItemFooter";
import TituloItemFooter from "../shared/TituloItemFooter";
import Informacao from "../shared/Informacao";

const DivInputEmail = styled.div`
    width: 217px;
    display: flex;
    justify-content: space-between;
    padding: 12px 16px 12px 16px;
    border-radius: 4px;
    border: 1.5px solid #FAFAFA;
`

const InputEmail = styled.input`
    width: 80%;
    outline: none;
    border: none;
    background-color: transparent;
    color: #FAFAFA;
`

const Subscribe = () => {
    return (
        <ContainerItemFooter>
            <Logo style={{color: '#FAFAFA', marginBottom: '24px'}}/>
            <TituloItemFooter titulo="Subscribe"/>
            <Informacao informacao="Get 10% off your first order"/>
            <DivInputEmail>
                <InputEmail type="email" placeholder="Enter your email"/>
                <SendOutlinedIcon sx={{ cursor: 'pointer' }}/>
            </DivInputEmail>
        </ContainerItemFooter>
    )
}

export default Subscribe