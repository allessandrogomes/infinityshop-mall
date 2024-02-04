import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImagemCarrossel from './ImagemCarrossel';
import styled from 'styled-components';

function CarrosselPrincipal() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    };

    const Div = styled.div`
        width: 56%;
        margin-top: 40px;

        @media screen and (max-width: 768px) {
            width: 100%;
        }
    `

    return (
        <Div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <ImagemCarrossel imagem='/images/carrossel-imagem-1.svg' />
                </Carousel.Item>
                <Carousel.Item>
                    <ImagemCarrossel imagem='/images/carrossel-imagem-2.png' />
                </Carousel.Item>
                <Carousel.Item>
                    <ImagemCarrossel imagem='/images/carrossel-imagem-3.jpg' />
                </Carousel.Item>
            </Carousel>
        </Div>
    );
}

export default CarrosselPrincipal;