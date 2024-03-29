import axios from 'axios';
import viewNav from '../views/nav';
import viewListBots from '../views/chatbot/list-bots';
import responseBot from '../views/chatbot/responseBot';
import viewMessage from '../views/chatbot/message';
import bots from '../class/bots';
import input from '../views/chatbot/input';

const ChatBot = class ChatBot {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  async onKeyUp() {
    const elInputUser = document.querySelector('.input-user');
    const elMessages = document.querySelector('.section-messages');

    elInputUser.addEventListener('keyup', async (event) => {
      const keyWord = elInputUser.value;

      if (event.keyCode === 13 && keyWord !== '') {
        const data = {
          message: keyWord,
          date: new Date()
        };

        elMessages.innerHTML += viewMessage(data);

        await this.action(elInputUser.value).then((responses) => {
          console.log(responses);
          elMessages.innerHTML += responseBot(data);
          elMessages.scrollTop = elMessages.scrollHeight;
        });
        elInputUser.value = '';
        elMessages.scrollTop = elMessages.scrollHeight;
      }
    });
  }

  async action(keyWord) {
    const responses = [];

    bots.forEach((bot) => {
      bot.actions.forEach((action) => {
        const { words, response } = action;

        words.forEach(async (word) => {
          if (word === keyWord) {
            responses.push({
              message: await response(),
              name: bot.name,
              date: new Date()
            });
          }
        });
      });
    });

    return responses;
  }

  back() {
    const elMessages = document.querySelector('.section-messages');
    const res = axios.get('http://localhost/messages');
    res.then((messages) => {
      messages.data.forEach((datas) => {
        if (datas.is_user === 1) {
          elMessages.innerHTML += viewMessage(datas);
          elMessages.scrollTop = elMessages.scrollHeight;
        } else if (datas.is_user === 0) {
          elMessages.innerHTML += responseBot(datas);
          elMessages.scrollTop = elMessages.scrollHeight;
        }
      });
    });
  }

  incrementNotifications(id) {
    const notification = document.getElementById(id);
    const elMessages = document.querySelector('.section-messages');
    if (elMessages && elMessages.children.length > 0) {
      const currentNotificationCount = parseInt(notification.textContent, 10);
      if (currentNotificationCount + 1 < 100) {
        notification.textContent = currentNotificationCount + 1;
      } else {
        notification.textContent = '99+';
      }
    }
  }

  render() {
    return (`
      <div>${viewNav()}</div>
      <div class="container-fluid">
        <div class="row">
          ${viewListBots()}
          <div class="col-1 delimitation d-flex flex-column"
            <hr>
          </div>
          <!-- Messages -->
          <div class="col-9 overflow-scroll section-messages display"></div>
          <!-- Input Messages -->
          <div id="" class="input-group input-message mt-3">
            ${input()}
          </div>
        </div>
      </div>
    `);
  }

  run() {
    this.el.innerHTML = this.render();
    this.onKeyUp();
    this.back();
  }
};

export default ChatBot;
