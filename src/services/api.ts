import axios from 'axios';

const getJobs = async (
  description: string,
  location: string,
  full_time: boolean
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: any = await axios.get('http://localhost:4000/', {
    params: {
      description: description,
      location: location,
      full_time: full_time
    }
  });

  return response.data;
};

export default getJobs;
