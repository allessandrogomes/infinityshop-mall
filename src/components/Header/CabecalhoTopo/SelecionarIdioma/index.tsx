import styled from "styled-components"

const Select = styled.select`
    color: #FFF;
    background-color: transparent;
    border: none;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 0.875rem;
    position: absolute;
    right: 30px;

    @media screen and (max-width: 1024px) {
        position: relative;
        right: 0;
    }
` 

const SelecionarIdioma = () => {

    return (
            <Select>
                <option style={{color: '#000'}} value="English">English</option>
                <option style={{color: '#000'}} value="Português">Português</option>
            </Select>
    )
}

export default SelecionarIdioma