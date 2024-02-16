const Bouton = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return '<a href="/bot"><button>Aller au bot</button></a>';
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Bouton;
