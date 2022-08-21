import { useEffect, useState } from 'react';
import { City, CurrentDate, StyledCityAndDate } from './CityAndDate.styles';

export const CityAndDate = ({ city }) => {
  const [date, setDate] = useState(new Date());

  clearInterval;
  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  });
  return (
    <StyledCityAndDate>
      <City>{city}</City>
      <CurrentDate>
        {date.toLocaleString(
          'en-us',
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'short',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false,
          },
          1000
        )}
      </CurrentDate>
    </StyledCityAndDate>
  );
};
