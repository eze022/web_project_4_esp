import Card from "../components/Card.js";
import {
  openFormButton,
  addButton,
  saveButton,
  createButton,
  optionButton,
  profileImage,
  avatarButton,
} from "./constants.js";
import {
  handleAddFormSubmit,
  handleProfileFormSubmit,
  handleNewProfilePhoto,
} from "../page/index.js";
import { Api } from "../components/Api.js";
import Popup from "../components/Popup.js";

const currentUser = () => {
  const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_03/users/me",
  });
  return api.getCurrentUser();
};

export function updateLikes(nodeCard) {
  const likesElement = nodeCard.querySelector(".elements__likes");
  const cardId = nodeCard.getAttribute("data-id");
  const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_03/cards",
  });
  currentUser().then((currentUserName) => {
    api.getLikes().then((data) => {
      data.forEach((card) => {
        if (card._id === cardId) {
          likesElement.textContent = card.likes.length;
          if (card.likes.some((like) => like._id === currentUserName)) {
            const heartLike = nodeCard.querySelector(".elements__icon");
            heartLike.classList.add("elements__icon_activate");
          } else {
            const heartLike = nodeCard.querySelector(".elements__icon");
            heartLike.classList.remove("elements__icon_activate");
          }
        }
      });
    });
  });
}

function likeCards(nodeCard) {
  const heartLike = nodeCard.querySelector(".elements__icon");
  const card = nodeCard.closest(".elements__cards");
  let likeCount;

  heartLike.addEventListener("click", function (event) {
    const cardId = card.getAttribute("data-id");
    const putLike = new Api({
      cardId: cardId,
    });
    if (event.target.classList.contains("elements__icon_activate")) {
      updateLikes(nodeCard);
      putLike.deleteLikes();
      event.target.classList.remove("elements__icon_activate");
      event.target.removeEventListener("click", likeCards);
    } else {
      updateLikes(nodeCard);
      putLike.putLike();
      event.target.classList.add("elements__icon_activate");
    }
  });
}

function removeCards(data) {
  const cardTrash = data.querySelector(".elements__trash");
  const ownerId = data.getAttribute("data-user-id");

  currentUser()
    .then((currentUserId) => {
      if (ownerId === currentUserId) {
        cardTrash.classList.add("elements__trash_visible");
      }
    })
    .catch((err) => console.log(err));

  cardTrash.addEventListener("click", function (event) {
    const card = data.closest(".elements__cards");
    const cardId = card.getAttribute("data-id");
    const deleteCard = new Api({
      cardId: cardId,
    });
    const popupConfirm = new Popup(".popup_delete");
    popupConfirm.open();
    popupConfirm.setEventListeners();
    optionButton.addEventListener("click", () => {
      deleteCard.deleteCard();
      card.remove();
      popupConfirm.close();
    });
  });
}

saveButton.addEventListener("click", handleProfileFormSubmit);
createButton.addEventListener("click", handleAddFormSubmit);
avatarButton.addEventListener("click", handleNewProfilePhoto);
profileImage.addEventListener("mouseover", (event) => {
  const pencil = document.querySelector(".profile-info__pencil-img");
  pencil.classList.add("profile-info__pencil-img_visible");
  profileImage.classList.add("profile-info__avatar-img_hover");
});

profileImage.addEventListener("mouseout", (event) => {
  const pencil = document.querySelector(".profile-info__pencil-img");
  pencil.classList.remove("profile-info__pencil-img_visible");
  profileImage.classList.remove("profile-info__avatar-img_hover");
});

export { likeCards, removeCards };
