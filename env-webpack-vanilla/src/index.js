import Router from './router';
import Chat from './controllers/Chat';
import Bot from './controllers/Bot';
import Bouton from './controllers/Bouton';

import './index.scss';

const routes = [{
  url: '/chat',
  controller: Chat
}, {
  url: '/bot',
  controller: Bot
}, {
  url: '/',
  controller: Bouton
}
];

new Router(routes);
