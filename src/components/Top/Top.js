import { CityAndDate } from '../CityAndDate/CityAndDate';
import { TemperatureNow } from '../Temperature/Temperature';
import { WeatherToday } from '../WeatherToday/WeatherToday';
import { StyledTop, StyledWeatherToday } from './Top.styles';

export const Top = ({ city, weather }) => {
  return (
    <StyledTop>
      <CityAndDate city={city} />
      <TemperatureNow weather={weather} />
      <StyledWeatherToday>
        {weather.list.map((weather, index) => {
          if (index < 8) {
            return (
              <WeatherToday weather={weather} key={index} date={weather.dt} />
            );
          }
        })}
      </StyledWeatherToday>
    </StyledTop>
  );
};
