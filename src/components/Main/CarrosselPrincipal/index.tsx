import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImagemCarrossel from './ImagemCarrossel';

function CarrosselPrincipal() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel style={{width: '892px', margin: '40px 0 0 40px'}} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
            <ImagemCarrossel imagem='/images/carrossel-imagem-1.svg'/>
            </Carousel.Item>
            <Carousel.Item>
            <ImagemCarrossel imagem='/images/carrossel-imagem-2.png'/>
            </Carousel.Item>
            <Carousel.Item>
            <ImagemCarrossel imagem='/images/carrossel-imagem-3.jpg'/>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarrosselPrincipal;