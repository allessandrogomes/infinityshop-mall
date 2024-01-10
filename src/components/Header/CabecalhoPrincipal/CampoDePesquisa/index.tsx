import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    width: 243px;
    height: 38px;
    background-color: #F5F5F5;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`

const InputPesquisa = styled.input`
    min-width: 160px;
    height: 18px;
    color: #000;
    font-family: 'Poppins';
    font-size: 0.75rem;
    font-weight: 400;
    opacity: 0.5;
    border: none;
    background-color: #F5F5F5;
    outline: none;
`

const CampoDePesquisa = () => {
    return (
        <Container>
            <InputPesquisa placeholder="What are you looking for?"></InputPesquisa>
            <SearchIcon sx={{color: '#000', cursor: 'pointer'}}/>
        </Container>
    )
}

export default CampoDePesquisa