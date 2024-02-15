const Bot = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  onKeyUp() {
    const elInputUser = document.querySelector('.input-user');
    const elDisplayBot = document.querySelector('.display');
    let i = 0;

    elInputUser.addEventListener('keyup', (event) => {
      const keyWord = elInputUser.value;
      if (event.key === 'Enter' || event.keyCode === 13) {
        const newDiv = document.createElement('div');
        newDiv.id = `input${i}`;
        i += 1;
        newDiv.innerHTML = keyWord;
        elDisplayBot.appendChild(newDiv);
        elInputUser.value = '';
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
