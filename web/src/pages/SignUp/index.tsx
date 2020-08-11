import React, { useState, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Container, Content, Form } from './style';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [cnpj, setCNPJ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companySize, setcompanySize] = useState('');

  const history = useHistory();

  async function handleCompany(event: FormEvent): Promise<void> {
    event.preventDefault();

    const data = {
      name,
      cnpj,
      email,
      password,
      companySize,
    };

    try {
      await api.post('/companies', data);

      history.push('/signup');
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
            <h1>Cadastro</h1>
            <p>
              Registre sua empresa para poder divulgar suas vagas de emprego.
            </p>
            <Input
              label="Nome completo"
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <Input
              label="CNPJ"
              value={cnpj}
              onChange={event => setCNPJ(event.target.value)}
            />
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
            <Select
              label="Tamanho da empresa"
              name="companiSize"
              title="Tamanho da empresa"
              onChange={event => setcompanySize(event.target.value)}
            >
              <option value="startup">Startup</option>
              <option value="grande-empresa">Grande empresa</option>
              <option value="multinacional">Multinacional</option>
            </Select>
            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/signin">Já possuí uma conta?</Link>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;
