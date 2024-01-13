import { ReactElement } from "react"
import styled from "styled-components"

const Imagem = styled.div`
    width: 56px;
    height: 56px;
`

const Texto = styled.span`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 400;
    color: #000;
`

const Card = styled.div`
    width: 170px;
    height: 145px;
    background-color: #FFF;
    border: 1px solid rgba(0, 0, 0, 0.30);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    cursor: pointer;

    &:hover {
        background-color: #DB4444;
        transition: background-color 0.3s ease;
    }

    &:hover ${Texto} {
        color: #FAFAFA;
    }

    &:hover ${Imagem} {
        color: #FAFAFA;
    }
`

interface CardCategoriaProps {
    imagem: ReactElement
    texto: string
}

const CardCategoria = ({ imagem, texto }: CardCategoriaProps) => {
    return (
        <Card>
            <Imagem>{imagem}</Imagem>
            <Texto>{texto}</Texto>
        </Card>
    )
}

export default CardCategoria