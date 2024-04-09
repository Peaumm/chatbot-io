import axios from 'axios';

const sayLastReleasedMovies = {
  name: 'LastReleasedMovies',
  words: [
    'dernières sorties films',
    'nouveaux films',
    'derniers films',
    'sorties récentes au cinéma',
    'films récents'
  ],

  response: async () => {
    const apiKey = 'f4e9c1e664ccd294909d381a48369ee3';
    const startDate = '2024-03-01';
    const endDate = '2024-04-07';
    const url = 'https://api.themoviedb.org/3/discover/movie';

    try {
      const response = await axios.get(url, {
        params: {
          api_key: apiKey,
          include_adult: false,
          include_video: false,
          page: 1,
          'primary_release_date.gte': startDate,
          'primary_release_date.lte': endDate,
          sort_by: 'popularity.desc'
        }
      });
      const movies = response.data.results;
      const movieInfo = movies.map((movie) => ({
        title: movie.title,
        release_date: new Date(movie.release_date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })
      }));
      const movieMessages = movieInfo.map((movie) => `<b>Titre :</b> ${movie.title}<br><b>Date de sortie :</b> ${movie.release_date}<br>`);

      return `Les dernières sorties de films entre le ${new Date(startDate).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })} et ${new Date(endDate).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })} sont :<br>${movieMessages.join('<br>')}`;
    } catch (error) {
      throw new Error('Je n\'ai pas pu récupérer les informations sur les films.');
    }
  }
};

export default sayLastReleasedMovies;
