import Router from './router';
import ChatBot from './controllers/ChatBot';

import './index.scss';

const routes = [{
  url: '/',
  controller: ChatBot
}];

new Router(routes);
