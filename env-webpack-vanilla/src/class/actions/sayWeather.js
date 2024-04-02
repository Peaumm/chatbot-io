import axios from 'axios';

const sayWeather = {
  name: 'Weather',
  word: ['meteo', 'Meteo', 'Météo', 'météo'],
  arg: [],
  action: async () => {
    let temp = 0;
    let response = '';
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords: { latitude, longitude } } = position;
      axios
        .get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day&timezone=auto`)
        .then((res) => {
          temp += res.data.current.temperature_2m;
        });
      if (temp === 0) {
        response = "Il est impossible d'afficher la météo actuellement";
      } else {
        response = `Il fait actuellement ${temp}°C`;
      }
    });
    return response;
  }
};

export default sayWeather;
