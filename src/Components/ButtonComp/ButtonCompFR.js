import React from 'react'
import styled from 'styled-components'


export default function ButtonCompFR() {
  return (
    <Button>Sign Up For free</Button>
  )
}

const Button = styled.button`
    width: 200px;
    height: 60px;
    background-color: #009FE4;
    border: none;
    outline: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: all 500ms;
    font-weight: 600;
    font-size: 1rem;


    :hover{
      color:  #009FE4;
      background: transparent;
      border: solid 2px #009FE4;
    }
`;