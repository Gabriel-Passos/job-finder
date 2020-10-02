import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, ...rest }) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <textarea {...rest} id={label} />
    </Container>
  );
};

export default Textarea;
