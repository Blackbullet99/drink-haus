import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.section`
position: absolute;
z-index: 1;
width: 100%;
`

export const NavigationContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 6rem;
`

export const Nav = styled.div`
display: flex;
gap: 3rem;
text-transform: uppercase;
font-size: 0.8rem;
`

export const NavLink = styled(Link)`
position: relative;
text-decoration: none;
color: #000;
cursor: pointer;

h1{
    font-family: 'Alice', serif;
    font-size: 2.7rem;
    font-weight: 400;
    letter-spacing: -0.2rem;
}

h2{
    font-size: 1rem;
    letter-spacing: 0.1rem;
   
    &:after {
        content: '';
        position: absolute;
        background-color: #000;
        height: 3px;
        width: 0;
        left: 0;
        right: 0;
        bottom: -0.1rem;
        transition: 0.25s;
    }
    
    &:hover:after {
        width: 50%;

        &:active{
            background-color: aliceblue;
        }
    }
}

`