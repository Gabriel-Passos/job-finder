import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input {...rest} id={label} />
    </Container>
  );
};

export default Input;
