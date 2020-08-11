import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.png';

import { Container, Background, Content } from './style';
import Button from '../../components/Button';

const Home: React.FC = () => {
  const history = useHistory();

  async function handleListTODO(): Promise<void> {
    history.push('/dashboard');
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="Job Finder" />
        <p>Encontre as melhores vagas para desenvolvedores.</p>
        <div>
          <Button type="button" onClick={handleListTODO}>
            Ver vagas
          </Button>
          <Link to="/signup">
            Divulgar vaga
            <FiLogIn size={20} />
          </Link>
        </div>
      </Content>
      <Background />
    </Container>
  );
};

export default Home;
