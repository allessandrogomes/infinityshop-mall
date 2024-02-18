import BtnVerTodosProdutos from "../../shared/Buttons/BtnVerTodosProdutos"
import SetasSessao from "../../shared/Buttons/SetasSessao"
import Cabecalho from "../../shared/Containers/ContainerCabecalhoSessao"
import TituloESubtituloSessao from "../../shared/Containers/ContainerCabecalhoSessao/TituloESubtituloSessao"
import CardProduto from "../../shared/Containers/ContainerProdutosSessao/CardProduto"
import Sessao from "../../shared/Containers/ContainerSessao"

import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import swiperSlideCss from '../shared/swiperSlideCss'

SwiperCore.use([Navigation, Autoplay, Pagination])

const SessaoOurProducts = () => {
    return (
        <Sessao>
            <Cabecalho>
                <TituloESubtituloSessao titulo="Our Products" subtitulo="Explore Our Products" />
                <SetasSessao nomeSessao="our-products" />
            </Cabecalho>
            <Swiper
                navigation={{
                    nextEl: '.swiper-button-next.our-products',
                    prevEl: '.swiper-button-prev.our-products'
                }}
                spaceBetween={10}
                pagination={{ clickable: true, dynamicBullets: true }}
                style={{ paddingBottom: '40px', width: '100%' }}
                breakpoints={{
                    320: { slidesPerView: 1, },
                    730: { slidesPerView: 2 },
                    1090: { slidesPerView: 3 },
                    1440: { slidesPerView: 4 },
                    2560: { slidesPerView: 5 }
                }}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide style={swiperSlideCss}>
                    <CardProduto
                        imagem="/images/produtos/racao-de-cachorro.svg"
                        nome="Breed Dry Dog Food"
                        preco={100}
                        avaliacao={3}
                        quantidadeAvaliacoes={35}
                    />
                </SwiperSlide>
                <SwiperSlide style={swiperSlideCss}>
                    <CardProduto
                        imagem="/images/produtos/camera-profissional.svg"
                        nome="CANON EOS DSLR Camera"
                        preco={360}
                        avaliacao={4}
                        quantidadeAvaliacoes={95}
                    />
                </SwiperSlide>
                <SwiperSlide style={swiperSlideCss}>
                    <CardProduto
                        imagem="/images/produtos/notebook.svg"
                        nome="ASUS FHD Gaming Laptop"
                        preco={700}
                        avaliacao={5}
                        quantidadeAvaliacoes={325}
                    />
                </SwiperSlide>
                <SwiperSlide style={swiperSlideCss}>
                    <CardProduto
                        imagem="/images/produtos/creme-para-pele.svg"
                        nome="Curology Product Set"
                        preco={500}
                        avaliacao={4}
                        quantidadeAvaliacoes={145}
                    />
                </SwiperSlide>
                <SwiperSlide style={swiperSlideCss}>
                    <CardProduto
                        imagem="/images/produtos/carro-de-crianca.svg"
                        nome="Kids Electric Car"
                        preco={960}
                        avaliacao={5}
                        quantidadeAvaliacoes={65}
                        produtoNovo={true}
                    />
                </SwiperSlide>
                <SwiperSlide style={swiperSlideCss}>
                    <CardProduto
                        imagem="/images/produtos/chuteira.svg"
                        nome="Jr. Zoom Soccer Cleats"
                        preco={1160}
                        avaliacao={5}
                        quantidadeAvaliacoes={35}
                    />
                </SwiperSlide>
                <SwiperSlide style={swiperSlideCss}>
                    <CardProduto
                        imagem="/images/produtos/controle-videogame-usb.svg"
                        nome="GP11 Shooter USB Gamepad"
                        preco={660}
                        precoAnterior={924}
                        avaliacao={4.5}
                        quantidadeAvaliacoes={55}
                        produtoNovo={true}
                        desconto={40}
                    />
                </SwiperSlide>
                <SwiperSlide style={swiperSlideCss}>
                    <CardProduto
                        imagem="/images/produtos/casaco-verde.svg"
                        nome="Quilted Satin Jacket"
                        preco={660}
                        avaliacao={4.5}
                        quantidadeAvaliacoes={55}
                    />
                </SwiperSlide>
            </Swiper>
            <BtnVerTodosProdutos texto="View All Products" />
        </Sessao>
    )
}

export default SessaoOurProducts