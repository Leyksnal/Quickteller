import React from 'react'
import styled from 'styled-components'
import ButtonCompCT from '../ButtonComp/ButtonCompCT';
import drop from '../img/bdrop.svg'
import connect from '../img/connect.png'


export default function ContactComp() {
  return (
    <Div>
        <Container>
            <Imagewrapper>
                <Dot></Dot>
            </Imagewrapper>
            <Text>
                <Title>We're Here to <br></br> Help You Get Started.</Title>
                <Sub>Connect with our Sales team for one-on-one assistance with getting started.</Sub>
                <Action>
                    <ButtonCompCT></ButtonCompCT>
                </Action>
                <Info>We’ll call you within one business day, between 9 a.m. and 5 p.m. in your time zone. If we can’t reach you, we’ll send an email with a phone number to call us back.</Info>
            </Text>
        </Container>
    </Div>
  )
}


const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
`;

const Container = styled.div`
    width: 80%;
    display: flex;
    margin-right: 80px;
    justify-content: space-between;

`;

const Imagewrapper = styled.div`
    width: 800px;
    height: 600px;
    display: flex;
    justify-content: end;
    position: relative;

    :after{
        position: absolute;
        content: '';
        width: 100%;
        height: 600px;
        background-image: url(${connect});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        right: 40px;
        top: 55px;
    }
`;

const Text = styled.div`
    margin-top: 150px;
`;
const Action = styled.div`
    margin-top: 50px;
`;
const Info = styled.p`
    font-size: 1.15rem;
    font-weight: 400;
    width: 500px;
    line-height: 2.2rem;
    margin-top: 50px;
`;
const Title = styled.h1`
    color: #003C58;
    font-size: 2.5rem;
    width: 480px;
    font-weight: 500;
`;
const Sub = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    width: 400px;
    line-height: 2.2rem;
    margin-top: 50px;
`;

const Dot = styled.div`
    width: 300px;
    height: 400px;
    background-image: url(${drop});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;