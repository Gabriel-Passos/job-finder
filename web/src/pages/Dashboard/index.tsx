import React, { useState, useEffect } from 'react';
import { FiSearch, FiDollarSign, FiMapPin } from 'react-icons/fi';
import { FaBuilding, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import {
  Container,
  Form,
  Content,
  Jobs,
  Filter,
  JobDetails,
  Techs,
} from './style';

import api from '../../services/api';

interface Job {
  id: number;
  title: string;
  name: string;
  experienceLevel: string;
  contract: string;
  salary: string;
  location: string;
  companySize: string;
}

const Dashboard: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    api.get('/job-details').then(response => {
      setJobs(response.data);
    });
  }, []);

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
          {jobs.map(job => (
            <div key={job.id}>
              <hr />
              <Link to="/job-details">
                <div>
                  <strong>{job.name}</strong>
                  <h2>{job.title}</h2>
                  <div />
                </div>
                <JobDetails>
                  <p>
                    <FaBuilding size={20} />
                    {job.companySize}
                  </p>
                  <p>
                    <FiDollarSign size={20} />
                    R${job.salary}
                  </p>
                  <p>
                    <FaChartBar size={20} />
                    {job.experienceLevel}
                  </p>
                  <p>
                    <FiMapPin size={20} />
                    {job.location}
                  </p>
                </JobDetails>
                <Techs>
                  <p>JavaScript</p>
                  <p>NodeJS</p>
                  <p>ReactJs</p>
                  <p>React Native</p>
                </Techs>
              </Link>
            </div>
          ))}
        </Jobs>
      </Content>
    </Container>
  );
};

export default Dashboard;
