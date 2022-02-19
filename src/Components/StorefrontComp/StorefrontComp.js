import React from 'react'
import styled from 'styled-components'
import drop from '../img/bdrop.svg'
import store from '../img/storefront.png'


export default function StorefrontComp() {
  return (
    <Div>
        <Container>
            <Left>With Storefront You Now Have Everything You Need to Sell Online with ease</Left>
            <Right>
                <Info>Set up a fully-hosted online store in just minutes. The online store was designed with you in mind, meaning you don't need to hire any web designers or programmers to get started.</Info>
                <Link>Let’s get you started</Link>
            </Right>
        </Container>
        <Store>
            <Dot></Dot>
        </Store>
    </Div>
  )
}


const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    flex-direction: column;
    background-color: #F5FBFE;
`;

const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.h1`
    color: #003C58;
    font-size: 2.8rem;
    width: 600px;
    font-weight: 400;
`;

const Right = styled.div``;

const Info = styled.p`
    width: 500px;
    font-size: 1.3rem;
    font-weight: 400;
    width: 580px;
    line-height: 2.5rem;
`;

const Link = styled.p`
    font-size: 1.3rem;
    color: #0071BA;
    text-decoration: underline;
    cursor: pointer;
`;

const Store = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 90%;
    align-items: center;
    position: relative;

    :after{
        content: '';
        width: 100%;
        background-image: url(${store});
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        position: absolute;
        height: 1000px;
        top: 50px;

    }
`;

const Dot = styled.div`
    width: 300px;
    height: 400px;
    background-image: url(${drop});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 30px;
`;