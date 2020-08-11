import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <NavLink to="/">
          <img src={logo} alt="Job Finder" />
        </NavLink>

        <div>
          <NavLink exact to="/dashboard" activeClassName="active">
            Ver vagas
          </NavLink>
          {/* <NavLink exact to="/dashboard" activeClassName="active">
            Sou candidato
          </NavLink> */}
          <NavLink exact to="/signup" activeClassName="active">
            Sou empresa
          </NavLink>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
