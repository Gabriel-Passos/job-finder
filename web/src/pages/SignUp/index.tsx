import React, { useState, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Container, Form } from './style';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

const SignUp: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [cnpj, setCNPJ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [companySize, setCompanySize] = useState('');

  const history = useHistory();

  async function handleCompany(event: FormEvent): Promise<void> {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não são iguais.');

      setCompanyName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setCompanySize('');
    } else {
      const data = {
        companyName,
        email,
        password,
        companySize,
      };

      try {
        await api.post('/companies', data);

        alert('Cadastro realizado com sucesso!');

        history.push('/signin');
      } catch (err) {
        alert(`${err}`);
      }
    }
  }
  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleCompany}>
          <h1>Cadastro</h1>
          <p>Registre sua empresa para poder divulgar suas vagas de emprego.</p>
          <Input
            label="Nome da empresa"
            value={companyName}
            onChange={event => setCompanyName(event.target.value)}
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
          <Input
            label="Confirmar senha"
            type="password"
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}
          />
          <Select
            label="Tamanho da empresa"
            name="companiSize"
            title="Tamanho da empresa"
            onChange={event => setCompanySize(event.target.value)}
          >
            <option defaultValue="0" selected disabled hidden>
              Selecione o tipo
            </option>
            <option value="startup">Startup</option>
            <option value="pequena-empresa">Pequena empresa</option>
            <option value="media-empresa">Média empresa</option>
            <option value="grande-empresa">Grande empresa</option>
            <option value="multinacional">Multinacional</option>
          </Select>
          <Button type="submit">Cadastrar</Button>
          <Link to="/signin">Já possuí uma conta?</Link>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
