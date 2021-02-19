import { useState } from 'react';
import axios from 'axios';
import { CardJobProps } from '../../components/CardJob/index';
import SearchBar from '../../components/SearchBar';
import Jobs from '../../components/Jobs';
import { Container } from '../../components/Container';
import SideBar from '../../components/Sidebar';

import * as S from './styles';

export const Landing = () => {
  const [jobs, setJobs] = useState<CardJobProps[]>([]);
  const [location, setLocation] = useState('');
  const [isFullTime, setIsFullTime] = useState(false);

  const handleSubmit = async (search: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await axios.get('http://localhost:4000/', {
      params: {
        description: search,
        location: location,
        full_time: isFullTime
      }
    });

    setJobs(response.data);
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
