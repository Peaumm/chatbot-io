import axios from 'axios';

const sayQuoteAnime = {
  name: 'Weather',
  words: ['anime'],
  arg: [],
  response: () => (
    new Promise((resolve, reject) => {
      const res = axios.get('https://animechan.xyz/api/random');
      res.then((datas) => {
        resolve(`
          La citation vient de <b>${datas.data.character}</b> dans <b>${datas.data.anime}</b>.<br>
          Quote : <b>${datas.data.quote}</b>
        `);
        reject(new Error("Désolé mais je n'ai pas trouvé la météo."));
      });
    })
  )
};

export default sayQuoteAnime;
