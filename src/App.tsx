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

const ContainerApp = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #FFF;
`

const SessaoCategoriasECarrosel = styled.section`
  display: flex;
`

function App() {

  return (
    <ContainerApp>
      <GlobalStyles />
      <Header>
        <CabecalhoTopo />
        <CabecalhoPrincipal />
        <Divider />
      </Header>
      <Main>
        <SessaoCategoriasECarrosel>
          <Categorias />
          <Divider orientation='vertical' flexItem/>
          <CarroselPrincipal />
        </SessaoCategoriasECarrosel>
      </Main>
    </ContainerApp>
  )
}

export default App
