import viewNav from './nav';
import viewListsofBots from './lists-bots';

export default () => (`
  <div>${viewNav()}</div>
    <div class="container-fluid">
      <div class="row">
         ${viewListsofBots(id)}
          <div class="col-1 delimitation d-flex flex-column"
            <hr>
          </div>
          <!-- Messages -->
          <div class="col-9 overflow-auto section-messages display">
          </div>
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
