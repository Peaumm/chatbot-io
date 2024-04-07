import axios from 'axios';

const sayLastReleasedGames = {
  name: 'LastReleasedGames',
  words: [
    'nouveaux jeux pc',
    'dernières sorties pc',
    'derniers jeux pc',
    'sorties récentes pc',
    'jeux récents',
    'jeux pc',
    'sorties pc'
  ],

  response: async () => {
    const apiKey = '?key=4d36dd04f045476fbbe1a0ea07cdc1b0';
    const startDate = '2024-03-01';
    const endDate = '2024-04-07';
    const platforms = 4;
    const url = `https://api.rawg.io/api/games${apiKey}&dates=${startDate},${endDate}&platforms=${platforms}`;

    try {
      const response = await axios.get(url);
      const games = response.data.results;
      const gameInfo = games.map((game) => ({
        name: game.name,
        released: new Date(game.released).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }),
        rating: game.rating
      }));
      const gameMessages = gameInfo.map((game) => `<b> Nom du jeu :</b> ${game.name} - <b>Date de sortie :</b> ${game.released} - <b>Note :</b> ${game.rating}`);
      return `Les dernières sorties PC entre le ${new Date(startDate).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })} et ${new Date(endDate).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })} sont :<br>${gameMessages.join('<br>')}`;
    } catch (error) {
      throw new Error('Je n ai pas pu récupérer les informations sur les jeux.');
    }
  }
};

export default sayLastReleasedGames;
