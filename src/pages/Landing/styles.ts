import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'search-bar search-bar search-bar'
    'sidebar jobs jobs';

  @media (max-width: 900px) {
    grid-template-rows: 20rem 30rem 1fr;
    grid-template-columns: 1fr;
    align-items: center;
    grid-template-areas:
      'search-bar'
      'sidebar'
      'jobs';
  }
`;
