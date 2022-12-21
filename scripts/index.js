let inputName = document.querySelector(".popup__input_name");
let inputJob = document.querySelector(".popup__input_job");
let profileFullName = document.querySelector(".profile-info__fullname");
let profileJob = document.querySelector(".profile-info__job");
let inputTitle = document.querySelector(".popup__input_title");
let inputUrlImage = document.querySelector("#url-input");
const overlay = document.querySelector(".overlay");
const popupEditProfile = document.querySelector(".popup");
const popupNewPlace = document.querySelector(".popup_content_new-place");
const openFormButton = document.querySelector(".edit-btn");
const closeButton = document.querySelector(".popup__close-btn");
const closeButtonNewPlace = document.querySelector(
  ".popup__close-btn_content_new-place"
);
const closeButtonShowImage = document.querySelector(
  ".elements__close-btn_content_show-image"
);
const saveButton = document.querySelector(".popup__save-btn");
const addButton = document.querySelector(".add-btn");
const createButton = document.querySelector(".popup__create-btn");
const cardContainer = document.querySelector(".elements__table");
const popupImage = document.querySelector(".elements__popup");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "./images/Yosemite.svg",
  },
  {
    name: "Lago Louise",
    link: "./images/Louise.svg",
  },
  {
    name: "Montañas Calvas",
    link: "./images/Montañas-calvas.svg",
  },
  {
    name: "Latemar",
    link: "./images/Latemar.svg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "./images/Vanoise.svg",
  },
  {
    name: "Lago di Braies",
    link: "./images/Di-Braies.svg",
  },
];

inputName.value = profileFullName.textContent;
inputJob.value = profileJob.textContent;

function createCardInitial(data) {
  const cardTemplate = document
    .querySelector("#cards-template")
    .content.querySelector(".elements__cards");
  const cardsElements = cardTemplate.cloneNode(true);
  cardsElements.querySelector(".elements__description").textContent = data.name;
  cardsElements.querySelector(".elements__place").src = data.link;
  cardsElements.setAttribute("data-link", data.link);
  cardsElements.setAttribute("data-name", data.name);
  cardsElements
    .querySelector(".elements__place")
    .addEventListener("click", showInitialImages);
  removeCards(cardsElements);
  likeCards(cardsElements);

  return cardsElements;
}

function createCard(card) {
  const cardTemplate = document.querySelector("#cards-template").content;
  const cardsElements = cardTemplate
    .querySelector(".elements__cards")
    .cloneNode(true);
  const cardsTitleElements = cardsElements.querySelector(
    ".elements__description"
  );
  const cardsLinkElements = cardsElements.querySelector(".elements__place");
  cardsTitleElements.textContent = inputTitle.value;
  cardsLinkElements.src = inputUrlImage.value;
  cardsElements.setAttribute("data-link", inputUrlImage.value);
  cardsElements.setAttribute("data-name", inputTitle.value);
  popupNewPlace.classList.toggle("popup_visible");
  overlay.classList.toggle("overlay_visible");
  inputTitle.value = "";
  inputUrlImage.value = "";

  likeCards(cardsElements);
  removeCards(cardsElements);
  cardsElements
    .querySelector(".elements__place")
    .addEventListener("click", showNewImages);

  return cardContainer.prepend(cardsElements);
}

function showInitialImages(event) {
  const cardNode = event.target.closest(".elements__cards");
  popupImage.classList.add("elements__popup_activate");
  overlay.classList.toggle("overlay_visible");
  popupImage.querySelector(".elements__place-popup").src =
    cardNode.getAttribute("data-link");
  popupImage.querySelector(".elements__description-popup").textContent =
    cardNode.getAttribute("data-name");
  event.target.removeEventListener("click", createCard);
}

function showNewImages(event) {
  const cardNode = event.target.closest(".elements__cards");
  popupImage.classList.add("elements__popup_activate");
  overlay.classList.toggle("overlay_visible");
  popupImage.querySelector(".elements__place-popup").src =
    cardNode.getAttribute("data-link");
  popupImage.querySelector(".elements__description-popup").textContent =
    cardNode.getAttribute("data-name");
}

initialCards.forEach((card) => {
  const cardElement = createCardInitial(card);
  cardContainer.append(cardElement);
});

function toggleFormEditProfile() {
  overlay.classList.toggle("overlay_visible");
  popupEditProfile.classList.toggle("popup_visible");
}

function toggleFormNewPlace() {
  overlay.classList.toggle("overlay_visible");
  popupNewPlace.classList.toggle("popup_visible");
}

function toggleShowImage() {
  overlay.classList.toggle("overlay_visible");
  popupImage.classList.remove("elements__popup_activate");
}

function saveChanges() {
  profileFullName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  overlay.classList.toggle("overlay_visible");
  popupEditProfile.classList.toggle("popup_visible");
}

function submitForm(evt) {
  evt.preventDefault;
  popupNewPlace.classList.toggle("popup_visible");
  overlay.classList.toggle("overlay_visible");
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

function closePopupOverlay() {
  if (popupEditProfile.classList.contains("popup_visible")) {
    overlay.classList.toggle("overlay_visible");
    popupEditProfile.classList.toggle("popup_visible");
  } else if (popupNewPlace.classList.contains("popup_visible")) {
    overlay.classList.toggle("overlay_visible");
    popupNewPlace.classList.toggle("popup_visible");
  } else if (popupImage.classList.contains("elements__popup_activate")) {
    overlay.classList.toggle("overlay_visible");
    popupImage.classList.remove("elements__popup_activate");
  }
}

function closePopupEsc(evt) {
  if (
    popupEditProfile.classList.contains("popup_visible") &&
    evt.key === "Escape"
  ) {
    overlay.classList.toggle("overlay_visible");
    popupEditProfile.classList.toggle("popup_visible");
  } else if (
    popupNewPlace.classList.contains("popup_visible") &&
    evt.key === "Escape"
  ) {
    overlay.classList.toggle("overlay_visible");
    popupNewPlace.classList.toggle("popup_visible");
  } else if (
    popupImage.classList.contains("elements__popup_activate") &&
    evt.key === "Escape"
  ) {
    overlay.classList.toggle("overlay_visible");
    popupImage.classList.remove("elements__popup_activate");
  }
}

openFormButton.addEventListener("click", toggleFormEditProfile);
closeButton.addEventListener("click", toggleFormEditProfile);
closeButtonNewPlace.addEventListener("click", toggleFormNewPlace);
saveButton.addEventListener("click", saveChanges);
addButton.addEventListener("click", submitForm);
createButton.addEventListener("click", createCard);
closeButtonShowImage.addEventListener("click", toggleShowImage);
overlay.addEventListener("click", closePopupOverlay);
document.addEventListener("keydown", closePopupEsc);
