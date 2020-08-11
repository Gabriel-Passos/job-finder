import React, { useState, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Container, Content, Form } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
        <Content>
          <Form onSubmit={handleCompany}>
            <h1>Login</h1>
            <p>Faça seu login e divulgue as melhores vagas.</p>
            <Input
              label="E-mail"
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <Input
              label="Senha"
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />

            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/signup">Ainda não se cadastrou?</Link>
        </Content>
        <Footer />
      </Container>
    </>
  );
};

export default SignIn;
