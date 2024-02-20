import axios from 'axios';

import viewNav from '../views/nav';
import viewListBots from '../views/chatbot/list-bots';
import responseBot from '../views/responseBot';
import viewMessage from '../views/chatbot/message';

const Bot = class Bot {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.i = 0;
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
        this.sayHello(keyWord);
        this.sayWeather(keyWord, this.data);
      }
    });
  }

  sayHello(input) {
    const elMessages = document.querySelector('.section-messages');
    const select = ['bonjour', 'Bonjour', 'wesh', 'Wesh', 'salut', 'Salut'];

    select.forEach((el) => {
      if (input === el) {
        const data = {
          message: 'Salut',
          date: new Date()
        };
        elMessages.innerHTML += responseBot(data);
      }
    });
  }

  sayWeather(input, weather) {
    const elMessages = document.querySelector('.section-messages');
    const select = ['meteo', 'Meteo', 'Météo', 'météo'];

    if (weather === undefined) {
      const data = {
        message: 'Il est impossible actuellement de recevoir la météo',
        date: new Date()
      };
      elMessages.innerHTML += responseBot(data);
    } else {
      select.forEach((el) => {
        if (input === el) {
          const data = {
            message: `Il fait actuellement ${weather}°C`,
            date: new Date()
          };
          elMessages.innerHTML += responseBot(data);
        }
      });
    }
  }

  getWeather() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords: { latitude, longitude } } = position;
      axios
        .get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day&timezone=auto`)
        .then((res) => {
          this.data = res.data.current.temperature_2m;
        });
    });
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
              <input type="text" class="input-user form-control" placeholder="Type your Message...">
            <div class="rounded-circle">
              <button class="btn btn-send rounded-circle ms-3">
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `);
  }

  run() {
    this.getWeather();
    this.el.innerHTML = this.render();
    this.onKeyUp();
  }
};

// const entities = [{
//   name: 'Roger',
//   action: [{
//     name: 'Bonjour',
//     word: ['bonjour', 'Bonjour', 'wesh', 'Wesh', 'salut', 'Salut'],
//     result: sayHello()
//   }]
// }, {
//   name: 'Echo',
//   action: [{
//     name: 'Bonjour',
//     word: ['bonjour', 'Bonjour', 'wesh', 'Wesh', 'salut', 'Salut'],
//     result: sayHello()
//   }, {
//     name: 'Meteo',
//     word: ['meteo', 'Meteo', 'Météo', 'météo'],
//     result: sayWeather()
//   }]
// }];

// const bots = entities.map((bot) => new Bot(bot));
// bots.forEach((el) => {
//   console.log(el.entity);
//   const word = 'Meteo';
//   bots.getActionByWord(word);
// });

export default Bot;
