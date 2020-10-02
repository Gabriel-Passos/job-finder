import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

const Select: React.FC<SelectProps> = ({ label, children, ...rest }) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <select {...rest} id={label}>
        {children}
      </select>
    </Container>
  );
};

export default Select;
