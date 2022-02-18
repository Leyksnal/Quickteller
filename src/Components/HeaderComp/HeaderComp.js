import React from 'react'
import styled from 'styled-components'
import ButtonComp from '../ButtonComp/ButtonComp'
import ButtonCompTp from '../ButtonComp/ButtonCompTp'
import pic from '../img/app-logo.svg'

export default function HeaderComp() {
  return (
      <Main>
        <Container>
            <Logo></Logo>
            <Menu>
                <Nav>Overview</Nav>
                <Nav>Storefront</Nav>
                <Nav>Pricing</Nav>
                <Nav>Developers</Nav>
                <Nav>Checkout</Nav>
            </Menu>
            <Clicks>
                <ButtonCompTp></ButtonCompTp>
                <ButtonComp></ButtonComp>
            </Clicks>
        </Container>
      </Main>
    )
}

const Main = styled.div`
    display: flex;
    justify-content center;
    align-items: center;
`;


const Container = styled.div`
    width: 90%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Logo = styled.div`
    background-image: url(${pic});
    width: 200px;
    height: 60px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`;
const Menu = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-between;
`;
const Nav = styled.p`
    color: black;
    font-size: 1.3rem;
    font-weight: 500;
    cursor: pointer;
`;

const Clicks = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;