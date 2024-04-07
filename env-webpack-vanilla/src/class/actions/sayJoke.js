import axios from 'axios';

const sayJoke = {
  name: 'Joke',
  words: ['blagues', 'joke', 'blague', 'jokes'],
  arg: [],
  response: async () => {
    try {
      const request = await axios.get('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart');
      if (request.data.type === 'twopart') {
        return `Voici la blague : ${request.data.setup} ${request.data.delivery}`;
      }
      if (request.data.type === 'single') {
        return `Voici la blague : ${request.data.joke}`;
      }
      throw new Error('Type de blague non supporté.');
    } catch (error) {
      throw new Error('Désolé je n ai pas trouvé de blague.');
    }
  }
};

export default sayJoke;
