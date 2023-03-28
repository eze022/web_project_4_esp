import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImage = this._popup.querySelector(".elements__place-popup");
    this._popupCaption = this._popup.querySelector(
      ".elements__description-popup"
    );
  }

  open(event, image, title) {
    const cardElement = event.target.closest(".elements__cards");
    const imageElement = cardElement.querySelector(".elements__place");
    const imageUrl = cardElement.getAttribute("data-link");
    const description = cardElement.getAttribute("data-name");
    if (event.target === imageElement) {
      this._popupImage.src = imageUrl;
      this._popupCaption.textContent = description;
      super.open(imageElement, this._popupCaption.textContent);
    }
  }

  close() {
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
