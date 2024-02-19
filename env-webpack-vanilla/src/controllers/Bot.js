import axios from 'axios';
import body from '../views/body';

const Bot = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.i = 0;
    this.data = [];

    this.run();
  }

  onKeyUp() {
    const elInputUser = document.querySelector('.input-user');
    const elDisplayBot = document.querySelector('.display');

    elInputUser.addEventListener('keyup', (event) => {
      const keyWord = elInputUser.value;
      if ((event.key === 'Enter' || event.keyCode === 13) && keyWord !== '') {
        const newDiv = document.createElement('div');
        const newDiv2 = document.createElement('div');
        const newDiv3 = document.createElement('div');
        const newImage = document.createElement('i');
        const newP = document.createElement('p');
        const newSpan = document.createElement('span');
        newDiv.className = 'd-flex align-items-baseline mt-4';
        newDiv.id = `input${this.i}`;
        newDiv2.className = 'icon-user rounded-circle d-flex align-items-center justify-content-center me-2';
        newImage.className = 'fa-solid fa-user';
        newDiv3.className = 'history-message container-fluid';
        newP.className = 'm-3';
        newSpan.className = 'ms-3 mb-2';
        newP.innerHTML = keyWord;
        newDiv3.appendChild(newP);
        newDiv3.appendChild(newSpan);
        newDiv2.appendChild(newImage);
        newDiv.appendChild(newDiv2);
        newDiv.appendChild(newDiv3);
        elDisplayBot.appendChild(newDiv);
        elInputUser.value = '';
        this.sayHello(keyWord);
        this.i += 1;
        this.sayWeather(keyWord, this.data);
      }
    });
  }

  sayHello(input) {
    const elDisplayBot = document.querySelector('.display');
    const select = ['bonjour', 'Bonjour', 'wesh', 'Wesh', 'salut', 'Salut'];

    select.forEach((el) => {
      if (input === el) {
        const newDiv = document.createElement('div');
        const newDiv2 = document.createElement('div');
        const newDiv3 = document.createElement('div');
        const newImage = document.createElement('i');
        const newP = document.createElement('p');
        const newSpan = document.createElement('span');
        newDiv.className = 'd-flex flex-row-reverse align-items-baseline mt-4';
        newDiv.id = `response${this.i}`;
        newDiv2.className = 'icon-robot rounded-circle d-flex align-items-center justify-content-center mt-5 mb-3';
        newImage.className = 'fa-solid fa-robot';
        newDiv3.className = 'history-message-robot container-fluid me-2';
        newP.className = 'm-3';
        newSpan.className = 'me-3 mb-2 d-flex justify-content-end';
        newP.innerHTML = 'Salut';
        newDiv3.appendChild(newP);
        newDiv3.appendChild(newSpan);
        newDiv2.appendChild(newImage);
        newDiv.appendChild(newDiv2);
        newDiv.appendChild(newDiv3);
        elDisplayBot.appendChild(newDiv);
      }
    });
  }

  sayWeather(input, weather) {
    const elDisplayBot = document.querySelector('.display');
    const select = ['meteo', 'Meteo', 'Météo', 'météo'];

    select.forEach((el) => {
      if (input === el) {
        const newDiv = document.createElement('div');
        const newDiv2 = document.createElement('div');
        const newDiv3 = document.createElement('div');
        const newImage = document.createElement('i');
        const newP = document.createElement('p');
        const newSpan = document.createElement('span');
        newDiv.className = 'd-flex flex-row-reverse align-items-baseline mt-4';
        newDiv.id = `response${this.i}`;
        newDiv2.className = 'icon-robot rounded-circle d-flex align-items-center justify-content-center mt-5 mb-3';
        newImage.className = 'fa-solid fa-robot';
        newDiv3.className = 'history-message-robot container-fluid me-2';
        newP.className = 'm-3';
        newSpan.className = 'me-3 mb-2 d-flex justify-content-end';
        newP.innerHTML = `Il fait actuellement ${weather}`;
        newDiv3.appendChild(newP);
        newDiv3.appendChild(newSpan);
        newDiv2.appendChild(newImage);
        newDiv.appendChild(newDiv2);
        newDiv.appendChild(newDiv3);
        elDisplayBot.appendChild(newDiv);
      }
    });
  }

  render() {
    return body();
  }

  run() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords: { latitude, longitude } } = position;
      axios
        .get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day&timezone=auto`)
        .then((res) => {
          this.data = res.data.current.temperature_2m;
        });
    });

    this.el.innerHTML = this.render();
    this.onKeyUp();
  }
};

export default Bot;
