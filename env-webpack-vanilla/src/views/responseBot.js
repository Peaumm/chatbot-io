export default (data) => {
  const { message, date } = data;

  return (`
    <div class="d-flex flex-row align-items-center mt-4 ">
      <div class="icon-robot rounded-circle d-flex align-items-center justify-content-center"> 
        <i class="fa-solid fa-robot"></i>
      </div>
      <div class="history-message-robot container-fluid ms-2">
          <p class="m-3">${message}</p>
          <span class="ms-3 mb-2 d-flex justify-content-start">${date.toLocaleString()}</span>
      </div>
    </div>
  `);
};
