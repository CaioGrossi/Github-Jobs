import { useState } from 'react';
import getJobs from '../../services/api';
import { CardJobProps } from '../../components/CardJob/index';
import SearchBar from '../../components/SearchBar';
import Jobs from '../../components/Jobs';
import { Container } from '../../components/Container';
import SideBar from '../../components/Sidebar';

import * as S from './styles';

export const Landing = () => {
  const [location, setLocation] = useState('');
  const [isFullTime, setIsFullTime] = useState(false);
  const [jobs, setJobs] = useState<CardJobProps[]>([]);

  const handleSubmit = async (search: string) => {
    const data = await getJobs(search, location, isFullTime);
    setJobs(data);
  };

  const handleLocationChange = (location: string) => {
    setLocation(location);
  };

  const handleIsFullTimeChange = (fullTime: boolean) => {
    setIsFullTime(fullTime);
  };

  return (
    <Container>
      <h1>
        <strong>Github</strong> Jobs
      </h1>
      <S.Wrapper>
        <SearchBar onSubmit={handleSubmit} />
        <SideBar
          changeFullTime={handleIsFullTimeChange}
          changeLocation={handleLocationChange}
        />
        <Jobs jobs={jobs} />
      </S.Wrapper>
    </Container>
  );
};

export default Landing;
