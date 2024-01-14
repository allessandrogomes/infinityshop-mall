import styled from "styled-components"

interface ImagemCarrosselProps {
    imagem: string
}

const Div = styled.div`
    width: 100%;
    height: 344px;
    background-color: '#000';
`

const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const ImagemCarrossel = ({ imagem }: ImagemCarrosselProps) => {
    return (
        <Div><Imagem src={imagem}/></Div>
    )
}

export default ImagemCarrossel