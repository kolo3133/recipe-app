import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import breakpoint from './breakpoints.js';

import React from 'react'

const Category = () => {
  return (
    <List>
        <SLink to={'/categories/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/categories/American"}>
            <FaHamburger />
            <h4>American</h4>
        </SLink >
        <SLink to={"/categories/Thai"}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={"/categories/Asian"}>
            <GiChopsticks />
            <h4>Asian</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 1.2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
   

    h4 {
        color: white;
        font-size: 0.7rem;
    }
    svg {
        color: white;
        font-size: 0.3rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }
        h4 {
            color: white;
        }
    }

    @media only screen and ${breakpoint.device.sm} {
        width: 6rem;
        height: 6rem;
        svg {
            font-size: 1.5rem;
        }
        h4 {
            font-size: 0.8rem;
        }
    }

    @media only screen and ${breakpoint.device.xs} {
        width: 4rem;
        height: 4rem;
        svg {
            font-size: 1rem;
        }
    }


`

export default Category