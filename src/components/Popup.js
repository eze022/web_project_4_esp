import { overlay, closeButton } from "../utils/constants.js";

export default class Popup {
  constructor(popup, button) {
    this._popup = document.querySelector(popup);
    this._button = document.querySelector(button);
    this._closeButton = this._popup.querySelector(".close-btn");
    this._handleEscClose = (event) => this._handleEsc(event);
    this._overlay = document.querySelector(".overlay");
  }

  open() {
    this._overlay.classList.add("overlay_visible");
    this._popup.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._overlay.classList.remove("overlay_visible");
    this._popup.classList.remove("popup_visible");
  }

  _handleEsc(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._overlay.addEventListener("click", () => this.close());
    this._closeButton.addEventListener("click", () => this.close());
  }
}
