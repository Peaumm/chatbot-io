import axios from 'axios';
import viewNav from '../views/nav';
import viewListBots from '../views/chatbot/list-bots';
import ViewMessageBot from '../views/chatbot/responseBot';
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
        elMessages.scrollTop = elMessages.scrollHeight;

        await this.action(keyWord);

        elInputUser.value = '';
      }
    });
  }

  async sendMessage() {
    const elMessages = document.querySelector('.section-messages');
    const elInputUser = document.querySelector('.input-user');
    const sendButton = document.querySelector('.btn-send');

    sendButton.addEventListener('click', async () => {
      const keyWord = elInputUser.value;

      if (keyWord !== '') {
        const data = {
          message: keyWord,
          date: new Date()
        };

        elMessages.innerHTML += viewMessage(data);
        elMessages.scrollTop = elMessages.scrollHeight;

        await this.action(keyWord);

        elInputUser.value = '';
      }
    });
  }

  async action(keyWord) {
    bots.forEach((bot) => {
      bot.actions.forEach((action) => {
        const { words, response } = action;

        words.forEach(async (word) => {
          if (word === keyWord) {
            const res = await response();
            const elMessages = document.querySelector('.section-messages');
            elMessages.innerHTML += ViewMessageBot({
              name: bot.name,
              date: new Date(),
              message: res
            });
            elMessages.scrollTop = elMessages.scrollHeight;
            this.addNotificationToBot(bot.id);
          }
        });
      });
    });
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
          elMessages.innerHTML += ViewMessageBot(datas);
          elMessages.scrollTop = elMessages.scrollHeight;
        }
      });
    });
  }

  addNotificationToBot(id) {
    const elBots = Array.from(document.querySelectorAll('.bot'));
    elBots.forEach((elBot) => {
      if (parseInt(elBot.dataset.id, 10) === id) {
        const el = elBot.querySelector('.notification p');
        const currentCount = parseInt(el.textContent, 10);
        const newCount = currentCount + 1;
        if (newCount >= 100) {
          el.textContent = '99+';
        } else {
          el.textContent = newCount;
        }
      }
    });
  }

  render() {
    return `
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
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.onKeyUp();
    this.sendMessage();
    this.back();
  }
};

export default ChatBot;
