import React from 'react'
import styled from 'styled-components'
import pos from '../img/pos.png'
import qrcode from '../img/qr.svg'
import cash from '../img/cash.svg'
import transfer from '../img/transfer.svg'
import card from '../img/card.svg'
import ussd from '../img/ussd.svg'


export default function TerminalComp() {
  return (
    <Div>
        <Container>
            <Content>
                <Title2>point of sale terminal</Title2>
                <Bigtitle>One Card Reader for
All Your Payment Needs</Bigtitle>
                <Info>Introducing the one device for all your payment needs.
Whether you're accepting payments at your countertop
checkout or looking to accept payments on-the-go, the
lightweight and easy to transport Card Reader connects to an
array of devices and offers your business the flexibility to accept
any type of payment, wherever you are.</Info>
                <Sub>Payment modules available</Sub>
                <Listwrapper>
                    <Listholder1>
                        <List></List>
                        <Text>qr code</Text>
                    </Listholder1>
                    <Listholder>
                        <List1></List1>
                        <Text3>cash</Text3>
                    </Listholder>
                    <Listholder>
                        <List2></List2>
                        <Text2>ussd</Text2>
                    </Listholder>
                    <Listholder>
                        <List3></List3>
                        <Text3>cards</Text3>
                    </Listholder>
                    <Listholder>
                        <List4></List4>
                        <Text>transfer</Text>
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

const Container = styled.div`
    width: 88%;
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
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

const Content = styled.div`

`;

const Bigtitle = styled.h1`
    color: #003C58;
    font-size: 3rem;
    width: 600px;
    font-weight: 400;
`;

const Info = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    width: 564px;
    line-height: 2.2rem;
`;

const Listwrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 550px;
`;

const Listholder1 = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Listholder = styled.div`
    margin-top: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Text = styled.p`
    font-size: 1rem;
    text-transform: uppercase;
    margin-top: -20px;
`;

const Text2 = styled.p`
    font-size: 1rem;
    text-transform: uppercase;
    margin-top: -40px;
`;

const Text3 = styled.p`
    font-size: 1rem;
    text-transform: uppercase;
    margin-top: -30px;
`;

const List = styled.p`
    font-size: 1.3rem;
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 10px;

    :before{
        position: relative;
        content: '';
        width: 45px;
        height: 45px;
        background-image: url(${qrcode});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 20px;
    }
`;

const List1 = styled.p`
    font-size: 1.3rem;
    position: relative;
    display: flex;
    align-items: center;

    :before{
        position: relative;
        content: '';
        width: 70px;
        height: 70px;
        background-image: url(${cash});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
`;

const List2 = styled.p`
    font-size: 1.3rem;
    position: relative;
    display: flex;
    align-items: center;

    :before{
        position: relative;
        content: '';
        width: 80px;
        height: 80px;
        background-image: url(${ussd});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
`;

const List3 = styled.p`
    font-size: 1.3rem;
    position: relative;
    display: flex;
    align-items: center;

    :before{
        position: relative;
        content: '';
        width: 70px;
        height: 70px;
        background-image: url(${card});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
`;

const List4 = styled.p`
    font-size: 1.3rem;
    position: relative;
    display: flex;
    align-items: center;

    :before{
        position: relative;
        content: '';
        width: 60px;
        height: 60px;
        background-image: url(${transfer});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
`;

const Display = styled.div`
    background-image: url(${pos});
    width: 800px;
    height: 700px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;

const Sub = styled.p`
    margin-top: 40px;
    font-size: 1.1rem;
`;