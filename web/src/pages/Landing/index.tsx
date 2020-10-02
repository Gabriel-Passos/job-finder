import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.png';

import { Container, Background, Content } from './style';
import Button from '../../components/Button';

const Landing: React.FC = () => {
  const history = useHistory();

  async function handleListTODO(): Promise<void> {
    history.push('/dashboard');
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="Job Finder" />
        <p>Seu melhor jornal para vagas de emprego na área de tecnologia.</p>
        <div>
          <Button type="button" onClick={handleListTODO}>
            Ver vagas
          </Button>
          <Link to="/signin">
            Divulgar vaga
            <FiLogIn size={20} />
          </Link>
        </div>
      </Content>
      <Background />
    </Container>
  );
};

export default Landing;
