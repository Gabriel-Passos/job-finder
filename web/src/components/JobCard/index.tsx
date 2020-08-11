import React from 'react';
import { FiDollarSign, FiMapPin, FiChevronRight } from 'react-icons/fi';
import { FaBuilding, FaChartBar } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { JobProps } from '../../pages/Dashboard';

import logo from '../../assets/logo.png';

import { Container } from './styles';

interface JobCardProps {
  job: JobProps;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const history = useHistory();

  function navigateToDetail(): void {
    localStorage.setItem('@Job-Finder:JobID', JSON.stringify(job.id));
    history.push(`/job-details/${job.id}`);
  }

  return (
    <Container>
      <header>
        <img src={logo} alt={job.name} />
        <strong>{job.name}</strong>
      </header>
      <div>
        <h2>{job.title}</h2>
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
      </div>
      <button type="button" onClick={navigateToDetail}>
        Ver mais detalhes <FiChevronRight size={20} />
      </button>
    </Container>
  );
};

export default JobCard;
