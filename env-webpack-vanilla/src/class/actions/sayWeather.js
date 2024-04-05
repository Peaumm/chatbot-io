import axios from 'axios';

const sayWeather = {
  name: 'Weather',
  words: ['meteo', 'Meteo', 'Météo', 'météo'],
  arg: [],
  response: async () => (
    // navigator.geolocation.getCurrentPosition(async (position) => {
    //   const { coords: { latitude, longitude } } = position;
    //   try {
    //     const res = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day&timezone=auto`);
    //     // const temp = res.data.current.temperature_2m;
    //     return res;
    //   } catch (error) {
    //     return "Désolé mais je n'ai pas trouvé la météo";
    //   }
    // })

    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { coords: { latitude, longitude } } = position;
        const res = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day&timezone=auto`);
        resolve(`Il fait actuellement ${res.data.current.temperature_2m}°C.`);
        reject(new Error("Désolé mais je n'ai pas trouvé la météo."));
      });
    })

    // navigator.geolocation.getCurrentPosition((position) => {
    //   const { coords: { latitude, longitude } } = position;
    //   axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day&timezone=auto`)
    //     .then((response) => {
    //       const res = response.data.current.temperature_2m;
    //       return `Il fait actuellement ${res}°C.`;
    //     });
    // })
  )
};

export default sayWeather;
