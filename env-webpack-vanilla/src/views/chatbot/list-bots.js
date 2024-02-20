import viewItemBot from './item-bot';

export default () => (`
  <div class="col-2 p-0 d-flex flex-column text-align align-items-center overflow-auto border-end border-dark">
    ${viewItemBot()}
    ${viewItemBot()}
  </div>
`);
