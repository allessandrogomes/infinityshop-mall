import styled from "styled-components"

const Item = styled.a`
    color: #000;
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;

    &:hover {
        color: #DB4444;
    }
`

interface ItemCategoriaProps {
    categoria: string
}

const ItemCategoria = ({categoria}: ItemCategoriaProps) => {
    return (
        <Item href="#">{categoria}</Item>
    )
}

export default ItemCategoria