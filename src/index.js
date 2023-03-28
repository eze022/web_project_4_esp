import "./index.css";
import FormValidator from "./components/FormValidator.js";
import Card from "./components/Card.js";
import Popup from "./components/Popup.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";

import {
  addButton,
  createButton,
  parametres,
  saveButton,
  initialCards,
  inputName,
  inputTitle,
  inputUrlImage,
  profileFullName,
  inputJob,
  profileJob,
  openFormButton,
} from "./utils/constants.js";

const formValidator = new FormValidator(parametres);
formValidator.enableValidation();

document.addEventListener("DOMContentLoaded", () => {
  const cardImage = document.querySelectorAll(".elements__place");
  const popupWithImage = new PopupWithImage(".elements__popup");

  cardImage.forEach((card) => {
    card.addEventListener("click", (event) => {
      popupWithImage.setEventListeners();
      popupWithImage.open(event);
    });
  });
});

const createCard = (data) => {
  const cardElement = new Card({
    data,
    handleCardClick: { name: data.name, link: data.link },
  });
  const newCard = cardElement.generateCard();
  newCard.addEventListener("click", (event) => {
    const popupWithImage = new PopupWithImage(".elements__popup");
    popupWithImage.setEventListeners();
    popupWithImage.open(event);
  });

  return newCard;
};

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createCard({
        name: item.name,
        link: item.link,
      });
      return card;
    },
  },
  ".elements__table"
);
section.renderItems();

const popupEditButton = new Popup(".popup", ".edit-btn");
const popupNewCard = new Popup(".popup_content_new-place", ".add-btn");

const popupProfileForm = new PopupWithForm(".popup", handleProfileFormSubmit);
popupProfileForm.setEventListeners();

const popupAddForm = new PopupWithForm(
  ".popup_content_new-place",
  handleAddFormSubmit
);
popupAddForm.setEventListeners();

function handleAddFormSubmit() {
  const card = createCard({
    name: inputTitle.value,
    link: inputUrlImage.value,
  });
  section.addItemAtIniticial(card);
  popupAddForm.close();
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  const profileUserInfo = profileUser.getUserInfo();
  profileFullName.textContent = profileUserInfo.name;
  profileJob.textContent = profileUserInfo.job;
  popupProfileForm.close();
}

const profileUser = new UserInfo({
  userName: inputName,
  userJob: inputJob,
});

openFormButton.addEventListener("click", () => {
  popupProfileForm.open();
});

addButton.addEventListener("click", () => {
  popupAddForm.open();
});

export { handleAddFormSubmit, handleProfileFormSubmit };
