import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { Container, Content } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <NavLink to="/">
          <img src={logo} alt="Job Finder" />
        </NavLink>
      </Content>
    </Container>
  );
};

export default Footer;
