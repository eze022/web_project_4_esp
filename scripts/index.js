let inputName = document.querySelector(".popup__input_name");
let inputJob = document.querySelector(".popup__input_job");
let profileFullName = document.querySelector(".profile-info__fullname");
let profileJob = document.querySelector(".profile-info__job");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const openFormButton = document.querySelector(".edit-btn");
const closeButton = document.querySelector(".popup__close-btn");
const saveButton = document.querySelector(".popup__save-btn");
inputName.value = profileFullName.textContent;
inputJob.value = profileJob.textContent;

function toggleForm() {
  overlay.classList.toggle("overlay_visible");
  popup.classList.toggle("popup_visible");
}

openFormButton.addEventListener("click", toggleForm);
closeButton.addEventListener("click", toggleForm);

function saveChanges() {
  profileFullName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  overlay.classList.toggle("overlay_visible");
  popup.classList.toggle("popup_visible");
}

saveButton.addEventListener("click", saveChanges);

function submitForm(evt) {
  evt.preventDefault;
}

saveButton.addEventListener("click", submitForm);
