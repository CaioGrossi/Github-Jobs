import { BiWorld } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import FullTime from '../FullTime';
import formatDate from '../../utils/getdays';

import * as S from './styles';

export type CardJobProps = {
  company_logo?: string;
  company: string;
  type?: string;
  title: string;
  created_at: string;
  location: string;
  link: string;
};

const CardJob = ({
  company,
  company_logo = '',
  type = '',
  title,
  created_at,
  location,
  link
}: CardJobProps) => {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        {company_logo ? (
          <img src={company_logo} alt={company} />
        ) : (
          <span>Not found</span>
        )}
      </S.LogoWrapper>

      <S.Content>
        <S.StyledLink to={link}>
          <S.Header>
            <h2>{company}</h2>
            <h1>{title}</h1>
          </S.Header>
        </S.StyledLink>

        <S.Footer>
          {type == 'Full Time' && <FullTime />}

          <S.WrapperJobInfoFooter>
            <S.WrapperIconInfo>
              <BiWorld size={15} />
              <span>{location}</span>
            </S.WrapperIconInfo>

            <S.WrapperIconInfo>
              <AiOutlineClockCircle size={15} />
              <span>{formatDate(created_at)}</span>
            </S.WrapperIconInfo>
          </S.WrapperJobInfoFooter>
        </S.Footer>
      </S.Content>
    </S.Wrapper>
  );
};

export default CardJob;
