import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 38rem;
  grid-area: sidebar;
  font-size: 1.4rem;
`;

export const InputBlock = styled.div`
  display: flex;
  max-width: 14rem;
  align-items: center;
  margin: 1.3rem 0;

  > input {
    margin-right: 1rem;
  }
`;

export const SearchLocation = styled.div`
  background-color: white;
  padding: 1.2rem 1rem;
  display: flex;
  border-radius: 0.4rem;
  align-items: center;
  margin: 1.3rem 0;

  > input {
    border: none;
    margin-left: 1rem;
    width: 100%;
  }

  > input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  > button {
    background-color: #1e86ff;
    border-radius: 0.4rem;
    border: none;
    padding: 0.5rem 0.8rem;
    color: white;
    font-weight: bold;
  }
`;
