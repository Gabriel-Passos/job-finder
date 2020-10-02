import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface MultipleButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  title: string;
  value: string;
}

const MultipleButtons: React.FC<MultipleButtonsProps> = ({
  label,
  title,
  value,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <div>
        <button type="button" id={value} {...rest}>
          {title}
        </button>
      </div>
    </Container>
  );
};

export default MultipleButtons;
