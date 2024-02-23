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

  onKeyUp() {
    const elInputUser = document.querySelector('.input-user');
    const elMessages = document.querySelector('.section-messages');

    elInputUser.addEventListener('keyup', (event) => {
      const keyWord = elInputUser.value;

      if (event.keyCode === 13 && keyWord !== '') {
        const data = {
          message: keyWord,
          date: new Date()
        };

        elMessages.innerHTML += viewMessage(data);
        elInputUser.value = '';

        bots.forEach((bot) => {
          const response = [];
          bot.actions.forEach((el) => {
            const { word, action } = el;
            word.forEach((element) => {
              if (element === keyWord) {
                response.push({
                  message: action(),
                  date: new Date()
                });
              }
            });
          });
          elMessages.innerHTML += responseBot(response);
        });
      }
    });
  }

  autoScroll() {
    const messageDiv = document.querySelector('.section-messages');
    messageDiv.scrollTop = messageDiv.scrollHeight;
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
  }
};

export default ChatBot;
