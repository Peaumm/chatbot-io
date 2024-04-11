// import axios from 'axios';
import sayHello from './actions/sayHello';
import sayWeather from './actions/sayWeather';
import sayHelp from './actions/sayHelp';
import sayJoke from './actions/sayJoke';
import sayLastReleasedGames from './actions/sayLastReleasedGames';
import sayLastMovies from './actions/sayLastMovies';
import sayValo from './actions/sayValo';
import sayQuoteAnime from './actions/sayQuoteAnime';
import sayBlindTest from './actions/sayBlindTest';
import sayOpenPoke from './actions/sayOpenPoke';

// async function test() {
//   const res = axios.get('http://localhost/bots');
//   const bots2 = [];
//   res.then((data) => {
//     for (let i = 0; i < data.data.length; i += 1) {
//       const decode = data.data[i].actions.replaceAll('"', '');
//       bots2.push({
//         id: data.data[i].id,
//         name: data.data[i].name,
//         actions: decode,
//         notif: data.data[i].notif
//       });
//     }
//   });
//   return bots2;
// }

// const bots = await test();

const bots = [{
  id: 1,
  name: 'Roger',
  actions: [sayHello, sayWeather, sayHelp],
  notif: 0
}, {
  id: 2,
  name: 'Echo',
  actions: [sayHello, sayJoke, sayLastMovies],
  notif: 0
}, {
  id: 3,
  name: 'Jarvis',
  actions: [sayHello, sayLastReleasedGames, sayValo],
  notif: 0
}, {
  id: 4,
  name: 'Anime',
  actions: [sayHello, sayQuoteAnime, sayBlindTest, sayOpenPoke],
  notif: 0
}];

export default bots;
