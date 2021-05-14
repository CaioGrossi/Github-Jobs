import { useJobsContext } from '../../context/JobsContext';
import { Container } from '../../components/Container';
import { BiWorld } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Job } from '../../context/JobsContext';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import getDays from '../../utils/getdays';
import FullTime from '../../components/FullTime';

import * as S from './styles';

type JobsParams = {
  id: string;
};

const JobDetail = () => {
  const { jobs } = useJobsContext();
  const { id } = useParams<JobsParams>();
  const [job, setJob] = useState<Job>();

  useEffect(() => {
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].id == id) {
        setJob(jobs[i]);
        break;
      }
    }
  }, [id, jobs]);

  if (!job) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <h1>
        <strong>Github</strong> Jobs
      </h1>

      <S.Wrapper>
        <S.Back to="/">
          <IoReturnDownBackSharp size={20} />
          <span>Back to search</span>
        </S.Back>

        <S.Header>
          <S.Title>
            <h1>{job.title}</h1>
            {job.type === 'Full Time' && <FullTime />}
          </S.Title>
          <S.Time>
            <AiOutlineClockCircle size={16} color="#B7BCCE" />
            <span>{getDays(job.created_at)}</span>
          </S.Time>
        </S.Header>

        <S.HowApply>
          <h4>HOW TO APPLY</h4>
          <div style={{wordBreak: "break-word"}} dangerouslySetInnerHTML={{ __html: job.how_to_apply }}></div>
        </S.HowApply>

        <S.MainContent>
          <S.CompanyInfo>
            {job.company_logo ? (
              <img src={job.company_logo} />
            ) : (
              <span>Not found</span>
            )}
            <div>
              <h4>{job.company}</h4>
              <S.Location>
                <BiWorld size={15} color="#B7BCCE" /> {''}
                <span>{job.location}</span>
              </S.Location>
            </div>
          </S.CompanyInfo>

          <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
        </S.MainContent>
      </S.Wrapper>
    </Container>
  );
};

export default JobDetail;
