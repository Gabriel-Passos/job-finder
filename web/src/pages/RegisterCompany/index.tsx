import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Form } from './style';
import Button from '../../components/Button';

import api from '../../services/api';

const RegisterCompany: React.FC = () => {
  const [name, setName] = useState('');
  const [cnpj, setCNPJ] = useState('');
  const [numberPhone, setNumberPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUF] = useState('');

  const history = useHistory();

  async function handleCompany(event: FormEvent): Promise<void> {
    event.preventDefault();

    try {
      await api.post('/companies', {
        name,
        cnpj,
        numberPhone,
        email,
        password,
        city,
        uf,
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
          type="text"
          placeholder="Número de Telefone"
          value={numberPhone}
          onChange={event => setNumberPhone(event.target.value)}
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
        <div>
          <input
            type="text"
            placeholder="Cidade"
            value={city}
            onChange={event => setCity(event.target.value)}
          />
          <input
            type="text"
            placeholder="UF"
            value={uf}
            onChange={event => setUF(event.target.value)}
          />
        </div>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default RegisterCompany;
