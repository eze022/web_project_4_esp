import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, submitCallBack) {
    super(popup);
    this._form = this._popup.querySelector(".popup__form");
    this._submitCallBack = submitCallBack;
  }

  _getInputValues() {
    const inputList = Array.from(this._form.querySelectorAll(".popup__input"));
    const formValues = {};
    inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });

    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitCallBack(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
