import styled from "styled-components"

const Btn = styled.button`
    width: 234px;
    height: 56px;
    background-color: #DB4444;
    border-radius: 4px;
    color: #FAFAFA;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Poppins';
    border: none;
    margin: 50px auto 0 auto;
`

interface BtnVerTodosProdutosProps {
    style?: any
    texto: string
}


const BtnVerTodosProdutos = ({style, texto}: BtnVerTodosProdutosProps) => {
    return (
        <Btn style={style}>{texto}</Btn>
    )
}

export default BtnVerTodosProdutos