import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {TbToolsKitchen} from 'react-icons/tb'

const Header = () => {
  return (
    <Nav>
        
            <Logo to={'/'}>
            <TbToolsKitchen></TbToolsKitchen>
            <h1>GrapeRecipes</h1>
            </Logo>
        
    </Nav>
  )
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    display: flex;
    color: black;

`
const Nav = styled.div`
    padding: 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg {
        font-size: 2rem;
        
    }
`

export default Header