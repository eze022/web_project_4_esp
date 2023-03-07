import { Card } from "./Card.js";
import { createCard, closePopupOverlay, closePopupEsc } from "./index.js";

const popupImage = document.querySelector(".elements__place-popup");
const popupDescription = document.querySelector(".elements__description-popup");
const popupElement = document.querySelector(".elements__popup");
const closeButton = document.querySelector(".elements__close-btn");
const closeButtonNewPlace = document.querySelector(
  ".popup__close-btn_content_new-place"
);
const closeFormButton = document.querySelector(".popup__close-btn");
const overlay = document.querySelector(".overlay");
const openFormButton = document.querySelector(".edit-btn");
const addButton = document.querySelector(".add-btn");
const popupEditProfile = document.querySelector(".popup");
const popupNewPlace = document.querySelector(".popup_content_new-place");
const saveButton = document.querySelector(".popup__save-btn");
const createButton = document.querySelector(".popup__create-btn");

function _handleOpenPopup(image, text) {
  popupImage.src = image;
  popupDescription.textContent = text;
  popupElement.classList.add("elements__popup_activate");
  overlay.classList.toggle("overlay_visible");
}

function _handleClosePopup() {
  popupElement.classList.remove("elements__popup_activate");
  overlay.classList.remove("overlay_visible");
}

const showImage = (element) => {
  element.addEventListener("click", (event) => {
    const cardNode = event.target.closest(".elements__cards");
    popupImage.src = cardNode.getAttribute("data-link");
    popupDescription.textContent = cardNode.getAttribute("data-name");
    _handleOpenPopup(popupImage.src, popupDescription.textContent);
  });
};

function toggleFormEditProfile() {
  overlay.classList.toggle("overlay_visible");
  popupEditProfile.classList.toggle("popup_visible");
}
function toggleFormNewPlace() {
  overlay.classList.toggle("overlay_visible");
  popupNewPlace.classList.toggle("popup_visible");
}

function submitForm(evt) {
  evt.preventDefault;
  popupNewPlace.classList.toggle("popup_visible");
  overlay.classList.toggle("overlay_visible");
}

function saveChanges() {
  profileFullName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  overlay.classList.toggle("overlay_visible");
  popupEditProfile.classList.toggle("popup_visible");
}

function likeCards(nodeCard) {
  const heartLike = nodeCard
    .querySelector(".elements__icon")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("elements__icon_activate");
      event.target.removeEventListener("click", likeCards);
    });
}

function removeCards(nodeCard) {
  const cardTrash = nodeCard.querySelector(".elements__trash");
  cardTrash.addEventListener("click", function (event) {
    const card = nodeCard.closest(".elements__cards");
    card.remove();
    event.target.removeEventListener("click", removeCards);
  });
}

const HandlecloseButton = () => {
  closeButton.addEventListener("click", () => {
    _handleClosePopup();
  });
};

openFormButton.addEventListener("click", toggleFormEditProfile);
closeFormButton.addEventListener("click", toggleFormEditProfile);
closeButtonNewPlace.addEventListener("click", toggleFormNewPlace);
addButton.addEventListener("click", submitForm);
saveButton.addEventListener("click", saveChanges);
createButton.addEventListener("click", createCard);
overlay.addEventListener("click", closePopupOverlay);
document.addEventListener("keydown", closePopupEsc);

export {
  _handleClosePopup,
  _handleOpenPopup,
  showImage,
  HandlecloseButton,
  likeCards,
  removeCards,
};
