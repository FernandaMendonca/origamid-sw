import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
 width: 100%;
 display: flex;
justify-content: center;
align-items: center;
`

const Field = styled.input`
    border: 1px solid #222;
    border-radius: 1.2rem;
    display: block;
    font-size: 1rem;
    padding: 0.8rem;
    transition: 0.2s;
    width: 100%;

`

const Error = styled.span`
    color: #f31;
    font-size: 0.875rem;
    margin-top: 0.25rem;
`

const Input = ({ label, type, name, value, onChange, onBlur, error }) => {
  return <Box >
    <Field id={name} name={name} type={type}
      value={value}
      placeholder={label}
      onChange={onChange}
      onBlur={onBlur} />
    {error && <Error>{error}</Error>}
  </Box>
}

export default Input;