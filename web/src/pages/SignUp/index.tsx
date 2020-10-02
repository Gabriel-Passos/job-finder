import React, { useState, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Container, Content, Form } from './style';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

const SignUp: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [companySize, setCompanySize] = useState('');

  const history = useHistory();

  async function handleCompany(event: FormEvent): Promise<void> {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords are not the same.');

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

        alert('Registered successfully!');

        history.push('/signin');
      } catch (err) {
        alert(`${err}`);
      }
    }
  }
  return (
    <Container>
      <Content>
        <Form onSubmit={handleCompany}>
          <h1>Cadastro</h1>
          <p>Registre sua empresa para poder divulgar suas vagas de emprego.</p>
          <Input
            label="Nome da empresa"
            value={companyName}
            onChange={event => setCompanyName(event.target.value)}
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
            <option value="0" selected disabled hidden>
              Selecione o tipo
            </option>
            <option value="startup">Startup</option>
            <option value="grande-empresa">Grande empresa</option>
            <option value="multinacional">Multinacional</option>
          </Select>
          <Button type="submit">Cadastrar</Button>
        </Form>
        <Link to="/signin">Já possuí uma conta?</Link>
      </Content>
    </Container>
  );
};

export default SignUp;
