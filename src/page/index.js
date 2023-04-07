import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  addButton,
  createButton,
  parametres,
  saveButton,
  inputName,
  inputTitle,
  inputUrlImage,
  profileFullName,
  inputJob,
  profileJob,
  openFormButton,
  inputUrlImageAvatar,
  profileImage,
  avatarButton,
} from "../utils/constants.js";

import { Api } from "../components/Api.js";
import { removeCards, updateLikes, likeCards } from "../utils/utils";

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

export const createCard = (data) => {
  const cardElement = new Card({
    data,
    handleCardClick: {
      name: data.name,
      link: data.link,
      id: data._id,
    },
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

const popupProfileForm = new PopupWithForm(".popup", handleProfileFormSubmit);
popupProfileForm.setEventListeners();

const popupAddForm = new PopupWithForm(
  ".popup_content_new-place",
  handleAddFormSubmit
);
popupAddForm.setEventListeners();

const popupNewAvatar = new PopupWithForm(
  ".poup_new-profile-photo",
  handleNewProfilePhoto
);
popupNewAvatar.setEventListeners();

function handleNewProfilePhoto() {
  avatarButton.textContent = "Guardando...";
  avatarButton.disabled = true;
  const api = new Api({
    avatar: inputUrlImageAvatar.value,
    baseUrl:
      "https://around.nomoreparties.co/v1/web_es_cohort_03/users/me/avatar",
  });
  api.setNewAvatar().then((data) => {
    profileImage.src = data.avatar;
    avatarButton.textContent = "Guarda";
    avatarButton.disabled = false;
    popupNewAvatar.close();
  });
}

function handleAddFormSubmit() {
  createButton.textContent = "Guardando...";
  createButton.disabled = true;
  const api = new Api({
    name: inputTitle.value,
    link: inputUrlImage.value,
    baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_03/cards",
  });
  api.createNewCard().then((data) => {
    const card = createCard({
      name: data.name,
      link: data.link,
      id: data._id,
    });
    card.setAttribute("data-id", data._id);
    card.setAttribute("data-user-id", data.owner._id);
    updateLikes(card);
    likeCards(card);
    removeCards(card);
    section.addItemAtIniticial(card);
    popupAddForm.close();
    createButton.textContent = "Crear";
    createButton.disabled = false;
  });
}

function handleProfileFormSubmit() {
  saveButton.textContent = "Guardando...";
  saveButton.disabled = true;
  const profileUserInfo = profileUser.getUserInfo();
  profileFullName.textContent = profileUserInfo.name;
  profileJob.textContent = profileUserInfo.job;
  popupProfileForm.close();
}

const profileUser = new UserInfo({
  userName: inputName,
  userJob: inputJob,
});

const apiUserInfo = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_03/users/me",
  name: profileFullName,
  about: profileJob,
});
apiUserInfo.getUserInfo();

const apiInitialCards = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_03/cards",
});
apiInitialCards.setInitialCards();

saveButton.addEventListener("click", () => {
  const apiEditProfile = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_03/users/me",
    name: profileFullName.textContent,
    about: profileJob.textContent,
  });
  apiEditProfile.editProfile();
});

openFormButton.addEventListener("click", () => {
  popupProfileForm.open();
  saveButton.textContent = "Guardar";
  saveButton.disabled = false;
});

addButton.addEventListener("click", () => {
  popupAddForm.open();
});

profileImage.addEventListener("click", () => {
  popupNewAvatar.open();
});

export { handleAddFormSubmit, handleProfileFormSubmit, handleNewProfilePhoto };
