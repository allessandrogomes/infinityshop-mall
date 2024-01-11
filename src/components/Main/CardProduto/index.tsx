import styled from "styled-components"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Rating } from "@mui/material";

const Card = styled.div`
    width: 270px;
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const BlocoImagem = styled.div`
    height: 270px;
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        max-width: 80%;
        position: relative;
        bottom: 40px;
    }
`

const DivDesconto = styled.div`
    width: 55px;
    height: 26px;
    background-color: #DB4444;
    border-radius: 4px;
    position: relative;
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

const PrecoAtual = styled.span`
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
`

const QuantidadeDeAvaliacoes = styled.span`
    font-family: 'Poppins';
    font-size: 0.875rem;
    font-weight: 600;
    color: #000;
    opacity: 0.5;
`

interface CardProdutoProps {
    desconto: number
    imagem: string
    nome: string
    precoAtual: number
    precoAnterior: number
    avaliacao: number
    quantidadeAvaliacoes: number
}

const CardProduto = ({desconto, imagem, nome, precoAtual, precoAnterior, avaliacao, quantidadeAvaliacoes}: CardProdutoProps) => {
    return (
        <Card>
            <BlocoImagem>
                <DivDesconto><span>-{desconto}%</span></DivDesconto>
                <DivIcone style={{ bottom: '25px' }}><FavoriteBorderIcon sx={{ color: '#000' }} /></DivIcone>
                <DivIcone style={{ bottom: '10px' }}><VisibilityOutlinedIcon sx={{ color: '#000' }} /></DivIcone>
                <img src={imagem} />
            </BlocoImagem>
            <BlocoDetalhes>
                <NomeProduto>{nome}</NomeProduto>
                <DivPrecos>
                    <PrecoAtual>${precoAtual}</PrecoAtual>
                    <PrecoAnterior>${precoAnterior}</PrecoAnterior>
                </DivPrecos>
                <DivAvaliacao>
                    <Rating name="read-only" value={avaliacao} readOnly />
                    <QuantidadeDeAvaliacoes>({quantidadeAvaliacoes})</QuantidadeDeAvaliacoes>
                </DivAvaliacao>
            </BlocoDetalhes>
        </Card>
    )
}

export default CardProduto