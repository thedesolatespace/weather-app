import {
  StyledLeft,
  StyledRight,
  StyledTemperature,
} from './Temperature.styles';

export const TemperatureNow = ({ weather }) => {
  const url =
    'http://openweathermap.org/img/wn/' +
    weather.list[0].weather[0].icon +
    '.png';
  return (
    <StyledTemperature>
      <StyledLeft>
        <img src={url} />
        <p>{weather.list[0].main.temp}°</p>
      </StyledLeft>
      <StyledRight>
        <p>{weather.list[0].weather[0].description}</p>
        <p>
          {weather.list[0].main.temp_max}°/
          {weather.list[0].main.temp_min}°
        </p>
        <p>Feels like: {weather.list[0].main.feels_like}°</p>
      </StyledRight>
    </StyledTemperature>
  );
};
