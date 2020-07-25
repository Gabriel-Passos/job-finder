import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Content, Form } from './style';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Login from '../../components/Login';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

const RegisterCompany: React.FC = () => {
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
          <Login />
          <div />
          <Form onSubmit={handleCompany}>
            <h1>Cadastro</h1>
            <p>
              Registre sua empresa para poder divulgar suas vagas de emprego.
            </p>
            <Input
              placeholder="Nome"
              value={name}
              onChange={event => setName(event.target.value)}
            >
              Nome
            </Input>
            <Input
              placeholder="CNPJ"
              value={cnpj}
              onChange={event => setCNPJ(event.target.value)}
            >
              CNPJ
            </Input>
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={event => setEmail(event.target.value)}
            >
              E-mail
            </Input>
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={event => setPassword(event.target.value)}
            >
              Senha
            </Input>
            <Select
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
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default RegisterCompany;
