import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 5rem;

  grid-template-areas:
    'back header'
    'howapply main';

  margin-top: 3.3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      'back'
      'howapply'
      'header'
      'main';
  }
`;

export const Back = styled(Link)`
  grid-area: 'back';

  font-size: 1.4rem;
  text-decoration: none;
  color: #1e86ff;
  font-weight: 500;

  > span {
    margin-left: 1.5rem;
  }
`;

export const HowApply = styled.div`
  grid-area: 'howapply';
  font-size: 1.4rem;
  margin-top: 3.6rem;

  > h4 {
    color: #b9bdcf;
    margin-bottom: 1.6rem;
    font-weight: 700;
  }
`;

export const Header = styled.header`
  grid-area: 'header';
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  > h1 {
    margin-right: 1.7rem;
    font-size: 2.4rem;
    font-weight: 700;
    color: #334680;
    margin-bottom: 0;
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;

  > span {
    font-size: 1.2rem;
    color: #b7bcce;
    margin-left: 0.85rem;
  }
`;

export const MainContent = styled.main`
  grid-area: 'main';
  margin-top: 3.5rem;

  > div {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  margin-bottom: 3.2rem;

  > img {
    height: 7rem;
    width: 7rem;
    margin-right: 1.2rem;
  }

  h4 {
    font-size: 1.8rem;
    color: #334680;
  }

  > div {
    display: flex;
    flex-direction: column;
  }

  > span {
    margin-right: 1.2rem;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;

  > span {
    color: #b7bcce;
    font-size: 1.2rem;
    font-weight: 500;
    margin-left: 0.75rem;
  }
`;
