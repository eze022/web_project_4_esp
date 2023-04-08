import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, buttonTextSelector) {
    super(popupSelector);
    this._buttonTextSelector = buttonTextSelector;
    this._saveButton = this._popup.querySelector(buttonTextSelector);
  }

  setLoadingState(isLoading) {
    if (isLoading) {
      this._saveButton.textContent = "Guardando...";
      this._saveButton.disabled = true;
    } else {
      this._saveButton.textContent = "Guardar";
      this._saveButton.disabled = false;
    }
  }
}
