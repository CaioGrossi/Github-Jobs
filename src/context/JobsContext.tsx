import { createContext, useContext, useState } from 'react';

export type Job = {
  id: string;
  type: string;
  created_at: string;
  company: string;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo: string;
};

type JobsContextData = {
  jobs: Job[];
  updateJobs: (jobs: Job[]) => void;
};

type JobsProviderProps = {
  children: React.ReactNode;
};

const JobsContext = createContext({} as JobsContextData);

export default function JobsProvider({ children }: JobsProviderProps) {
  const [jobs, setJobs] = useState<Job[]>([]);

  function updateJobs(jobs: Job[]) {
    setJobs(jobs);
  }

  return (
    <JobsContext.Provider value={{ jobs, updateJobs }}>
      {children}
    </JobsContext.Provider>
  );
}

export function useJobsContext() {
  return useContext(JobsContext);
}
