import React from 'react';
import { FiChevronRight, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Form, Content, Jobs, Filter } from './style';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <h1>Job Finder</h1>
      <Form>
        <div>
          <FiSearch size={25} />
        </div>
        <select name="dev-skills">
          <option value="front-end">Front End</option>
          <option value="back-end">Back End</option>
          <option value="dev-ops">Dev Ops</option>
        </select>
      </Form>
      <Content>
        <Filter>
          <div>
            <h2>Tipo de contrato</h2>
            <button type="button">CLT</button>
            <button type="button">PJ</button>
            <button type="button">Estágio</button>
          </div>
          <div>
            <h2>Nível de experiência</h2>
            <button type="button">Júnior</button>
            <button type="button">Pleno</button>
            <button type="button">Sênior</button>
          </div>
          <div>
            <h2>Tamanho da empresa</h2>
            <button type="button">Startup</button>
            <button type="button">Pequena ou Média empresa</button>
            <button type="button">Grande empresa</button>
            <button type="button">Multinacional</button>
          </div>
        </Filter>
        <Jobs>
          <hr />
          <Link to="/">
            <strong>Nome da empresa</strong>
            <p>Título da vaga</p>
            <FiChevronRight size={20} />
          </Link>
          <hr />
          <Link to="/">
            <strong>Nome da empresa</strong>
            <p>Título da vaga</p>
            <FiChevronRight size={20} />
          </Link>
          <hr />
          <Link to="/">
            <strong>Nome da empresa</strong>
            <p>Título da vaga</p>
            <FiChevronRight size={20} />
          </Link>
          <hr />
          <Link to="/">
            <strong>Nome da empresa</strong>
            <p>Título da vaga</p>
            <FiChevronRight size={20} />
          </Link>
          <hr />
          <Link to="/">
            <strong>Nome da empresa</strong>
            <p>Título da vaga</p>
            <FiChevronRight size={20} />
          </Link>
          <hr />
          <Link to="/">
            <strong>Nome da empresa</strong>
            <p>Título da vaga</p>
            <FiChevronRight size={20} />
          </Link>
          <hr />
          <Link to="/">
            <strong>Nome da empresa</strong>
            <p>Título da vaga</p>
            <FiChevronRight size={20} />
          </Link>
          <hr />
          <Link to="/">
            <strong>Nome da empresa</strong>
            <p>Título da vaga</p>
            <FiChevronRight size={20} />
          </Link>
          <hr />
          <Link to="/">
            <strong>Nome da empresa</strong>
            <p>Título da vaga</p>
            <FiChevronRight size={20} />
          </Link>
          <hr />
          <Link to="/">
            <strong>Nome da empresa</strong>
            <p>Título da vaga</p>
            <FiChevronRight size={20} />
          </Link>
          <hr />
          <Link to="/">
            <strong>Nome da empresa</strong>
            <p>Título da vaga</p>
            <FiChevronRight size={20} />
          </Link>
          <hr />
          <Link to="/">
            <strong>Nome da empresa</strong>
            <p>Título da vaga</p>
            <FiChevronRight size={20} />
          </Link>
        </Jobs>
      </Content>
    </Container>
  );
};

export default Dashboard;
