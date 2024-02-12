import Sessao from "../../shared/Containers/ContainerSessao";
import Cabecalho from "../../shared/Containers/ContainerCabecalhoSessao";
import TituloESubtituloSessao from "../../shared/Containers/ContainerCabecalhoSessao/TituloESubtituloSessao";
import CardCategoria from "./CardCategoria"
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import { Divider } from "@mui/material"
import SetasSessao from "../../shared/Buttons/SetasSessao";

import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import swiperSlideCss from '../shared/swiperSlideCss'

SwiperCore.use([Navigation, Autoplay, Pagination]);

const SessaoCategories = () => {
    return (
        <Sessao>
            <Cabecalho>
                <TituloESubtituloSessao titulo="Categories" subtitulo="Browse By Category" />
                <SetasSessao nomeSessao="categories" />
            </Cabecalho>
            <Swiper
                navigation={{
                    nextEl: '.swiper-button-next.categories',
                    prevEl: '.swiper-button-prev.categories',
                }}
                spaceBetween={10}
                pagination={{ clickable: true, dynamicBullets: true }}
                style={{ paddingBottom: '40px', width: '100%' }}
                breakpoints={{
                    320: { slidesPerView: 1, },
                    500: { slidesPerView: 2 },
                    730: { slidesPerView: 3 },
                    1090: { slidesPerView: 4 },
                    1440: { slidesPerView: 5 },
                    2560: { slidesPerView: 6 }
                }}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide style={swiperSlideCss}>
                    <CardCategoria
                        imagem={<PhoneIphoneIcon style={{ width: '100%', height: '100%' }} />}
                        texto="Phones"
                    />
                </SwiperSlide>
                <SwiperSlide style={swiperSlideCss}>
                    <CardCategoria
                        imagem={<DesktopWindowsOutlinedIcon style={{ width: '100%', height: '100%' }} />}
                        texto="Computers"
                    />
                </SwiperSlide>
                <SwiperSlide style={swiperSlideCss}>
                    <CardCategoria
                        imagem={<WatchOutlinedIcon style={{ width: '100%', height: '100%' }} />}
                        texto="SmartWatch"
                    />
                </SwiperSlide>
                <SwiperSlide style={swiperSlideCss}>
                    <CardCategoria
                        imagem={<CameraAltOutlinedIcon style={{ width: '100%', height: '100%' }} />}
                        texto="Camera"
                    />
                </SwiperSlide>
                <SwiperSlide style={swiperSlideCss}>
                    <CardCategoria
                        imagem={<HeadphonesOutlinedIcon style={{ width: '100%', height: '100%' }} />}
                        texto="HeadPhones"
                    />
                </SwiperSlide>
                <SwiperSlide style={swiperSlideCss}>
                    <CardCategoria
                        imagem={<SportsEsportsOutlinedIcon style={{ width: '100%', height: '100%' }} />}
                        texto="Gaming"
                    />
                </SwiperSlide>
            </Swiper>
            <Divider sx={{ backgroundColor: '#000', opacity: '0.15', marginTop: '50px' }} />
        </Sessao>
    )
}

export default SessaoCategories