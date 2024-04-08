import axios from 'axios';

const sayQuoteAnime = {
  name: 'Weather',
  words: ['anime'],
  arg: [],
  response: async () => (
    new Promise(async (resolve, reject) => {
      const res = await axios.get('https://animechan.xyz/api/random');
      console.log(res.data);
      resolve(`
        La citation vient de <b>${res.data.character}</b> dans <b>${res.data.anime}</b>.<br>
        Quote : <b>${res.data.quote}</b>
      `);
      reject(new Error("Désolé mais je n'ai pas trouvé la météo."));
    })
  )
};

export default sayQuoteAnime;
