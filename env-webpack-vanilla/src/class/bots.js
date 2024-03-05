import sayHello from './actions/sayHello';
import sayWeather from './actions/sayWeather';

const bots = [{
  name: 'Roger',
  actions: [sayHello, sayWeather],
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
