export default (data) => {
  const { message, date } = data;

  return (`
    <div class="d-flex flex-row-reverse align-items-baseline mt-4 ">
      <div class="icon-robot rounded-circle d-flex align-items-center justify-content-center mt-5 mb-3"> 
        <i class="fa-solid fa-robot"></i>
      </div>
      <div class="history-message-robot container-fluid me-2">
          <p class="m-3">${message}</p>
          <span class="me-3 mb-2 d-flex justify-content-end">${date.toLocaleString()}</span>
      </div>
    </div>
  `);
};
