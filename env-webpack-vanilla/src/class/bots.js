import sayHello from './actions/sayHello';
import sayWeather from './actions/sayWeather';
import sayHelp from './actions/sayHelp';

const bots = [{
  name: 'Roger',
  actions: [sayHello, sayWeather, sayHelp]
}, {
  name: 'Echo',
  actions: [sayHello]
}, {
  name: 'Jarvis',
  actions: [sayHello]
}];

export default bots;
