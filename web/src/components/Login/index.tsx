import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { Container } from './styles';

import Input from '../Input';
import Button from '../Button';

const Login: React.FC = () => {
  return (
    <Container onSubmit={() => {}}>
      <Link to="/">
        <img src={logo} alt="Job-Finder" />
      </Link>

      <div>
        <h1>Já possuí uma conta?</h1>

        <p>Faça seu logon.</p>
      </div>

      <div>
        <Input type="email" placeholder="E-mail">
          E-mail
        </Input>
        <Input type="password" placeholder="Senha">
          Senha
        </Input>
        <Button type="submit">Entrar</Button>
      </div>
    </Container>
  );
};

export default Login;
