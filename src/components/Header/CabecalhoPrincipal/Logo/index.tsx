import styled from "styled-components"

const LogoLink = styled.a`
    text-decoration: none;

    h1 {
        font-family: 'Inter';
        font-size: 1.5rem;
        color: #000;
        font-weight: 700;
        margin: 0;
    }
`

const Logo = () => {
    return (
        <LogoLink target="_blank" href="#"><h1>InifnityShop Mall</h1></LogoLink>
    )
}

export default Logo

