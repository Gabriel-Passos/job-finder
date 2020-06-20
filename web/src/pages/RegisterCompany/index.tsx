import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Form } from './style';
import Button from '../../components/Button';

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

    try {
      await api.post('/companies', {
        name,
        cnpj,
        email,
        password,
        companySize,
      });
      history.push('/company');
    } catch (err) {
      alert(`${err}`);
    }
  }
  return (
    <Container>
      <h1>Cadastro</h1>
      <p>Registre sua empresa para poder divulgar suas vagas de emprego.</p>
      <Form onSubmit={handleCompany}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="CNPJ"
          value={cnpj}
          onChange={event => setCNPJ(event.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <select
          name="company-size"
          onChange={event => setcompanySize(event.target.value)}
        >
          <option value="startup">Startup</option>
          <option value="small-medium-company">Pequena ou Média empresa</option>
          <option value="big-company">Grande empresa</option>
          <option value="multinational">Multinacional</option>
        </select>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default RegisterCompany;
