import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { expLevel, contractsTypes } from '../../utils/select-options';

import logo from '../../assets/logo.png';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import MultipleButtons from '../../components/MultipleButtons';

import { Container, Form, CreateJobsHeader, Content } from './style';

import api from '../../services/api';

const CreateJobs: React.FC = () => {
  const [title, setTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const [curriculumEmail, setCurriculumEmail] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUF] = useState('');

  const [selectedExp, setSelectedExp] = useState<number[]>([]);
  const [selectedContracts, setSelectedContracts] = useState<number[]>([]);

  const history = useHistory();

  function handleSelectedExp(id: number): void {
    const alreadySelected = selectedExp.findIndex(exp => exp === id);

    if (alreadySelected >= 0) {
      const filteredExps = selectedExp.filter(exp => exp !== id);

      setSelectedExp(filteredExps);
    } else {
      setSelectedExp([...selectedExp, id]);
    }
  }

  function handleSelectedContracts(id: number): void {
    const alreadySelected = selectedContracts.findIndex(exp => exp === id);

    if (alreadySelected >= 0) {
      const filteredContracts = selectedContracts.filter(exp => exp !== id);

      setSelectedContracts(filteredContracts);
    } else {
      setSelectedContracts([...selectedContracts, id]);
    }
  }

  async function handleSubmit(event: FormEvent): Promise<void> {
    event.preventDefault();

    const expTypes = selectedExp;
    const contractTypes = selectedContracts;

    const data = {
      title,
      salary,
      description,
      curriculumEmail,
      contactEmail,
      city,
      uf,
      expTypes,
      contractTypes,
    };

    console.log(data);

    await api.post('/jobs', data);

    history.goBack();
  }

  function handleBack(): void {
    history.goBack();
  }

  return (
    <>
      <Container>
        <Content>
          <CreateJobsHeader>
            <img src={logo} alt="Job Finder" />

            <h1>Publicar nova vaga</h1>
            <p>
              Informe todos os dados e encontre um profissional qualificado.
            </p>

            <button type="button" onClick={handleBack}>
              <FiChevronLeft size={20} /> Voltar
            </button>
          </CreateJobsHeader>
          <Form onSubmit={handleSubmit}>
            <aside>
              <Input
                type="text"
                label="Título da vaga"
                value={title}
                onChange={event => setTitle(event.target.value)}
              />

              <Input
                type="text"
                label="Salário"
                value={salary}
                onChange={event => setSalary(event.target.value)}
              />

              <Textarea
                name="description"
                label="Descrição da vaga"
                value={description}
                onChange={event => setDescription(event.target.value)}
              />
            </aside>
            <aside>
              <div className="multi-buttons">
                <p>Nível de experiência</p>
                <div className="buttons">
                  {expLevel.map(exp => (
                    <MultipleButtons
                      key={exp.id}
                      title={exp.label}
                      value={exp.value}
                      onClick={() => handleSelectedExp(exp.id)}
                      className={selectedExp.includes(exp.id) ? 'selected' : ''}
                    />
                  ))}
                </div>
              </div>

              <div className="multi-buttons">
                <p>Tipo de contratação</p>
                <div className="buttons">
                  {contractsTypes.map(contract => (
                    <MultipleButtons
                      key={contract.id}
                      title={contract.label}
                      value={contract.value}
                      onClick={() => handleSelectedContracts(contract.id)}
                      className={
                        selectedContracts.includes(contract.id)
                          ? 'selected'
                          : ''
                      }
                    />
                  ))}
                </div>
              </div>

              <Input
                type="email"
                label="E-mail"
                placeholder="Para envio do currículo"
                value={curriculumEmail}
                onChange={event => setCurriculumEmail(event.target.value)}
              />

              <Input
                type="email"
                label="E-mail"
                placeholder="Para contato"
                value={contactEmail}
                onChange={event => setContactEmail(event.target.value)}
              />

              <div className="city-uf">
                <Input
                  type="text"
                  label="Cidade"
                  value={city}
                  onChange={event => setCity(event.target.value)}
                />
                <Input
                  className="uf"
                  type="text"
                  label="UF"
                  value={uf}
                  onChange={event => setUF(event.target.value)}
                />
              </div>
              <span>Local onde o candidato irá atuar *</span>

              <Button type="submit">Publicar vaga</Button>
            </aside>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default CreateJobs;
