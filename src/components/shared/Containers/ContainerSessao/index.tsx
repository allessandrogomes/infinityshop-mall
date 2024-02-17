import styled from "styled-components";


const Sessao = styled.section`
    display: flex;
    flex-direction: column;
    width: 80vw;
    gap: 40px;
    position: relative;

    @media screen and (max-width: 768px) {
        width: 100vw;
        padding: 0 20px;
    }
`

export default Sessao