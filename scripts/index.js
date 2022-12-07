let inputName = document.querySelector(".popup__input_name");
let inputJob = document.querySelector(".popup__input_job");
let profileFullName = document.querySelector(".profile-info__fullname");
let profileJob = document.querySelector(".profile-info__job");
let inputTitle = document.querySelector(".popup__input_title");
let inputUrlImage = document.querySelector(".popup__input_url-image");
const overlay = document.querySelector(".overlay");
const popupEditProfile = document.querySelector(".popup");
const popupNewPlace = document.querySelector(".popup_new-place");
const openFormButton = document.querySelector(".edit-btn");
const closeButton = document.querySelector(".popup__close-btn");
const closeButtonNewPlace = document.querySelector(
  ".popup__close-btn_new-place"
);
const closeButtonShowImage = document.querySelector(
  ".popup__close-btn_show-image"
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

const cardTemplate = document
  .querySelector("#cards-template")
  .content.querySelector(".elements__cards");

function createCardInitial(data) {
  const cardsElements = cardTemplate.cloneNode(true);
  cardsElements.querySelector(".elements__description").textContent = data.name;
  cardsElements.querySelector(".elements__place").src = data.link;

  cardsElements
    .querySelector(".elements__place")
    .addEventListener("click", (event) => {
      popupImage.classList.add("elements__popup_activate");
      overlay.classList.toggle("overlay_visible");
      popupImage.querySelector(".elements__place-popup").src = data.link;
      popupImage.querySelector(".elements__description-popup").textContent =
        data.name;
    });
  return cardsElements;
}

initialCards.forEach((card) => {
  const cardElement = createCardInitial(card);
  cardContainer.append(cardElement);
});

function createCard(card) {
  const cardTemplate = document.querySelector("#cards-template").content;
  const cardsElements = cardTemplate
    .querySelector(".elements__cards")
    .cloneNode(true);
  const cardsTitleElements = cardsElements.querySelector(
    ".elements__description"
  );
  const cardsLinkElements = cardsElements.querySelector(".elements__place");
  const cardTrash = cardsElements.querySelector(".elements__trash");
  cardsTitleElements.textContent = inputTitle.value;
  cardsLinkElements.src = inputUrlImage.value;
  inputTitle.value = "";
  inputUrlImage.value = "";
  overlay.classList.toggle("overlay_visible");
  popupNewPlace.classList.toggle("popup_visible");
  const heartLike = cardsElements
    .querySelector(".elements__icon")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("elements__icon_activate");
    });

  cardTrash.addEventListener("click", function () {
    const card = cardTrash.closest(".elements__cards");
    card.remove();
  });

  cardsElements
    .querySelector(".elements__place")
    .addEventListener("click", (event) => {
      popupImage.classList.add("elements__popup_activate");
      overlay.classList.toggle("overlay_visible");
      popupImage.querySelector(".elements__place-popup").src =
        inputUrlImage.value;
      popupImage.querySelector(".elements__description-popup").textContent =
        inputTitle.value;
    });
  return cardContainer.prepend(cardsElements);
}

const cardTrashs = document.querySelectorAll(".elements__trash");
cardTrashs.forEach((item) => {
  item.addEventListener("click", function () {
    const card = item.closest(".elements__cards");
    card.remove();
  });
});

const heartLikes = document.querySelectorAll(".elements__icon");
heartLikes.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.target.classList.toggle("elements__icon_activate");
  });
});

openFormButton.addEventListener("click", toggleFormEditProfile);
closeButton.addEventListener("click", toggleFormEditProfile);
closeButtonNewPlace.addEventListener("click", toggleFormNewPlace);
saveButton.addEventListener("click", saveChanges);
addButton.addEventListener("click", submitForm);
createButton.addEventListener("click", createCard);
closeButtonShowImage.addEventListener("click", toggleShowImage);
