import { useState } from 'react';
import { Body } from './components/Body/Body';
import { StyledTitle } from './components/Title/Title.styles';

const apiurl = 'http://api.openweathermap.org/data/2.5/forecast?q=';
const apikey = '&appid=4b94dc81c21c4832ee25c03d9f8885df';

function App() {
  const [weather, setWeather] = useState({});

  const onSearch = async (value) => {
    await fetch(apiurl + value + apikey + '&units=metric')
      .then((response) => response.text())
      .then((text) => {
        setWeather(() => JSON.parse(text));
      });
  };
  return (
    <div className="App">
      <div className="container">
        <StyledTitle>Weather App</StyledTitle>
        <Body city={weather} onSearch={onSearch} weather={weather} />
      </div>
    </div>
  );
}

export default App;
