/* eslint-disable @typescript-eslint/ban-types */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FiMail, FiChevronLeft } from 'react-icons/fi';

import {
  Container,
  Content,
  Details,
  Description,
  Requirements,
  Contact,
  HeaderDetails,
} from './style';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import api from '../../services/api';

interface JobProps {
  id: number;

  title: string;
  description: string;
  experienceLevel: string;
  contract: string;
  salary: string;
  email: string;
  techs: [];

  name: string;
  companySize: string;
  location: string;
}

const JobDetails: React.FC = () => {
  const [jobInfo, setJobInfo] = useState<JobProps[]>([]);
  const history = useHistory();

  function handleBack(): void {
    history.goBack();
  }

  useEffect(() => {
    const id = localStorage.getItem('@Job-Finder:JobID');

    api.get(`job-details/${id}`).then(response => setJobInfo(response.data));
  }, []);

  return (
    <>
      <Header />
      <Container>
        {jobInfo.map(job => (
          <div key={job.id}>
            <HeaderDetails>
              <button type="button" onClick={handleBack}>
                <FiChevronLeft size={20} />
              </button>
              <h1>{job.name}</h1>
              <div />
            </HeaderDetails>
            <hr />
            <h2>{job.title}</h2>
            <Content>
              <Details>
                <div>
                  <strong>Tamanho da empresa:</strong>
                  <p>{job.companySize}</p>
                </div>
                <div>
                  <strong>Localidade:</strong>
                  <p>{job.location}</p>
                </div>
              </Details>
              <Description>
                <h3>Descrição da vaga</h3>
                <p>{job.description}</p>
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
                  <span>{job.experienceLevel}</span>
                  <strong>Salário:</strong>
                  <span>{job.salary}</span>
                </section>
              </Requirements>
              <Contact>
                <h3>Enviar currículo para:</h3>
                <div>
                  <Button type="button">
                    <FiMail size={20} /> {job.email}
                  </Button>
                  <Button type="button">
                    <FiMail size={20} /> {job.email}
                  </Button>
                </div>
              </Contact>
            </Content>
          </div>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default JobDetails;
