import styled from 'styled-components';

export const Container = styled.div`
  max-width: 120rem;
  min-width: 35rem;
  margin: auto;
  margin-top: 1rem;

  @media (max-width: 900px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;
