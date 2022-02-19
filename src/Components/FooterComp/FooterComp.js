import React from 'react'
import ButtonCompFR from '../ButtonComp/ButtonCompFR'
import styled from 'styled-components'

export default function FooterComp() {
  return (
    <Div>
        <Footer>
            <Heading>
                <Head>Interswitch</Head>
                <Text>Company</Text>
                <Text>Jobs</Text>
                <Text>Privacy & Terms</Text>
            </Heading>
            <Heading>
                <Head>Developers</Head>
                <Text>Overview</Text>
                <Text>Documentation</Text>
                <Text>Checkout Demo</Text>
            </Heading>
            <Heading>
                <Head>Pricing</Head>
                <Text>Nigeria</Text>
            </Heading>
            <Heading>
                <Head>Learn</Head>
                <Text>Tech Blog</Text>
                <Text>Video Tutorials</Text>
            </Heading>
        </Footer>
        <Container>
            <Heading>
                <Head>Contact Us</Head>
                <Text>1648C Oko Awo Street, <br /> Victoria Island, Lagos</Text>
                <Text>support@interswitchgroup.com</Text>
            </Heading>
            <ButtonCompFR></ButtonCompFR>
        </Container>
    </Div>
  )
}


const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin: 180px 0px 0px -80px;
`;
const Footer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
`;
const Container = styled.div`
    width: 35%;
    display: flex;
    justify-content: space-between;
    margin: 180px 0px 150px -750px;
`;
const Heading = styled.div``;
const Head = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
`;
const Text = styled.div`
    font-size: 1.2rem;
    line-height: 2.5rem;
`;