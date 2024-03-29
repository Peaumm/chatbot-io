import axios from 'axios';

const sayWeather = {
  name: 'Weather',
  word: ['meteo', 'Meteo', 'Météo', 'météo', 'matéo', 'mateo', 'Matéo', 'Mateo'],
  arg: [],
  action: async () => {
    let temp = 0;
    let response = '';
    const promise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { coords: { latitude, longitude } } = position;
        const res = axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day&timezone=auto`);
        resolve(res);
        reject(new Error("Désolé mais je n'ai pas trouvé la météo"));
      });
    });
    promise.forEach((element) => {
      console.log(element);
    });
    temp = promise.data.current.temperature_2m;
    response = `Il fait actuellement ${temp}°C`;
    return response;
  }
};

export default sayWeather;
