import React from "react";
import styled from "styled-components";
import invoice from "../img/invoice.png";
import mark from "../img/mark.svg";
import success from "../img/success.png";

export default function InstantComp() {
  return (
    <Div>
      <Container>
        <Display></Display>
        <Content>
          <Title2>instant payments</Title2>
          <Bigtitle>Built to Save Time and Get You Paid Faster</Bigtitle>
          <Info>
            Send professional invoices, track them in real time, and accept
            payments online—all from one place. Save time with auto-billing,
            stored information, and powerful reporting tools. Customers can pay
            in one click. They can pay an online invoice through their computer,
            in person, or right through their phone.
          </Info>
          <Listwrapper>
            <Listholder>
              <List>Payment links</List>
            </Listholder>
            <Listholder>
              <List>Invoices</List>
            </Listholder>
            <Listholder>
              <List>Subscriptions</List>
            </Listholder>
          </Listwrapper>
        </Content>
      </Container>
    </Div>
  );
}

const Div = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title2 = styled.p`
  color: #82b3e9;
  text-transform: uppercase;
  position: relative;
  display: flex;
  align-items: center;

  :before {
    position: relative;
    content: "";
    width: 14px;
    height: 14px;
    background-color: #0071ba;
    margin-right: 20px;
  }
`;

const Container = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    width: 95%;
`;

const Content = styled.div`
  margin-right: 90px;
`;

const Bigtitle = styled.h1`
  color: #003C58;
  font-size: 2.8rem;
  width: 500px;
  font-weight: 400;
`;

const Info = styled.p`
  width: 500px;
  font-size: 1.3rem;
  font-weight: 400;
  width: 600px;
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

  :before {
    position: relative;
    content: "";
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
  background-image: url(${invoice});
  width: 600px;
  height: 700px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;

  :after {
    position: absolute;
    content: "";
    width: 400px;
    height: 500px;
    background-image: url(${success});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: -180px;
  }
`;
