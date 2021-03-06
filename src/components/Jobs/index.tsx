import { useState } from 'react';
import CardJob from '../CardJob';
import Pagination from '../Pagination';
import { Job } from '../../context/JobsContext';

import loadingSVG from '../../assets/images/loader.svg';

import * as S from './styles';

type JobsProps = {
  jobs: Job[];
  isLoading: boolean;
};

function Jobs({ jobs, isLoading }: JobsProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * 5;
  const indexOfFirstPost = indexOfLastPost - 5;
  const currentJobs = jobs?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <S.Wrapper>
      {isLoading ? (
        <img src={loadingSVG} alt="Loading..." />
      ) : (
        <S.Wrapper>
          {currentJobs?.map((job) => (
            <CardJob
              key={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              created_at={job.created_at}
              company_logo={job.company_logo}
              type={job.type}
              link={`/${job.id}`}
            />
          ))}
          <Pagination
            jobsPerPage={5}
            totalJobs={jobs?.length}
            paginate={paginate}
          />
        </S.Wrapper>
      )}
    </S.Wrapper>
  );
}

export default Jobs;
