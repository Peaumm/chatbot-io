import Nav from '../views/nav';

const Error404 = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return `
      ${Nav(`
         <h1>Ceci est une erreur 404</h1>
      `)}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Error404;
