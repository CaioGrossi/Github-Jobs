import { useState } from 'react';
import formatLocation from '../../utils/fomatLocation';
import { BiWorld } from 'react-icons/bi';
import * as S from './styles';

type SideBarProps = {
  changeLocation: (location: string) => void;
  changeFullTime: (isFullTime: boolean) => void;
};

const Sidebar = ({ changeLocation, changeFullTime }: SideBarProps) => {
  const [locations, setLocations] = useState<string[]>([
    'New York',
    'Amsterdam',
    'London'
  ]);

  const [newLocation, setNewLocation] = useState<string>('');

  const handleAddNewLocation = () => {
    if (newLocation.length != 0) {
      setLocations((prev) => [...prev, newLocation]);
      setNewLocation('');
    }
  };

  return (
    <S.Wrapper>
      <S.InputBlock>
        <input
          type="checkbox"
          name="full-time"
          id="full_time"
          onChange={(event) => changeFullTime(event.target.checked)}
        />
        <label htmlFor="full_time">Full time</label>
      </S.InputBlock>

      <h3>Location</h3>

      <S.SearchLocation>
        <BiWorld size={20} />
        <input
          type="text"
          onChange={(event) => setNewLocation(event.target.value)}
        />
        <button onClick={handleAddNewLocation}>Add</button>
      </S.SearchLocation>

      {locations.map((location) => {
        const formatedLocation = formatLocation(location);
        return (
          <S.InputBlock key={location}>
            <input
              type="radio"
              name="location"
              id={formatedLocation}
              value={formatedLocation}
              onChange={(event) => changeLocation(event.target.value)}
            />
            <label htmlFor={formatedLocation}>{location}</label>
          </S.InputBlock>
        );
      })}
    </S.Wrapper>
  );
};

export default Sidebar;
