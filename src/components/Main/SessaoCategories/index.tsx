import Sessao from "../../shared/Containers/ContainerSessao";
import Cabecalho from "../../shared/Containers/ContainerCabecalhoSessao";
import TituloESubtituloSessao from "../../shared/Containers/ContainerCabecalhoSessao/TituloESubtituloSessao";
import Categorias from "../../shared/Containers/ContainerProdutosSessao";
import CardCategoria from "./CardCategoria"
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import { Divider } from "@mui/material"
import SetasSessao from "../../shared/Buttons/SetasSessao";


const SessaoCategories = () => {
    return (
        <Sessao>
            <Cabecalho>
                <TituloESubtituloSessao titulo="Categories" subtitulo="Browse By Category" />
                <SetasSessao />
            </Cabecalho>
            <Categorias>
                <CardCategoria
                    imagem={<PhoneIphoneIcon style={{ width: '100%', height: '100%' }} />}
                    texto="Phones"
                />
                <CardCategoria
                    imagem={<DesktopWindowsOutlinedIcon style={{ width: '100%', height: '100%' }} />}
                    texto="Computers"
                />
                <CardCategoria
                    imagem={<WatchOutlinedIcon style={{ width: '100%', height: '100%' }} />}
                    texto="SmartWatch"
                />
                <CardCategoria
                    imagem={<CameraAltOutlinedIcon style={{ width: '100%', height: '100%' }} />}
                    texto="Camera"
                />
                <CardCategoria
                    imagem={<HeadphonesOutlinedIcon style={{ width: '100%', height: '100%' }} />}
                    texto="HeadPhones"
                />
                <CardCategoria
                    imagem={<SportsEsportsOutlinedIcon style={{ width: '100%', height: '100%' }} />}
                    texto="Gaming"
                />
            </Categorias>
            <Divider sx={{ backgroundColor: '#000', opacity: '0.15', marginTop: '50px' }} />
        </Sessao>
    )
}

export default SessaoCategories