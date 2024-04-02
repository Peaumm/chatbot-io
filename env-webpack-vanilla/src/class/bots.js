import sayHello from './actions/sayHello';
import sayWeather from './actions/sayWeather';
import sayHelp from './actions/sayHelp';

const bots = [{
  name: 'Roger',
  actions: [sayHello, sayWeather, sayHelp],
  notif: 0
}, {
  name: 'Echo',
  actions: [sayHello],
  notif: 0
}, {
  name: 'Jarvis',
  actions: [sayHello],
  notif: 0
}];

export default bots;
