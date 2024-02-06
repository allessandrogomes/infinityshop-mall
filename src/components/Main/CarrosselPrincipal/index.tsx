import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImagemCarrossel from './ImagemCarrossel';
import styled from 'styled-components';

const Div = styled.div`
        width: 56%;
        height: 500px;
        margin-top: 40px;

        @media screen and (max-width: 768px) {
            width: 100%;
            height: 344px;
        }
    `

function CarrosselPrincipal() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    };

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