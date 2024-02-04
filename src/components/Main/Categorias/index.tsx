import styled from "styled-components"
import ItemCategoria from "./ItemCategoria"

const Container = styled.div`
    margin-top: 40px;
    width: 217px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const categorias: string[] = [
    "Smartphones",
    "Laptops",
    "Fragrances",
    "Skincare",
    "Groceries",
    "Home Decoration",
    "Furniture",
    "Tops",
    "Womens",
    "Mens",
    "Sunglasses",
    "Automotive",
    "Motorcycle",
    "Lighting"
]

const Categorias = () => {
    return (
        <Container>
            {categorias.map(categoria => {
                return <ItemCategoria categoria={categoria} key={categoria}/>
            })}
        </Container>
    )
}

export default Categorias