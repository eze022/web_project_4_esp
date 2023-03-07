import {
  _handleClosePopup,
  _handleOpenPopup,
  showImage,
  HandlecloseButton,
  likeCards,
  removeCards,
} from "./utils.js";

import { initialCards } from "./index.js";

export class Card {
  constructor(text, image) {
    (this._text = text), (this._image = image);
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector("#cards-template")
      .content.querySelector(".elements__cards")
      .cloneNode(true);

    return cardTemplate;
  }

  _setAtributte() {
    this._element.setAttribute("data-link", this._image);
    this._element.setAttribute("data-name", this._text);
  }

  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();
    this._setAtributte();
    this._element.querySelector(".elements__place").src = this._image;
    this._element.querySelector(".elements__description").textContent =
      this._text;

    return this._element;
  }

  _setEventListeners() {
    const image = this._element.querySelector(".elements__place");
    const heart = this._element.querySelector(".elements__icon");
    showImage(image);
    HandlecloseButton();
    likeCards(this._element);
    removeCards(this._element);
  }
}

initialCards.forEach((item) => {
  const cards = new Card(item.name, item.link).generateCard();
  const cardContainer = document.querySelector(".elements__table");

  cardContainer.append(cards);
});
