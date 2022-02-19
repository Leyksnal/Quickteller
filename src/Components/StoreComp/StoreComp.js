import React from 'react'
import styled from 'styled-components'
import cart from '../img/cart.svg'
import built from '../img/col3.svg'
import ease from '../img/col2.svg'

export default function StoreComp() {
  return (
    <Div>
        <Colomnhold>
            <Col>
                <Image></Image>
                <Heading>Start Selling Online</Heading>
                <Sub>Easily sell online and ship orders to customers, offer in-shop pickup, or local delivery—no matter what type of business you have.</Sub>
            </Col>
            <Col>
                <Image1></Image1>
                <Heading>Ease Of Delivery</Heading>
                <Sub>We give you the flexibility of handling your own package delivery as well as provide the option to intergate with our dedicated logistics partners</Sub>
            </Col>
            <Col>
                <Image2></Image2>
                <Heading>Built-In Payment Solutions</Heading>
                <Sub1>As with all of our tools, payments are central to the experience. Even with online payments, you benefit from our lower rates and fast deposits.</Sub1>
            </Col>
        </Colomnhold>
    </Div>
  )
}

const Div = styled.div`
    margin-top: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Colomnhold = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
`;

const Col = styled.div`
    
`;

const Image = styled.div`
    background-image: url(${cart});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px
`;

const Image1 = styled.div`
    background-image: url(${ease});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px
`;

const Image2 = styled.div`
    background-image: url(${built});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px
`;

const Heading = styled.h2`
    color: black;
    font-size: 1.6rem;
    font-weight: 500;
    margin-top: 40px;
`;

const Sub = styled.p`
    width: 400px;
    font-size: 1.3rem;
    line-height: 2.4rem;
    margin-top: 40px;
`;

const Sub1 = styled.p`
    width: 430px;
    font-size: 1.3rem;
    line-height: 2.4rem;
    margin-top: 40px;
`;