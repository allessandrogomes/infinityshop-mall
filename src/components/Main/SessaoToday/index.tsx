import Sessao from "../../shared/Containers/ContainerSessao"
import Cabecalho from "../../shared/Containers/ContainerCabecalhoSessao"
import TituloESubtituloSessao from "../../shared/Containers/ContainerCabecalhoSessao/TituloESubtituloSessao"
import Cronometro from "./Cronometro"
import Produtos from "../../shared/Containers/ContainerProdutosSessao"
import CardProduto from "../../shared/Containers/ContainerProdutosSessao/CardProduto"
import { Divider } from "@mui/material"
import SetasSessao from "../../shared/Buttons/SetasSessao"
import BtnVerTodosProdutos from "../../shared/Buttons/BtnVerTodosProdutos"

import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

SwiperCore.use([Navigation, Autoplay]);

const SessaoToday = () => {
    return (
        <Sessao>
            <Cabecalho>
                <TituloESubtituloSessao titulo="Today" subtitulo="Flash Sales" />
                {/* <Cronometro /> */}
                <SetasSessao />
            </Cabecalho>
            <Produtos>
                <Swiper
                    navigation={{
                        nextEl: '.swiper-button-next.flash-sales',
                        prevEl: '.swiper-button-prev.flash-sales',
                    }}
                    spaceBetween={10}
                    
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        730: {slidesPerView: 2},
                        1090: {slidesPerView: 3},
                        1440: {
                            slidesPerView: 4
                        }
                    }}
                    slidesPerView={4}
                    autoplay={{ delay: 3000 }}
                >
                    <SwiperSlide>
                        <CardProduto
                            desconto={40}
                            imagem="/images/produtos/controle-video-game.svg"
                            nome="HAVIT HV-G92 Gamepad"
                            preco={120}
                            precoAnterior={160}
                            avaliacao={5}
                            quantidadeAvaliacoes={88}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProduto
                            desconto={35}
                            imagem="/images/produtos/teclado-gamer.svg"
                            nome="AK-900 Wired Keyboard"
                            preco={960}
                            precoAnterior={1160}
                            avaliacao={4}
                            quantidadeAvaliacoes={76}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProduto
                            desconto={30}
                            imagem="/images/produtos/monitor-gamer.svg"
                            nome="IPS LCD Gaming Monitor"
                            preco={370}
                            precoAnterior={400}
                            avaliacao={5}
                            quantidadeAvaliacoes={99}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProduto
                            desconto={40}
                            imagem="/images/produtos/poltrona.svg"
                            nome="S-Series Comfort Chair "
                            preco={375}
                            precoAnterior={400}
                            avaliacao={4.5}
                            quantidadeAvaliacoes={99}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProduto
                            desconto={35}
                            imagem="/images/produtos/teclado-gamer.svg"
                            nome="AK-900 Wired Keyboard"
                            preco={960}
                            precoAnterior={1160}
                            avaliacao={4}
                            quantidadeAvaliacoes={76}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProduto
                            desconto={40}
                            imagem="/images/produtos/controle-video-game.svg"
                            nome="HAVIT HV-G92 Gamepad"
                            preco={120}
                            precoAnterior={160}
                            avaliacao={5}
                            quantidadeAvaliacoes={88}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProduto
                            desconto={30}
                            imagem="/images/produtos/monitor-gamer.svg"
                            nome="IPS LCD Gaming Monitor"
                            preco={370}
                            precoAnterior={400}
                            avaliacao={5}
                            quantidadeAvaliacoes={99}
                        />
                    </SwiperSlide>
                </Swiper>
            </Produtos>
            <BtnVerTodosProdutos texto="View All Products" />
            <Divider sx={{ backgroundColor: '#000', opacity: '0.15', marginTop: '50px' }} />
        </Sessao>
    )
}

export default SessaoToday