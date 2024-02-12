import styled from "styled-components"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Div = styled.div`
    display: flex;
    gap: 10px;
    position: initial;
`

interface PropsSetasSessao {
    nomeSessao: string
}

const SetasSessao = ({ nomeSessao }: PropsSetasSessao) => {
    return (
        <Div>
            <ArrowCircleLeftIcon
                style={{ position: 'initial', fill: 'initial' }}
                className={`swiper-button-prev ${nomeSessao}`}
                fontSize="large"
                sx={{ cursor: 'pointer' }}
            />
            <ArrowCircleRightIcon
                style={{ position: 'initial', fill: 'initial' }}
                className={`swiper-button-next ${nomeSessao}`}
                fontSize="large"
                sx={{ cursor: 'pointer' }}
            />
        </Div>
    )
}

export default SetasSessao