import React from 'react';
import { useHistory } from 'react-router-dom';

import { FiMail, FiChevronLeft } from 'react-icons/fi';

import {
  Container,
  Content,
  Details,
  Description,
  Requirements,
  Contact,
  Header,
} from './style';

import Button from '../../components/Button';

const JobDetails: React.FC = () => {
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
      <h2>Título da vaga</h2>
      <Content>
        <Details>
          <div>
            <strong>Empresa:</strong>
            <p>Riot Games</p>
          </div>
          <div>
            <strong>Tamanho da empresa:</strong>
            <p>Multinacional</p>
          </div>
          <div>
            <strong>Localidade:</strong>
            <p>São Paulo / SP</p>
          </div>
        </Details>
        <Description>
          <h3>Descrição da vaga</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            perspiciatis doloremque enim in quae nihil assumenda, fuga odit vero
            animi, eum amet asperiores corrupti dolor ad quam? Rerum, nostrum
            recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officiis, eos. Iure a ad fugit. Eum non voluptate ratione deleniti
            aliquid, iste eos. Totam blanditiis nemo eius quam. Doloribus,
            laboriosam repellat! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Cum perspiciatis doloremque enim in quae nihil
            assumenda, fuga odit vero animi, eum amet asperiores corrupti dolor
            ad quam? Rerum, nostrum recusandae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officiis, eos. Iure a ad fugit. Eum
            non voluptate ratione deleniti aliquid, iste eos. Totam blanditiis
            nemo eius quam. Doloribus, laboriosam repellat! Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Cum perspiciatis doloremque
            enim in quae nihil assumenda, fuga odit vero animi, eum amet
            asperiores corrupti dolor ad quam? Rerum, nostrum recusandae? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Officiis, eos.
            Iure a ad fugit. Eum non voluptate ratione deleniti aliquid, iste
            eos. Totam blanditiis nemo eius quam. Doloribus, laboriosam
            repellat!
          </p>
        </Description>
        <Requirements>
          <h3>Requisitos</h3>
          <div>
            <p>TypeScript</p>
            <p>ReactJS</p>
            <p>React Native</p>
            <p>NodeJS</p>
            <p>TypeScript</p>
            <p>ReactJS</p>
            <p>React Native</p>
            <p>NodeJS</p>
          </div>
          <section>
            <strong>Sênioriodade:</strong>
            <span>Júnior</span>
            <strong>Salário:</strong>
            <span>R$6.000</span>
          </section>
        </Requirements>
        <Contact>
          <h3>Enviar currículo para:</h3>
          <div>
            <Button type="button">
              <FiMail size={20} /> riotgames@riotgames.com
            </Button>
            <Button type="button">
              <FiMail size={20} /> riot@riotgames.com
            </Button>
          </div>
        </Contact>
      </Content>
    </Container>
  );
};

export default JobDetails;
