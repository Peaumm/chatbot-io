const Bot = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.i = 0;

    this.run();
  }

  onKeyUp() {
    const elInputUser = document.querySelector('.input-user');
    const elDisplayBot = document.querySelector('.display');

    elInputUser.addEventListener('keyup', (event) => {
      const keyWord = elInputUser.value;
      if (event.key === 'Enter' || event.keyCode === 13) {
        const newDiv = document.createElement('div');
        newDiv.id = `input${this.i}`;
        newDiv.innerHTML = keyWord;
        elDisplayBot.appendChild(newDiv);
        elInputUser.value = '';
        this.sayHello(keyWord);
        this.i += 1;
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
    this.el.innerHTML = this.render();
    this.onKeyUp();
  }
};

export default Bot;
