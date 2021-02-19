import styled from 'styled-components';
import bgImage from '../../assets/images/backgroundImg.png';

export const Wrapper = styled.div`
  display: flex;
  height: 13.8rem;
  max-width: 120rem;
  min-width: 35.1rem;
  justify-content: center;
  align-items: center;
  background-image: url(${bgImage});
  border-radius: 0.8rem;
  margin-bottom: 4rem;
  margin-top: 4rem;
  grid-area: search-bar;
`;

export const Search = styled.div`
  margin: 0 1.8rem;
  height: 5.5rem;
  padding: 0.4rem;
  padding-left: 1.7rem;
  width: 79rem;
  min-width: 31.5rem;
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.8rem;
`;

export const SearchInput = styled.input`
  border: none;
  height: 100%;
  text-align: center;
  font-size: 2rem;
  width: 95%;

  &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

export const SearchButton = styled.button`
  height: 4.7rem;
  background-color: #1e86ff;
  color: white;
  font-weight: bold;
  padding: 1.1rem 4.8rem;
  border-radius: 0.4rem;
  border: none;
  font-size: 1.6rem;

  @media (max-width: 900px) {
    padding: 1.1rem 2.7rem;
  }
`;
