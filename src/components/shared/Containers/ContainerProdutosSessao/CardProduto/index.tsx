import styled from "styled-components"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Rating } from "@mui/material";

const BotaoAdicionarAoCarrinho = styled.button`
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0px 0px 4px 4px;
    background-color: #000;
    color: #FFF;
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.3s ease, height 0.3s ease;
`

const Card = styled.div`
    width: 270px;
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    :hover {
        ${BotaoAdicionarAoCarrinho} {
            opacity: 1;
        }
    }
`

const BlocoImagem = styled.div`
    height: 250px;
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const DivImagem = styled.div`
    width: 60%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 10px;
`

const DivDesconto = styled.div`
    width: 55px;
    height: 26px;
    background-color: #DB4444;
    border-radius: 4px;
    position: relative;
    top: 10px;
    right: 95px;
    text-align: center;

    span {
        font-family: 'Poppins';
        font-size: 0.75rem;
        font-weight: 400;
        color: #FAFAFA;
    }
`

const DivIcone = styled.div`
    background-color: #FFFFFF;
    width: 34px;
    height: 34px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 100px;
    cursor: pointer;
`

const BlocoDetalhes = styled.div`
    height: 84px;
`

const NomeProduto = styled.span`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 500;
`

const DivPrecos = styled.div`
    display: flex;
    gap: 12px;
`

const Preco = styled.span`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 500;
    color: #DB4444;
`

const PrecoAnterior = styled.span`
   font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 500;
    color: #000; 
    opacity: 0.5;
    text-decoration: line-through;
`

const DivAvaliacao = styled.div`
    display: flex;
    gap: 8px;
    cursor: pointer;
`

const QuantidadeDeAvaliacoes = styled.span`
    font-family: 'Poppins';
    font-size: 0.875rem;
    font-weight: 600;
    color: #000;
    opacity: 0.5;
`

const DivBotaoAdicionarAoCarrinho = styled.div`
    width: 100%;
    height: 40px;
`

interface CardProdutoProps {
    desconto?: number
    imagem: string
    nome: string
    preco: number
    precoAnterior?: number
    avaliacao: number
    quantidadeAvaliacoes: number
}

const CardProduto = ({ desconto = 0, imagem, nome, preco, precoAnterior = 0, avaliacao, quantidadeAvaliacoes }: CardProdutoProps) => {
    return (
        <Card>
            <BlocoImagem>
                {desconto !== 0 ? <DivDesconto><span>-{desconto}%</span></DivDesconto> : ''}
                <DivIcone style={{ bottom: '15px' }}><FavoriteBorderIcon sx={{ color: '#000' }} /></DivIcone>
                <DivIcone><VisibilityOutlinedIcon sx={{ color: '#000' }} /></DivIcone>
                <DivImagem>
                    <img src={imagem} />
                </DivImagem>
                <DivBotaoAdicionarAoCarrinho>
                    <BotaoAdicionarAoCarrinho>Add To Cart</BotaoAdicionarAoCarrinho>
                </DivBotaoAdicionarAoCarrinho>
            </BlocoImagem>
            <BlocoDetalhes>
                <NomeProduto>{nome}</NomeProduto>
                <DivPrecos>
                    <Preco>${preco}</Preco>
                    {precoAnterior !== 0 ? <PrecoAnterior>${precoAnterior}</PrecoAnterior> : ''}
                </DivPrecos>
                <DivAvaliacao>
                    <Rating name="read-only" value={avaliacao} precision={0.5} readOnly />
                    <QuantidadeDeAvaliacoes>({quantidadeAvaliacoes})</QuantidadeDeAvaliacoes>
                </DivAvaliacao>
            </BlocoDetalhes>
        </Card>
    )
}

export default CardProduto