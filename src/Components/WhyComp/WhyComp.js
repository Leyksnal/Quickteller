import React from 'react'
import styled from 'styled-components'
import pic from '../img/integration.png'
import mark from '../img/mark.svg'

export default function WhyComp() {
  return (
    <Div>
        <Upcontainer>
            <Title>why use quickteller business</Title>
            <Heading>We Use a Technology-First Approachn to Payments and Finance</Heading>
        </Upcontainer>
        <Container>
            <Content>
                <Title2>multiple payment channels</Title2>
                <Bigtitle>Get Paid Securely, How and When You Want</Bigtitle>
                <Info>As with all of our tools, payments are central to the experience. Even with online payments, you benefit from our lower rates and fast deposits. Quickteller business seamlessly integrates with your existing website or store and we provide various payment options.</Info>
                <Listwrapper>
                    <Listholder>
                        <List>Cards</List>
                        <List>QR</List>
                    </Listholder>
                    <Listholder>
                        <List>USSD</List>
                        <List>Paycode</List>
                    </Listholder>
                    <Listholder>
                        <List>Bank Transfer</List>
                        <List>Mobile Money</List>
                    </Listholder>
                </Listwrapper>
            </Content>
            <Display></Display>
        </Container>
    </Div>
  )
}

const Div = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #F5FBFE;
`;

const Upcontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.p`
    color: #0071BA;
    text-transform: uppercase;
`;

const Title2 = styled.p`
    color: #82B3E9;
    text-transform: uppercase;
    position: relative;
    display: flex;
    align-items: center;

    :before{
        position: relative;
        content: '';
        width: 14px;
        height: 14px;
        background-color: #0071BA;
        margin-right: 20px;
    }
`;

const Heading = styled.h1`
    color: #0071BA;
    font-size: 3rem;
    width: 900px;
    text-align: center;
    font-weight: 400;
`;

const Container = styled.div`
    width: 88%;
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
`;

const Content = styled.div`

`;

const Bigtitle = styled.h1`
    color: #003C58;
    font-size: 3rem;
    width: 600px;
    font-weight: 400;
`;

const Info = styled.p`
    font-size: 1.3rem;
    font-weight: 400;
    width: 580px;
    line-height: 2.5rem;
`;

const Listwrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 550px;
`;

const Listholder = styled.div`
    margin-top: 30px;
`;

const List = styled.p`
    font-size: 1.3rem;
    position: relative;
    display: flex;
    align-items: center;

    :before{
        position: relative;
        content: '';
        width: 14px;
        height: 14px;
        background-image: url(${mark});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 20px;
    }
`;

const Display = styled.div`
    background-image: url(${pic});
    width: 800px;
    height: 700px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;