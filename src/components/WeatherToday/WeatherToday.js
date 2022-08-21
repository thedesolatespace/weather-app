import {
  Humidity,
  StyledWeather,
  Temperature,
  TimeOfDay,
} from './WeatherToday.styles';

export const WeatherToday = ({ weather, date }) => {
  const url =
    'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '.png';

  return (
    <StyledWeather>
      <TimeOfDay>
        {new Date(date * 1000).toLocaleString('en-us', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        })}
      </TimeOfDay>
      <img src={url} />
      <Temperature>{weather.main.temp}°</Temperature>
      <Humidity>{weather.main.humidity}%</Humidity>
    </StyledWeather>
  );
};
