import styled from "styled-components"
import ItemCategoria from "./ItemCategoria"
import CategoriasProdutos from '../../../../public/data/categorias-produtos.json'

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

interface CategoriaProduto {
    nome: string
}

const categorias: CategoriaProduto[] = CategoriasProdutos

const Categorias = () => {
    return (
        <Container>
            {categorias.map((categoria, index) => (
                <ItemCategoria categoria={categoria.nome} key={index}/>
            ))}
        </Container>
    )
}

export default Categorias