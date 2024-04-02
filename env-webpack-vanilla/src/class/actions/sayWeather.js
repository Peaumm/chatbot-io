import axios from 'axios';

const sayWeather = {
  name: 'Weather',
  words: ['meteo', 'Meteo', 'Météo', 'météo'],
  arg: [],
  response: async () => (
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { coords: { latitude, longitude } } = position;
        const res = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day&timezone=auto`);
        resolve(res);
        reject(new Error("Désolé mais je n'ai pas trouvé la météo"));
      });
    })
  )
};

export default sayWeather;
