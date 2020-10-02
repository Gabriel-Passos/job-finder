import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

import { Container, Header } from './styles';

const Company: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Job Finder" />
        <span>Bem vindo, Rocketseat</span>

        <Link to="/jobs/new">Publicar nova vaga</Link>
        <button type="button">
          <FiPower size={20} color="#0779e4" />
        </button>
      </Header>
      <h1>Vagas publicadas</h1>
      <ul>
        <li>
          <strong>TÍTULO DA VAGA:</strong>
          <p>Desenvolvedor back-end pleno</p>

          <strong>DESCRIÇÃO</strong>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            ducimus maiores harum. Veritatis, nam laborum rerum consequuntur qui
            nobis magnam dignissimos nostrum, maiores doloremque in temporibus
            dolorum sapiente. Non, aut.
          </p>

          <strong>SALÁRIO:</strong>
          <p>
            R$3.200,00
            {/* {Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(incident.value)} */}
          </p>

          <button onClick={() => {}} type="button">
            <FiTrash2 size={20} />
          </button>
        </li>
      </ul>
    </Container>
  );
};

export default Company;
