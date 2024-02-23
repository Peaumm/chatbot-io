import sayHello from './actions/sayHello';
import sayWeather from './actions/sayWeather';

const bots = [{
  name: 'Roger',
  id: 0,
  actions: [sayHello, sayWeather]
}, {
  name: 'Echo',
  id: 0,
  actions: [sayHello]
}, {
  name: 'Jarvis',
  id: 0,
  actions: [sayHello]
}];

export default bots;
