import styled from "styled-components"


const ContainerIconeCategoria = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    img {
        width: 70%;
        height: 70%;
        object-fit: contain;
    }

    span {
        color: #000;
        font-family: 'Poppins';
        font-size: 0.75rem;
    }
`

const BaseIconeCategoria = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 100%;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
`

interface PropsIconeCategoria {
    imagem: string
    nomeCategoria: string
}

const IconeCategoria = ({imagem, nomeCategoria}: PropsIconeCategoria) => {
    return (
        <ContainerIconeCategoria>
            <BaseIconeCategoria><img src={imagem} alt={`Categoria ${nomeCategoria}`} /></BaseIconeCategoria>
            <span>{nomeCategoria}</span>
        </ContainerIconeCategoria>
    )
}

export default IconeCategoria