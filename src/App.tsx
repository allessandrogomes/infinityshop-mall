import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'normalize.css'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyles from './EstilosGlobais';
import Header from './components/Header';
import CabecalhoTopo from './components/Header/CabecalhoTopo';
import CabecalhoPrincipal from './components/Header/CabecalhoPrincipal';
import { Divider } from '@mui/material';
import Main from './components/Main';
import Categorias from './components/Main/Categorias';
import CarroselPrincipal from './components/Main/CarrosselPrincipal';
import SessaoToday from './components/Main/SessaoToday';
import SessaoCategories from './components/Main/SessaoCategories';
import SessaoThisMonth from './components/Main/SessaoThisMonth';
import BannerDestaque from './components/Main/BannerDestaque';
import SessaoOurProducts from './components/Main/SessaoOurProducts';
import SessaoFeatured from './components/Main/SessaoFeatured';
import SessaoVantagens from './components/Main/SessaoVantagens';
import Footer from './components/Footer';
import Subscribe from './components/Footer/Subscribe';
import Support from './components/Footer/Support';
import Account from './components/Footer/Account';
import QuickLink from './components/Footer/QuickLink';
import DownloadApp from './components/Footer/DownloadApp';
import ContainerItems from './components/Footer/ContainerItems';
import CategoriasMobile from './components/Main/CategoriasMobile';
import 'swiper/css';
import 'swiper/css/bundle';

const ContainerApp = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFF;
`

const SessaoCategoriasECarrosel = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`


function App() {

  return (
    <ContainerApp>
      <GlobalStyles />
      <Header>
        <CabecalhoTopo />
        <CabecalhoPrincipal />
        <Divider sx={{ backgroundColor: '#000', opacity: '0.15' }} />
      </Header>
      <Main>
        <SessaoCategoriasECarrosel>
          <Categorias />
          <CategoriasMobile />
          <Divider sx={{ backgroundColor: '#000', opacity: '0.15', marginRight: '50px' }} orientation='vertical' flexItem />
          <CarroselPrincipal />
        </SessaoCategoriasECarrosel>
        <SessaoToday />
        <SessaoCategories />
        {/* <SessaoThisMonth />
        <BannerDestaque nomeProduto='JBL' descricaoProduto='Enhance Your Music Experience' imagemProduto='/images/produtos/jbl.svg' />
        <SessaoOurProducts />
        <SessaoFeatured />
        <SessaoVantagens /> */}
      </Main>
      {/* <Footer>
        <ContainerItems>
          <Subscribe />
          <Support />
          <Account />
          <QuickLink />
          <DownloadApp />
        </ContainerItems>
      </Footer> */}
    </ContainerApp>
  )
}

export default App
