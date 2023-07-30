const btnopen = document.querySelectorAll(".show-modal");
console.log(btnopen);

const btnclose = document.querySelector(".close-modal");
console.log(btnclose);

const modal = document.querySelector(".modal");
console.log(modal);

const overlay = document.querySelector(".overlay");
console.log(overlay);

const open = function (event) {
  const btn = event.target.dataset.text;
  const modalText = document.querySelector(".modal p");
  modalText.textContent = btn;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const close = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnopen.length; i++) {
  btnopen[i].addEventListener("click", open);
  overlay.addEventListener("click", close);
}

btnclose.addEventListener("click", close);

const btn = document.getElementById("btn");
const chat = document.getElementById("chat");

btn.addEventListener("click", function () {
  if (chat.style.display === "none") {
    chat.style.display = "block";
  } else {
    chat.style.display = "none";
  }
});
