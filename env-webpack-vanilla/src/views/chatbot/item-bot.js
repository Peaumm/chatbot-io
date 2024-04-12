export default (botId, botName, botNotif) => {
  const id = botId;
  const name = botName;
  const notif = botNotif;

  return (`
  <div class="bot d-flex align-items-center my-3" data-id="${id}">
    <div class="icon-robot-list rounded-circle d-flex align-items-center justify-content-center"> 
      <i class="fa-solid fa-robot"></i>
    </div>
    <div class="mx-2">
      <h3 class="fw-bold text-light mb-0 bot-name-list">${name}</h3>
    </div>
    <div id="" class="notification rounded-circle d-flex justify-content-center align-items-center">
      <p>${notif}</p>
    </div>
  </div>
  `);
};
