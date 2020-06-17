import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

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
        <h1>APP TODO</h1>
        <p>Liste suas tarefas de maneira clara e objetiva.</p>
        <div>
          <Button type="button" onClick={handleListTODO}>
            Ver lista de TODO
          </Button>
          <Link to="/register">
            Cadastrar usuário
            <FiLogIn size={20} />
          </Link>
        </div>
      </Content>
      <Background />
    </Container>
  );
};

export default Home;
