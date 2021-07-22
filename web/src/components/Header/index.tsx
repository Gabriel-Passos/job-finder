import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import logo from '../../assets/logo.png';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <NavLink to="/">
        <img src={logo} alt="Job Finder" />
      </NavLink>

      <div className="nav-bar">
        <NavLink exact to="/dashboard" activeClassName="active">
          Ver vagas
        </NavLink>
        {/* <NavLink exact to="/dashboard" activeClassName="active">
            Sou candidato
          </NavLink> */}
        <NavLink exact to="/signin" activeClassName="active">
          Sou empresa
        </NavLink>
      </div>

      <button type="button" className="burger-menu">
        <FiMenu size={30} color="#222222" />
      </button>
    </Container>
  );
};

export default Header;
