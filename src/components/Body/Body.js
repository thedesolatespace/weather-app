import { Input } from '../Input/Input';
import { Top } from '../Top/Top';
import { StyledBody } from './Body.styles';

export const Body = ({ onSearch, weather }) => {
  if (+weather.cod === 200) {
    return (
      <StyledBody>
        <Input onSearch={onSearch} />
        <Top city={weather.city.name} weather={weather} />
      </StyledBody>
    );
  } else {
    return (
      <StyledBody>
        <Input onSearch={onSearch} />
      </StyledBody>
    );
  }
};
