import axios from 'axios';

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
        newDiv.id = `input${this.i}`;
        newDiv.innerHTML = keyWord;
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
        newDiv.id = `response${this.i}`;
        newDiv.innerHTML = 'Salut';
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
        newDiv.id = `response${this.i}`;
        newDiv.innerHTML = `Il fait actuellement ${weather}`;
        elDisplayBot.appendChild(newDiv);
      }
    });
  }

  render() {
    return `
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>Je suis un bot</h1>
          </div>
          <div class="col-12 display">
          </div>
        </div>
        <div class="row">
          <input class="input-user"></input>
        </div>
      </div>
    `;
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
