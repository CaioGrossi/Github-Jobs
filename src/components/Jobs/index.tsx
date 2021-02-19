import { useState } from 'react';
import CardJob from '../CardJob';
import { CardJobProps } from '../CardJob';
import Pagination from '../Pagination';

import * as S from './styles';

type JobsProps = {
  jobs: CardJobProps[];
};

function Jobs({ jobs }: JobsProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * 5;
  const indexOfFirstPost = indexOfLastPost - 5;
  const currentJobs = jobs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  console.log(jobs);

  return (
    <S.Wrapper>
      {currentJobs.map((job) => (
        <CardJob
          key={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          created_at={job.created_at}
          company_logo={job.company_logo}
          type={job.type}
        />
      ))}
      <Pagination jobsPerPage={5} totalJobs={jobs.length} paginate={paginate} />
    </S.Wrapper>
  );
}

export default Jobs;
