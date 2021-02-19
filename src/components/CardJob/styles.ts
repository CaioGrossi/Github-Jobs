import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 79rem;
  height: 14rem;
  padding: 1.2rem;
  display: flex;
  border-radius: 0.4rem;
  background-color: white;

  @media (max-width: 900px) {
    width: 90%;
    height: 15.5rem;
  }
`;

export const LogoWrapper = styled.div`
  width: 9rem;
  height: 9rem;
  text-align: center;
  display: flex;
  align-items: center;
  margin-right: 1.6rem;
  border-radius: 0.4rem;
  font-size: 1.5rem;
  font-weight: bold;

  > img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 0.4rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;

  span {
    font-size: 1.3rem;
  }

  @media (max-width: 900px) {
    justify-content: space-around;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  color: #334680;

  > h2 {
    margin-bottom: 0.8rem;
  }
`;

export const Footer = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const WrapperIconInfo = styled.div`
  display: flex;
  align-items: center;

  > span {
    margin-left: 0.75rem;
  }
`;

export const WrapperJobInfoFooter = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-grow: 1;

  ${WrapperIconInfo} + ${WrapperIconInfo} {
    margin-right: 1.2rem;
  }

  @media (max-width: 900px) {
    flex-direction: row;
    flex-grow: 0;
    justify-content: space-between;
    margin-top: 0.8rem;
  }
`;

export const FullTime = styled.div`
  width: 7.2rem;
  height: 2.6rem;
  padding: 0.4rem 0.8rem;
  border: 1px solid #334680;
  border-radius: 0.4rem;
  color: #334680;
  font-weight: bold;
  font-size: 1.2rem;
`;
