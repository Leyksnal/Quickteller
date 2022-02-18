import React from 'react'
import styled from 'styled-components'


export default function ButtonCompTp() {
  return (
    <Button>Sign Up</Button>
  )
}

const Button = styled.button`
    width: 150px;
    height: 50px;
    background: transprent;
    border: solid 2px #009FE4;
    outline: none;
    color: #009FE4;
    font-size 1.2rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 500ms;

    :hover{
      background-color: #E22F28;
      color: white;
      border: none;
      outline: none;
    }
`;