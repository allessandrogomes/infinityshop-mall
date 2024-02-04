import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css/free-mode';
import styled from "styled-components";
import IconeCategoria from "./IconeCategoria";

const Div = styled.div`
    width: 95vw;
    margin-top: 25px;

    @media screen and (min-width: 769px) {
        display: none;
    }
`

const CategoriasMobile = () => {
    return (
        <Div>
            <Swiper
                freeMode={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    320: {
                        slidesPerView: 3
                    },

                    400: {
                        slidesPerView: 4
                    },

                    500: {
                        slidesPerView: 5
                    },

                    600: {
                        slidesPerView: 6
                    },

                    700: {
                        slidesPerView: 8
                    }
                }}
            >
                <SwiperSlide>
                    <IconeCategoria imagem="/images/categories/smartphone.png" nomeCategoria="Smartphones"/>
                </SwiperSlide>

                <SwiperSlide>
                    <IconeCategoria imagem="/images/categories/laptop.png" nomeCategoria="Laptops"/>
                </SwiperSlide>

                <SwiperSlide>
                    <IconeCategoria imagem="/images/categories/fragance.png" nomeCategoria="Fragances"/>
                </SwiperSlide>

                <SwiperSlide>
                    <IconeCategoria imagem="/images/categories/skincare.png" nomeCategoria="Skincares"/>
                </SwiperSlide>

                <SwiperSlide>
                    <IconeCategoria imagem="/images/categories/groceries.png" nomeCategoria="Groceries"/>
                </SwiperSlide>

                <SwiperSlide>
                    <IconeCategoria imagem="/images/categories/home-decoration.png" nomeCategoria="Decorations"/>
                </SwiperSlide>

                <SwiperSlide>
                    <IconeCategoria imagem="/images/categories/furniture.png" nomeCategoria="Furnitures"/>
                </SwiperSlide>

                <SwiperSlide>
                    <IconeCategoria imagem="/images/categories/top.png" nomeCategoria="Tops"/>
                </SwiperSlide>

                <SwiperSlide>
                    <IconeCategoria imagem="/images/categories/woman-dress.png" nomeCategoria="Woman Dress"/>
                </SwiperSlide>

                <SwiperSlide>
                    <IconeCategoria imagem="/images/categories/mens.png" nomeCategoria="Mens"/>
                </SwiperSlide>

                <SwiperSlide>
                    <IconeCategoria imagem="/images/categories/sunglass.png" nomeCategoria="Sunglasses"/>
                </SwiperSlide>

                <SwiperSlide>
                    <IconeCategoria imagem="/images/categories/automotive.png" nomeCategoria="Automotive"/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <IconeCategoria imagem="/images/categories/motorcycle.png" nomeCategoria="Motorcycle"/>
                </SwiperSlide>

                <SwiperSlide>
                    <IconeCategoria imagem="/images/categories/lighting.png" nomeCategoria="Lighting"/>
                </SwiperSlide>
            </Swiper>
        </Div>
    )
}

export default CategoriasMobile