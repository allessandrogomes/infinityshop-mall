import styled from "styled-components"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Div = styled.div`
    display: flex;
    gap: 5px;
`

const SetasSessao = () => {
    return (
        <Div>
            <ArrowCircleLeftIcon fontSize="large" sx={{ cursor: 'pointer' }} />
            <ArrowCircleRightIcon fontSize="large" sx={{ cursor: 'pointer' }} />
        </Div>
    )
}

export default SetasSessao