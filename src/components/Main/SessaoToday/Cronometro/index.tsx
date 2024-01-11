import styled from "styled-components"

const Container = styled.div`

    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    right: 20%;

    div {
        display: flex;
        flex-direction: column;
    }
`

const TipoNumero = styled.span`
    font-family: 'Poppins';
    font-size: 0.75rem;
    font-weight: 500;
    color: #000;
`

const Numero = styled.span`
    font-family: Inter;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.28px;
    color: #000;
`

const DoisPontos = styled.span`
    color: #E07575;
    font-size: 2rem;
`

const Cronometro = () => {
    return (
        <Container>
            <div>
                <TipoNumero>Days</TipoNumero>
                <Numero>03</Numero>
            </div>
            <DoisPontos>:</DoisPontos>
            <div>
                <TipoNumero>Hours</TipoNumero>
                <Numero>23</Numero>
            </div>
            <DoisPontos>:</DoisPontos>
            <div>
                <TipoNumero>Minutes</TipoNumero>
                <Numero>19</Numero>
            </div>
            <DoisPontos>:</DoisPontos>
            <div>
                <TipoNumero>Seconds</TipoNumero>
                <Numero>56</Numero>
            </div>
        </Container>
    )
}

export default Cronometro