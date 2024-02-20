export default (data) => {
  const { message, date } = data;

  return (`
    <div class="d-flex align-items-baseline mt-4">
      <div class="icon-user rounded-circle d-flex align-items-center justify-content-center me-2">
        <i class="fa-solid fa-user"></i>
      </div>
      <div class="history-message container-fluid">
        <p class="m-3">${message}</p>
        <span class="ms-3 mb-2">${date.toLocaleString()}</span>
      </div>
    </div>
  `);
};
