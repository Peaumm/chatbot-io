export default (botName) => {
  const name = botName;
  return (`
  <div class="bot d-flex align-items-center my-3">
    <div class="icon-robot-list rounded-circle d-flex align-items-center justify-content-center"> 
      <i class="fa-solid fa-robot"></i>
    </div>
    <div class="mx-2">
      <h3 class="fw-bold text-light mb-0">${name}</h3>
    </div>
    <div id="" class="notification rounded-circle d-flex justify-content-center align-items-center">
      <p>0</p>
    </div>
  </div>
  `);
};
