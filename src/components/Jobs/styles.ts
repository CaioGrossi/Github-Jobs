import styled from 'styled-components';
import * as CardJobStyles from '../CardJob/styles';

export const Wrapper = styled.div`
  grid-area: jobs;
  ${CardJobStyles.Wrapper} {
    margin-bottom: 3.2rem;
  }
`;
