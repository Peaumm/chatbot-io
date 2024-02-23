export default (data) => {
  const { message, date } = data;

  return (`
    <div class="d-flex flex-row-reverse align-items-center mt-4">
      <div class="icon-user rounded-circle d-flex align-items-center justify-content-center ms-2">
        <i class="fa-solid fa-user"></i>
      </div>
      <div class="history-message container-fluid d-flex flex-column align-items-end ">
        <p class="m-3">${message}</p>
        <span class="me-3 mb-2">${date.toLocaleString()}</span>
      </div>
    </div>
  `);
};
