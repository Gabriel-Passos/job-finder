import React, { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container, Header, Form } from './style';

import api from '../../services/api';

const Company: React.FC = () => {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  const history = useHistory();

  function handleBack(): void {
    history.goBack();
  }

  return (
    <Container>
      <Header>
        <button type="button" onClick={handleBack}>
          <FiChevronLeft size={20} />
        </button>
        <h1>Job Finder</h1>
        <div />
      </Header>
      <hr />
      <h2>Para criar uma vaga informe os seguintes dados.</h2>
      <Form>
        <input
          type="text"
          placeholder="Título da vaga"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <textarea
          name="description"
          placeholder="Descrição da vaga"
          id=""
          cols={30}
          rows={10}
        />
        <select name="experience-level">
          <option value="jr">Júnior</option>
          <option value="pl">Pleno</option>
          <option value="sn">Sênior</option>
        </select>
        <select name="contract">
          <option value="clt">CLT</option>
          <option value="pj">PJ</option>
        </select>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <span>Para contato *</span>
        <select name="techs">
          <input
            type="text"
            placeholder="Informe as tecnologias requisitadas"
          />
        </select>
        <select name="salary">
          <option value="combinar">À combinar</option>
          <input type="text" placeholder="Informe o salário" />
        </select>
        <input
          type="text"
          placeholder="Cidade / UF"
          value={location}
          onChange={event => setLocation(event.target.value)}
        />
        <span>Local onde o candidato irá atuar *</span>
      </Form>
    </Container>
  );
};

export default Company;
