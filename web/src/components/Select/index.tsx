import React, {SelectHTMLAttributes} from 'react';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  title?: string;
}

const Select: React.FC<SelectProps> = ({ title, children, ...rest}) => {
  return(
    <Container>
      <label>{title}</label>
      <select {...rest}>{children}</select>
    </Container>
  );
}

export default Select;
