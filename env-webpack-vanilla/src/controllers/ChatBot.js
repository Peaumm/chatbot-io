import axios from 'axios';
import viewNav from '../views/nav';
import viewListBots from '../views/chatbot/list-bots';
import viewMessageBot from '../views/chatbot/responseBot';
import viewMessage from '../views/chatbot/message';
import bots from '../class/bots';
import viewInput from '../views/chatbot/input';

const ChatBot = class ChatBot {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  async sendMessage() {
    const elInputUser = document.querySelector('.input-user');
    const elMessages = document.querySelector('.section-messages');
    const sendButton = document.querySelector('.btn-send');

    elInputUser.addEventListener('keyup', async (event) => {
      const keyWord = elInputUser.value;

      if (event.keyCode === 13 && keyWord !== '') {
        const data = {
          name: '',
          message: keyWord,
          date: new Date(),
          isUser: 1
        };
        await this.sendMessageToDatabase(data);
        elMessages.innerHTML += viewMessage(data);
        elMessages.scrollTop = elMessages.scrollHeight;

        await this.action(keyWord);

        elInputUser.value = '';
        elMessages.scrollTop = elMessages.scrollHeight;
      }
    });

    sendButton.addEventListener('click', async () => {
      const keyWord = elInputUser.value;

      if (keyWord !== '') {
        const data = {
          name: '',
          message: keyWord,
          date: new Date(),
          isUser: 1
        };
        await this.sendMessageToDatabase(data);
        elMessages.innerHTML += viewMessage(data);
        elMessages.scrollTop = elMessages.scrollHeight;

        await this.action(keyWord);

        elInputUser.value = '';
        elMessages.scrollTop = elMessages.scrollHeight;
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
            const data = {
              name: bot.name,
              message: res,
              date: new Date(),
              isUser: 0
            };
            await this.sendMessageToDatabase(data);
            elMessages.innerHTML += viewMessageBot({
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

  importBack() {
    const elMessages = document.querySelector('.section-messages');
    const res = axios.get('http://localhost/messages');
    res.then((messages) => {
      messages.data.forEach((datas) => {
        if (datas.isUser === 1) {
          elMessages.innerHTML += viewMessage(datas);
          elMessages.scrollTop = elMessages.scrollHeight;
        } else if (datas.isUser === 0) {
          elMessages.innerHTML += viewMessageBot(datas);
          elMessages.scrollTop = elMessages.scrollHeight;
        }
      });
    });
  }

  async sendMessageToDatabase(data) {
    const elMessages = document.querySelector('.section-messages');
    try {
      console.log('Message à envoyer à la base de données :', data);
      const response = await axios.post('http://localhost/messages', data);
      console.log('Réponse de la base de données:', response.data);
      elMessages.innerHTML += viewMessage({ message, is_user: isUser });
      elMessages.scrollTop = elMessages.scrollHeight;

      console.log('Message envoyé avec succès à la base de données.');
    } catch (error) {
      console.error('Error sending message to database:', error);
    }
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
            ${viewInput()}
          </div>
        </div>
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.sendMessage();
    this.importBack();
  }
};

export default ChatBot;
