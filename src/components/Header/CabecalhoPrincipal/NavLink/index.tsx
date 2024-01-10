import styled from "styled-components"

const Link = styled.a`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 400;
    color: #000;
    text-decoration: none;
`

interface NavLinkProps {
    itemLink: string
}

const NavLink = ({itemLink}: NavLinkProps) => {
    return (
        <Link href="#">{itemLink}</Link>
    )
}

export default NavLink