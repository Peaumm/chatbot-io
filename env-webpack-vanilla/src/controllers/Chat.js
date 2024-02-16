import viewNav from '../views/nav';

const Chat = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();
  }

  render() {
    return `
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
            <div class="col-9 overflow-scroll section-messages">
                <!-- User request -->
                <div class="d-flex align-items-baseline mt-4">
                  <div class="icon-user rounded-circle d-flex align-items-center justify-content-center me-2">
                    <i class="fa-solid fa-user"></i>
                  </div>
                  <div class="history-message container-fluid">
                    <p class="m-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                    quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
                    fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
                    consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                    doloremque. Quaerat provident commodi consectetur veniam similique ad 
                    earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
                    fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
                    suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                    modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
                    totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
                    quasi aliquam eligendi, placeat qui corporis! </p>
                    <span class="ms-3 mb-2"> 13/02/2024 13:50 </span>
                  </div>
                </div>
                <!-- Bot response -->
                <div class="d-flex flex-row-reverse align-items-baseline mt-4 ">
                  <div class="icon-robot rounded-circle d-flex align-items-center justify-content-center mt-5 mb-3"> 
                    <i class="fa-solid fa-robot"></i>
                  </div>
                  <div class="history-message-robot container-fluid me-2">
                      <p class="m-3"> <p class="m-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                      optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                      obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                      nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                      tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                      quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                      sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                      recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                      minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                      quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
                      fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
                      consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                      doloremque. Quaerat provident commodi consectetur veniam similique ad 
                      earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
                      fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
                      suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                      modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
                      totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
                      quasi aliquam eligendi, placeat qui corporis! </p>
                      <span class="me-3 mb-2 d-flex justify-content-end"> 13/02/2024 13:50 </span>
                  </div>
                </div>
                <!-- User request -->
                <div class="d-flex align-items-baseline mt-4">
                  <div class="icon-user rounded-circle d-flex align-items-center justify-content-center me-2">
                    <i class="fa-solid fa-user"></i>
                  </div>
                  <div class="history-message container-fluid">
                    <p class="m-3"> Ceci est un message </p>
                  </div>
                </div>
                <!-- Bot response -->
                <div class="d-flex flex-row-reverse align-items-baseline mt-4 ">
                  <div class="icon-robot rounded-circle d-flex align-items-center justify-content-center mt-5 mb-3"> 
                    <i class="fa-solid fa-robot"></i>
                  </div>
                  <div class="history-message-robot container-fluid me-2">
                      <p class="m-3"> Ceci est une réponse </p>
                  </div>
                </div>
      </div>
      <!-- Input Messages -->
      <div class="input-group input-message mt-3">
        <input type="text" class="form-control" placeholder="Type your Message...">
      <div class="rounded-circle">
        <button class="btn btn-send rounded-circle ms-3">
          <i class="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Chat;
