import viewItemBot from './item-bot';
import bots from '../../class/bots';

export default () => (`
  <div class="col-2 p-0 d-flex flex-column text-align align-items-center overflow-auto border-end border-dark">
  ${bots.map((bot) => viewItemBot(bot.id, bot.name, bot.notif)).join('')}
  </div>
`);
