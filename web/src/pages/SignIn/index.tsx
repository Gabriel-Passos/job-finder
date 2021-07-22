import React, { useState, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleCompany(event: FormEvent): Promise<void> {
    event.preventDefault();

    try {
      history.push('/company');
    } catch (err) {
      alert(`${err}`);
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleCompany}>
          <img src={logo} alt="Job Finder" />

          <h1>Bem-vindo ao Job Finder</h1>

          <p>Faça seu logon e divulgue as melhores vagas.</p>

          <Input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <Link to="/" className="forgot-password">
            Esqueceu a senha?
          </Link>

          <Button type="submit">Entrar</Button>

          <Link to="/signup" className="link-signup">
            Ainda não se cadastrou?
          </Link>
        </Form>
      </Container>
    </>
  );
};

export default SignIn;
