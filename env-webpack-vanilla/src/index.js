import Router from './router';
import Bot from './controllers/Bot';
import Bouton from './controllers/Bouton';

import './index.scss';

const routes = [{
  url: '/bot',
  controller: Bot
}, {
  url: '/',
  controller: Bouton
}
];

new Router(routes);
