import viewNav from './nav';

export default () => (`
  <div>${viewNav()}</div>
    <div class="container-fluid">
      <div class="row">
          <div class="col-2 p-0 d-flex flex-column text-align align-items-center overflow-auto border-end border-dark">
            <!-- First Bot -->
            <div class="bot d-flex align-items-center my-4">
              <div class="icon-robot-list rounded-circle d-flex align-items-center justify-content-center"> 
                <i class="fa-solid fa-robot"></i>
              </div>
              <div class="mx-2">
                <h3 class="fw-bold text-light mb-0">Echo</h3>
              </div>
              <div class="notification rounded-circle d-flex justify-content-center">
                <p>1</p>
              </div>
            </div>
            <!-- Second Bot -->
            <div class="bot d-flex align-items-center my-4">
              <div class="icon-robot-list rounded-circle d-flex align-items-center justify-content-center"> 
                <i class="fa-solid fa-robot"></i>
              </div>
              <div class="mx-2">
                <h3 class="fw-bold text-light mb-0">Roger</h3>
              </div>
              <div class="notification rounded-circle d-flex justify-content-center">
                <p>1</p>
              </div>
            </div>  
            <!-- Third bot -->
            <div class="bot d-flex align-items-center my-4 ">
              <div class="icon-robot-list rounded-circle d-flex align-items-center justify-content-center"> 
                  <i class="fa-solid fa-robot"></i>
              </div>
              <div class="mx-2">
                <h3 class="fw-bold text-light mb-0">Jarvis</h3>
              </div>
              <div class="notification rounded-circle d-flex justify-content-center">
                <p>1</p>
              </div>
            </div>
          </div>
          <div class="col-1 delimitation d-flex flex-column"
            <hr>
          </div>
          <!-- Messages -->
          <div class="col-9 overflow-scroll section-messages display">
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
