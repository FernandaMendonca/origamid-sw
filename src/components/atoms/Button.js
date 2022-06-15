import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.button`
    background: #FFE300;
    border: none;
    border-radius: 1.2rem;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    width: 10rem;
    padding: 0.5rem;
    transition: all 0.3s ease;
    &:hover, &:focus {
    background: #FBE31FA1;
    }
    &:disabled {
    cursor: wait;
    opacity: 0.5;
    }
`

const Button = ({ children, ...props }) => {
  return <ButtonBox {...props}>
    {children}
  </ButtonBox>
}

export default Button;