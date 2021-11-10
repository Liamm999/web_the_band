const allBuyBtns = document.querySelectorAll(".buy-ticket");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".ti-close");
const modalContainer = document.querySelector(".ticket-modal-container");

function showModal() {
  modal.classList.remove("hide");
  modal.classList.add("show");
}

function hideModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
}

// stopPropagation
function stopHideContainer(event) {
  event.stopPropagation();
}

for (const buyBtns of allBuyBtns) {
  buyBtns.addEventListener("click", showModal);
}

closeBtn.addEventListener("click", hideModal);
modal.addEventListener("click", hideModal); // click on modal still hideModa
modalContainer.addEventListener("click", stopHideContainer);

