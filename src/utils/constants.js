import yosemiteSrc from "../images/Yosemite.svg";
import lagoSrc from "../images/Louise.svg";
import montañasSrc from "../images/Montañas-calvas.svg";
import latemarSrc from "../images/Latemar.svg";
import vanoiseSrc from "../images/Vanoise.svg";
import braiesSrc from "../images/Di-Braies.svg";
let inputName = document.querySelector(".popup__input_name");
let inputJob = document.querySelector(".popup__input_job");
let profileFullName = document.querySelector(".profile-info__fullname");
let profileJob = document.querySelector(".profile-info__job");
let inputTitle = document.querySelector("#title-input");
let inputUrlImage = document.querySelector("#url-input");
let inputUrlImageAvatar = document.querySelector("#avatar-input");
const popupImage = document.querySelector(".elements__place-popup");
const popupDescription = document.querySelector(".elements__description-popup");
const popupElement = document.querySelector(".elements__popup");
const closeButton = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const openFormButton = document.querySelector(".edit-btn");
const addButton = document.querySelector(".add-btn");
const popupEditProfile = document.querySelector(".popup");
const popupNewPlace = document.querySelector(".popup_content_new-place");
const saveButton = document.querySelector(".popup__save-btn");
const createButton = document.querySelector(".popup__create-btn");
const optionButton = document.querySelector(".popup__confirm");
const profileImage = document.querySelector(".profile-info__avatar-img");
const avatarButton = document.querySelector(".popup__button-avatar");
const parametres = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

export {
  inputName,
  inputJob,
  profileFullName,
  profileJob,
  inputTitle,
  inputUrlImage,
  popupImage,
  popupDescription,
  popupElement,
  closeButton,
  overlay,
  openFormButton,
  addButton,
  popupEditProfile,
  popupNewPlace,
  saveButton,
  createButton,
  parametres,
  optionButton,
  profileImage,
  inputUrlImageAvatar,
  avatarButton,
};
