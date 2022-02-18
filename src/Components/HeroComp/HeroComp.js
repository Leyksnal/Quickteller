import React from 'react'
import ButtonComp from '../ButtonComp/ButtonComp'
import styled from 'styled-components'
import dashboard from '../img/dashboard.png'
import wpay from '../img/wpay.png'
import terminal from '../img/terminal.png'

export default function HeroComp() {
  return (
    <Div>
      <Container>
        <Content>
          <Title>All the Tools You Need to Grow Your Business, in One Place.</Title>
          <Sub>Our suite of integrated tools saves you time, so you can focus on growing reveue and delivering exceptional service to your customers</Sub>
          <Action>
            <ButtonComp></ButtonComp>
          </Action>
        </Content>
        <Heroimg></Heroimg>
      </Container>
    </Div>
  )
}


const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 88%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
`;

const Content = styled.div`
  
`;

const Title = styled.h1`
  font-weight: 600;
  width: 500px;
  font-size: 3rem;
`;

const Sub = styled.p`
  width: 500px;
  font-size: 1.2rem;
  font-weight: 500;
`;

const Heroimg = styled.div`
  background-image: url(${dashboard});
  width: 850px;
  height: 600px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  display: block;
  margin-right: -90px;

  :before{
    content: '';
    background-image: url(${wpay});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    height:460px;
    right: 0;
    left: 250px;
    bottom: 0;
    width: auto;
  }

  :after{
    content: '';
    background-image: url(${terminal});
    width: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    height: 510px;
    bottom: 0;
    right: 400px;
  }
`;

const Action = styled.div`
  margin-top: 50px;
`;