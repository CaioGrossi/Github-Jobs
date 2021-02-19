import { useState } from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import * as S from './styles';

type SearchBarProps = {
  onSubmit: (search: string) => void;
};

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [search, setSearch] = useState('');

  return (
    <S.Wrapper>
      <S.Search>
        <CgWorkAlt size={28} />
        <S.SearchInput
          placeholder="Title, companies, expertise or benefits"
          onChange={(event) => setSearch(event.target.value)}
        />
        <S.SearchButton onClick={() => onSubmit(search)}>Search</S.SearchButton>
      </S.Search>
    </S.Wrapper>
  );
};

export default SearchBar;
