import React from 'react'
import styled from 'styled-components'


export default function ButtonComp() {
  return (
    <Button>Get Started</Button>
  )
}

const Button = styled.button`
    width: 180px;
    height: 50px;
    background-color: #009FE4;
    border: none;
    outline: none;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    transition: all 500ms;
    font-weight: 600;
    font-size: 1.2rem;


    :hover{
      color:  #009FE4;
      background: transparent;
      border: solid 2px #009FE4;
    }
`;