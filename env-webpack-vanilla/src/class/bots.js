import sayHello from './actions/sayHello';
import sayWeather from './actions/sayWeather';

const bots = [{
  name: 'Roger',
  actions: [sayHello, sayWeather]
}, {
  name: 'Echo',
  actions: [sayHello]
}, {
  name: 'Jarvis',
  actions: [sayHello]
}];

export default bots;
