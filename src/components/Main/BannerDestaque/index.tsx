import styled from "styled-components"

const Sessao = styled.section`
    display: flex;
    flex-direction: column;
    width: 80vw;
    gap: 40px;
    position: relative;

    @media screen and (max-width: 768px) {
        width: 100vw;
    }
`

const Banner = styled.div`
    background-color: #000;
    width: 100%;
    font-family: 'Poppins';
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 10px;
    padding: 50px;

    @media screen and (max-width: 768px) {
        padding: 20px;
        flex-direction: column;
    }
`

const DivInformacoes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`

const Titulo = styled.span`
    color: #0F6;
    font-size: 2rem;
    font-weight: 600;
    width: max-content;
`

const Subtitulo = styled.span`
    font-family: 'Inter';
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: 1.92px;
    color: #FAFAFA;
`

const DivContagem = styled.div`
    display: flex;
    gap: 24px;
    width: max-content;

    @media screen and (max-width: 768px) {
        
    }
`

const ItemContagem = styled.div`
    width: 62px;
    height: 62px;
    background-color: #FFF;
    border-radius: 100%;
    color: #000;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 57px;
        height: 57px;
        font-size: 0.75rem;
    }
`

const TextoItemContagem = styled.span`
    font-size: 0.688rem;
    font-weight: 400;
`

const BotaoComprar = styled.button`
    background-color: #0F6;
    border-radius: 4px;
    border: none;
    padding: 16px 48px;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    color: #FAFAFA;
    font-size: 1rem;
    font-weight: 500;
    width: 171px;
`

const DivImagem = styled.div`
    position: relative;
    width: 50%;
    height: 330px;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const ImagemProdutoMobile = styled.img`
    width: 150px;
    height: 150px;
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }
`

export const EfeitoFundoImagem = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 504px;
    opacity: 0.3;
    background: #D9D9D9;
    filter: blur(100px);
    position: absolute;
`

interface BannerDestaqueProps {
    nomeProduto: string
    descricaoProduto: string
    imagemProduto: string
}

const BannerDestaque = ({ nomeProduto, descricaoProduto, imagemProduto }: BannerDestaqueProps) => {
    return (
        <Sessao>
            <Banner>
                <DivInformacoes>
                    <Titulo>{nomeProduto}</Titulo>
                    <ImagemProdutoMobile src={imagemProduto} />
                    <Subtitulo>{descricaoProduto}</Subtitulo>
                    <DivContagem>
                        <ItemContagem>
                            <span>23</span>
                            <TextoItemContagem>Days</TextoItemContagem>
                        </ItemContagem>
                        <ItemContagem>
                            <span>20</span>
                            <TextoItemContagem>Hours</TextoItemContagem>
                        </ItemContagem>
                        <ItemContagem>
                            <span>11</span>
                            <TextoItemContagem>Minutes</TextoItemContagem>
                        </ItemContagem>
                        <ItemContagem>
                            <span>32</span>
                            <TextoItemContagem>Seconds</TextoItemContagem>
                        </ItemContagem>
                    </DivContagem>
                    <BotaoComprar>Buy Now!</BotaoComprar>
                </DivInformacoes>
                <DivImagem>
                    <EfeitoFundoImagem />
                    <img src={imagemProduto} />
                </DivImagem>
            </Banner>
        </Sessao>
    )
}

export default BannerDestaque