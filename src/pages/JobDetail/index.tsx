import { useJobsContext } from '../../context/JobsContext';
import { Container } from '../../components/Container';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Job } from '../../context/JobsContext';

type JobsParams = {
  id: string;
};

const JobDetail = () => {
  const { jobs } = useJobsContext();
  const { id } = useParams<JobsParams>();
  const [job, setJob] = useState<Job>();

  useEffect(() => {
    jobs.forEach((job) => {
      if (job.id == id) {
        setJob(job);
      }
    });
  });

  return (
    <Container>
      <h1>
        <strong>Github</strong> Jobs
      </h1>
    </Container>
  );
};

export default JobDetail;
