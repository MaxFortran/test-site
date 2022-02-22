const lock = document.querySelector("body");
const openModal = document.querySelector(".open-modal");
const openModal2 = document.querySelector("#open");
const closeModal = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");

const messageSent = document.querySelector(".message");
const messageClose = document.querySelector(".message-close");

const form = document.getElementById("form");

openModal.addEventListener("click", (even) => {
  even.preventDefault();
  modal.classList.add("active");
  lock.classList.add("lock");
});

openModal2.addEventListener("click", (even) => {
  even.preventDefault();
  modal.classList.add("active");
  lock.classList.add("lock");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  lock.classList.remove("lock");
  form.reset();
});

messageClose.addEventListener("click", () => {
  messageSent.classList.remove("show-message");
});

form.addEventListener("submit", formSend);

async function formSend(even) {
  even.preventDefault();

  let formData = new FormData(form);
  modal.classList.add("sending");

  let response = await fetch("mail.php", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    let result = await response.json();

    form.reset();
    modal.classList.remove("sending");
    modal.classList.remove("active");
    messageSent.classList.add("show-message");
    closeMessageTimer();
  } else {
    alert("Ошибка, заявка не отправлена!");
    form.reset();
    modal.classList.remove("sending");
    modal.classList.remove("active");
  }
}

function closeMessageTimer() {
  setTimeout(() => {
    messageSent.classList.remove("show-message");
  }, 3000);
}

let selector = document.querySelector("#tel");
let im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);
