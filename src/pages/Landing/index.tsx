import { useState } from 'react';
import getJobs from '../../services/api';
import SearchBar from '../../components/SearchBar';
import Jobs from '../../components/Jobs';
import { Container } from '../../components/Container';
import SideBar from '../../components/Sidebar';
import { useJobsContext } from '../../context/JobsContext';

import * as S from './styles';

export const Landing = () => {
  const { jobs, updateJobs } = useJobsContext();
  const [location, setLocation] = useState('');
  const [isFullTime, setIsFullTime] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (search: string) => {
    setIsLoading(true);
    const data = await getJobs(search, location, isFullTime);
    updateJobs(data);
    setIsLoading(false);
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
        <Jobs jobs={jobs} isLoading={isLoading} />
      </S.Wrapper>
    </Container>
  );
};

export default Landing;
