import axios from 'axios';

const sayJoke = {
  name: 'Joke',
  words: ['blagues', 'joke', 'blague', 'jokes'],
  arg: [],
  response: async () => {
    try {
      console.log('Starting joke retrieval...');
      const request = await axios.get('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart');
      console.log('Response received:', request.data);
      if (request.data.type === 'twopart') {
        console.log('Two-part joke found.');
        return `Voici la blague : ${request.data.setup} ${request.data.delivery}`;
      }
      if (request.data.type === 'single') {
        console.log('Single joke found.');
        return `Voici la blague : ${request.data.joke}`;
      }
      console.log('Unsupported joke type:', request.data.type);
      throw new Error('Type de blague non supporté.');
    } catch (error) {
      console.error('Error occurred:', error.message);
      throw new Error('Désolé je n ai pas trouvé de blague.');
    }
  }
};

export default sayJoke;
