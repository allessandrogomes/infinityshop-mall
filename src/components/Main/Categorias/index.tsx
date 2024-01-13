import styled from "styled-components"
import ItemCategoria from "./ItemCategoria"

const Container = styled.div`
    margin-top: 40px;
    width: 217px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const categorias: string[] = [
    'Womans Fashion',
    'Mens Fashion',
    'Electronics',
    'Home & Lifestyle',
    'Medicine',
    'Sports & Outdoor',
    'Babys & Toys',
    'Groceries & Pets',
    'Health & Beauty'
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