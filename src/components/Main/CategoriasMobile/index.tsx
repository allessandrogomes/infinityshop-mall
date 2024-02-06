import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css/free-mode';
import styled from "styled-components";
import IconeCategoria from "./IconeCategoria";
import CategoriasProdutos from '../../../../public/data/categorias-produtos.json'

const Div = styled.div`
    width: 95vw;
    margin-top: 25px;

    @media screen and (min-width: 769px) {
        display: none;
    }
`

interface CategoriaProduto {
    nome: string
    imagem: string
}

const categorias: CategoriaProduto[] = CategoriasProdutos

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
                {categorias.map((categoria, index) => (
                    <SwiperSlide key={index}>
                        <IconeCategoria imagem={categoria.imagem} nomeCategoria={categoria.nome} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Div>
    )
}

export default CategoriasMobile