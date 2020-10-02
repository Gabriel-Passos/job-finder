import React, { useState, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FaGooglePlusG, FaFacebookF } from 'react-icons/fa';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

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
    <Container>
      <Link to="/">
        <img src={logo} alt="Job Finder" />
      </Link>
      <Form onSubmit={handleCompany}>
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
        <div className="external-login">
          <strong>OR</strong>
          <button type="button">
            <FaGooglePlusG size={30} /> Continue with Google
          </button>
          <button type="button">
            <FaFacebookF size={24} /> Continue with Facebook
          </button>
        </div>
      </Form>
      <Link to="/signup" className="link-signup">
        Ainda não se cadastrou?
      </Link>
    </Container>
  );
};

export default SignIn;
