import React from 'react';
import { FiDollarSign, FiMapPin } from 'react-icons/fi';
import { FaBuilding, FaChartBar } from 'react-icons/fa';

import { Container } from './styles';

interface JobCardProps {
  title: string;
  companyLogo: string;
  companyName: string;
  companySize: string;
  salary: string;
  experienceLevel: string;
  location: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  companySize,
  salary,
  experienceLevel,
  location,
  children,
  companyLogo,
  companyName,
}) => {
  return (
    <Container>
      <header>
        <img src={companyLogo} alt={companyName} />
        <strong>{companyName}</strong>
      </header>
      <div>
        <h2>{title}</h2>
        <p>
          <FaBuilding size={20} />
          {companySize}
        </p>
        <p>
          <FiDollarSign size={20} />
          R${salary}
        </p>
        <p>
          <FaChartBar size={20} />
          {experienceLevel}
        </p>
        <p>
          <FiMapPin size={20} />
          {location}
        </p>
      </div>
      {children}
    </Container>
  );
};

export default JobCard;
