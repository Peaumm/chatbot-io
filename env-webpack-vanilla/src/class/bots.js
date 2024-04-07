import sayHello from './actions/sayHello';
import sayWeather from './actions/sayWeather';
import sayHelp from './actions/sayHelp';
import sayJoke from './actions/sayJoke';

// import axios from 'axios';

// const res = axios.get('http://localhost/bots');
// const bots = res.then((datas) => {
//   const bot = datas.data;
//   return bot;
// });

const bots = [{
  id: 1,
  name: 'Roger',
  actions: [sayHello, sayWeather, sayHelp],
  notif: 0
}, {
  id: 2,
  name: 'Echo',
  actions: [sayHello, sayJoke],
  notif: 0
}, {
  id: 3,
  name: 'Jarvis',
  actions: [sayHello],
  notif: 0
}];

export default bots;
