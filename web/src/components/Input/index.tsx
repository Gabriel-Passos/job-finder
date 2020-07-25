import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ children, ...rest }) => {
  return (
    <Container>
      <label>{children}</label>
      <input {...rest} />
    </Container>
  );
};

export default Input;
