import { likeCards, removeCards } from "../utils/utils.js";

export default class Card {
  constructor({ data, handleCardClick }) {
    this._text = data.name;
    this._image = data.link;
    this.handleCardClick = handleCardClick;
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
    this._element.querySelector(".elements__place").alt = this._text;

    return this._element;
  }

  _setEventListeners() {
    const image = this._element.querySelector(".elements__place");
    const heart = this._element.querySelector(".elements__icon");
    likeCards(this._element);
    removeCards(this._element);
  }
}
