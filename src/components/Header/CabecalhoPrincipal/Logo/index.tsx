import styled from "styled-components"

const LogoLink = styled.a`
    text-decoration: none;

    h1 {
        font-family: 'Inter';
        font-size: 1.5rem;
        font-weight: 700;
        color: #000;
        margin: 0;
    }
`

interface PropsLogo {
    style?: React.CSSProperties
}

const Logo = ({style}: PropsLogo) => {
    return (
        <LogoLink target="_blank" href="#"><h1 style={style}>InifnityShop Mall</h1></LogoLink>
    )
}

export default Logo

