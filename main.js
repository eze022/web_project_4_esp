/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Card = /*#__PURE__*/function () {
  function Card(_ref) {
    var data = _ref.data,
      handleCardClick = _ref.handleCardClick;
    _classCallCheck(this, Card);
    this._text = data.name;
    this._image = data.link;
    this.handleCardClick = handleCardClick;
  }
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardTemplate = document.querySelector("#cards-template").content.querySelector(".elements__cards").cloneNode(true);
      return cardTemplate;
    }
  }, {
    key: "_setAtributte",
    value: function _setAtributte() {
      this._element.setAttribute("data-link", this._image);
      this._element.setAttribute("data-name", this._text);
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      this._setAtributte();
      this._element.querySelector(".elements__place").src = this._image;
      this._element.querySelector(".elements__description").textContent = this._text;
      this._element.querySelector(".elements__place").alt = this._text;
      return this._element;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var image = this._element.querySelector(".elements__place");
      var heart = this._element.querySelector(".elements__icon");
      (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.likeCards)(this._element);
      (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.removeCards)(this._element);
    }
  }]);
  return Card;
}();


/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormValidator; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(parametres) {
    _classCallCheck(this, FormValidator);
    this._formSelector = parametres.formSelector, this._inputSelector = parametres.inputSelector, this._submitButtonSelector = parametres.submitButtonSelector, this._inactiveButtonClass = parametres.inactiveButtonClass, this._inputErrorClass = parametres.inputErrorClass, this._errorClass = parametres.errorClass;
  }
  _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(formElement, inputElement, errorMessage) {
      var errorElement = formElement.querySelector(".".concat(inputElement.id, "-error"));
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorClass);
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(formElement, inputElement) {
      var errorElement = formElement.querySelector(".".concat(inputElement.id, "-error"));
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = "";
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(formElement, inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(formElement, inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(formElement, inputElement);
      }
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput(inputList) {
      return inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState(inputList, buttonElement) {
      if (this._hasInvalidInput(inputList)) {
        buttonElement.classList.add(this._inactiveButtonClass);
      } else {
        buttonElement.classList.remove(this._inactiveButtonClass);
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners(formElement) {
      var _this = this;
      var inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
      var buttonElement = formElement.querySelector(this._submitButtonSelector);
      this._toggleButtonState(inputList, buttonElement);
      inputList.forEach(function (inputElement) {
        inputElement.addEventListener("input", function () {
          _this._checkInputValidity(formElement, inputElement);
          _this._toggleButtonState(inputList, buttonElement);
        });
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation(parametres) {
      var _this2 = this;
      var formList = Array.from(document.querySelectorAll(this._formSelector));
      formList.forEach(function (formElement) {
        formElement.addEventListener("submit", function (evt) {
          evt.preventDefault();
        });
        var fieldsetList = Array.from(formElement.querySelectorAll(".popup__set"));
        fieldsetList.forEach(function (fieldset) {
          _this2._setEventListeners(fieldset);
        });
      });
    }
  }]);
  return FormValidator;
}();


/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Popup; }
/* harmony export */ });
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* import {
  openFormButton,
  closeFormButton,
  closeButtonNewPlace,
} from "../utils/constants"; */
var Popup = /*#__PURE__*/function () {
  function Popup(popup, button) {
    var _this = this;
    _classCallCheck(this, Popup);
    this._popup = document.querySelector(popup);
    this._button = document.querySelector(button);
    this._closeButton = this._popup.querySelector(".close-btn");
    this._handleEscClose = function (event) {
      return _this._handleEsc(event);
    };
    this._overlay = document.querySelector(".overlay");
  }
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._overlay.classList.add("overlay_visible");
      this._popup.classList.add("popup_visible");
      document.addEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._overlay.classList.remove("overlay_visible");
      this._popup.classList.remove("popup_visible");
    }
  }, {
    key: "_handleEsc",
    value: function _handleEsc(event) {
      if (event.key === "Escape") {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      this._overlay.addEventListener("click", function () {
        return _this2.close();
      });
      this._closeButton.addEventListener("click", function () {
        return _this2.close();
      });
    }
  }]);
  return Popup;
}();


/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithForm; }
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(popup, submitCallBack) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popup);
    _this._form = _this._popup.querySelector(".popup__form");
    _this._submitCallBack = submitCallBack;
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var inputList = Array.from(this._form.querySelectorAll(".popup__input"));
      var formValues = {};
      inputList.forEach(function (input) {
        formValues[input.name] = input.value;
      });
      return formValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener("submit", function (evt) {
        evt.preventDefault();
        _this2._submitCallBack(_this2._getInputValues());
        _this2.close();
      });
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
      this._form.reset();
    }
  }]);
  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithImage; }
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popup) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popup);
    _this._popupImage = _this._popup.querySelector(".elements__place-popup");
    _this._popupCaption = _this._popup.querySelector(".elements__description-popup");
    return _this;
  }
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(event, image, title) {
      var cardElement = event.target.closest(".elements__cards");
      var imageElement = cardElement.querySelector(".elements__place");
      var imageUrl = cardElement.getAttribute("data-link");
      var description = cardElement.getAttribute("data-name");
      if (event.target === imageElement) {
        this._popupImage.src = imageUrl;
        this._popupCaption.textContent = description;
        _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this, imageElement, this._popupCaption.textContent);
      }
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithImage.prototype), "close", this).call(this);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      _get(_getPrototypeOf(PopupWithImage.prototype), "setEventListeners", this).call(this);
    }
  }]);
  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Section; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var items = _ref.items,
      renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  _createClass(Section, [{
    key: "addItemAtEnd",
    value: function addItemAtEnd(element) {
      this._container.append(element);
    }
  }, {
    key: "addItemAtIniticial",
    value: function addItemAtIniticial(element) {
      this._container.prepend(element);
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;
      this._items.forEach(function (item) {
        var renderedItem = _this._renderer(item);
        _this.addItemAtEnd(renderedItem);
      });
    }
  }]);
  return Section;
}();


/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserInfo; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var userName = _ref.userName,
      userJob = _ref.userJob;
    _classCallCheck(this, UserInfo);
    this._userName = userName;
    this._userJob = userJob;
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._userName.value,
        job: this._userJob.value
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
        job = _ref2.job;
      this._userName.textContent = name;
      this._userJob.textContent = job;
    }
  }]);
  return UserInfo;
}();


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleAddFormSubmit": function() { return /* binding */ handleAddFormSubmit; },
/* harmony export */   "handleProfileFormSubmit": function() { return /* binding */ handleProfileFormSubmit; }
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_Popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Popup.js */ "./src/components/Popup.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/constants.js */ "./src/utils/constants.js");









var formValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.parametres);
formValidator.enableValidation();
document.addEventListener("DOMContentLoaded", function () {
  var cardImage = document.querySelectorAll(".elements__place");
  var popupWithImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__["default"](".elements__popup");
  cardImage.forEach(function (card) {
    card.addEventListener("click", function (event) {
      popupWithImage.setEventListeners();
      popupWithImage.open(event);
    });
  });
});
var createCard = function createCard(data) {
  var cardElement = new _components_Card_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
    data: data,
    handleCardClick: {
      name: data.name,
      link: data.link
    }
  });
  var newCard = cardElement.generateCard();
  newCard.addEventListener("click", function (event) {
    var popupWithImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__["default"](".elements__popup");
    popupWithImage.setEventListeners();
    popupWithImage.open(event);
  });
  return newCard;
};
var section = new _components_Section_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  items: _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.initialCards,
  renderer: function renderer(item) {
    var card = createCard({
      name: item.name,
      link: item.link
    });
    return card;
  }
}, ".elements__table");
section.renderItems();
var popupEditButton = new _components_Popup_js__WEBPACK_IMPORTED_MODULE_3__["default"](".popup", ".edit-btn");
var popupNewCard = new _components_Popup_js__WEBPACK_IMPORTED_MODULE_3__["default"](".popup_content_new-place", ".add-btn");
var popupProfileForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"](".popup", handleProfileFormSubmit);
popupProfileForm.setEventListeners();
var popupAddForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"](".popup_content_new-place", handleAddFormSubmit);
popupAddForm.setEventListeners();
function handleAddFormSubmit() {
  var card = createCard({
    name: _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputTitle.value,
    link: _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputUrlImage.value
  });
  section.addItemAtIniticial(card);
  popupAddForm.close();
}
function handleProfileFormSubmit(event) {
  event.preventDefault();
  var profileUserInfo = profileUser.getUserInfo();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.profileFullName.textContent = profileUserInfo.name;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.profileJob.textContent = profileUserInfo.job;
  popupProfileForm.close();
}
var profileUser = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  userName: _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputName,
  userJob: _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputJob
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.openFormButton.addEventListener("click", function () {
  popupProfileForm.open();
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.addButton.addEventListener("click", function () {
  popupAddForm.open();
});


/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addButton": function() { return /* binding */ addButton; },
/* harmony export */   "closeButton": function() { return /* binding */ closeButton; },
/* harmony export */   "createButton": function() { return /* binding */ createButton; },
/* harmony export */   "initialCards": function() { return /* binding */ initialCards; },
/* harmony export */   "inputJob": function() { return /* binding */ inputJob; },
/* harmony export */   "inputName": function() { return /* binding */ inputName; },
/* harmony export */   "inputTitle": function() { return /* binding */ inputTitle; },
/* harmony export */   "inputUrlImage": function() { return /* binding */ inputUrlImage; },
/* harmony export */   "openFormButton": function() { return /* binding */ openFormButton; },
/* harmony export */   "overlay": function() { return /* binding */ overlay; },
/* harmony export */   "parametres": function() { return /* binding */ parametres; },
/* harmony export */   "popupDescription": function() { return /* binding */ popupDescription; },
/* harmony export */   "popupEditProfile": function() { return /* binding */ popupEditProfile; },
/* harmony export */   "popupElement": function() { return /* binding */ popupElement; },
/* harmony export */   "popupImage": function() { return /* binding */ popupImage; },
/* harmony export */   "popupNewPlace": function() { return /* binding */ popupNewPlace; },
/* harmony export */   "profileFullName": function() { return /* binding */ profileFullName; },
/* harmony export */   "profileJob": function() { return /* binding */ profileJob; },
/* harmony export */   "saveButton": function() { return /* binding */ saveButton; }
/* harmony export */ });
/* harmony import */ var _images_Yosemite_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/Yosemite.svg */ "./src/images/Yosemite.svg");
/* harmony import */ var _images_Louise_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Louise.svg */ "./src/images/Louise.svg");
/* harmony import */ var _images_Monta_as_calvas_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Montañas-calvas.svg */ "./src/images/Montañas-calvas.svg");
/* harmony import */ var _images_Latemar_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Latemar.svg */ "./src/images/Latemar.svg");
/* harmony import */ var _images_Vanoise_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Vanoise.svg */ "./src/images/Vanoise.svg");
/* harmony import */ var _images_Di_Braies_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Di-Braies.svg */ "./src/images/Di-Braies.svg");






var inputName = document.querySelector(".popup__input_name");
var inputJob = document.querySelector(".popup__input_job");
var profileFullName = document.querySelector(".profile-info__fullname");
var profileJob = document.querySelector(".profile-info__job");
var inputTitle = document.querySelector(".popup__input_title");
var inputUrlImage = document.querySelector("#url-input");
var popupImage = document.querySelector(".elements__place-popup");
var popupDescription = document.querySelector(".elements__description-popup");
var popupElement = document.querySelector(".elements__popup");
var closeButton = document.querySelector(".close-btn");
var overlay = document.querySelector(".overlay");
var openFormButton = document.querySelector(".edit-btn");
var addButton = document.querySelector(".add-btn");
var popupEditProfile = document.querySelector(".popup");
var popupNewPlace = document.querySelector(".popup_content_new-place");
var saveButton = document.querySelector(".popup__save-btn");
var createButton = document.querySelector(".popup__create-btn");
var initialCards = [{
  name: "Valle de Yosemite",
  link: _images_Yosemite_svg__WEBPACK_IMPORTED_MODULE_0__
}, {
  name: "Lago Louise",
  link: _images_Louise_svg__WEBPACK_IMPORTED_MODULE_1__
}, {
  name: "Montañas Calvas",
  link: _images_Monta_as_calvas_svg__WEBPACK_IMPORTED_MODULE_2__
}, {
  name: "Latemar",
  link: _images_Latemar_svg__WEBPACK_IMPORTED_MODULE_3__
}, {
  name: "Parque Nacional de la Vanoise",
  link: _images_Vanoise_svg__WEBPACK_IMPORTED_MODULE_4__
}, {
  name: "Lago di Braies",
  link: _images_Di_Braies_svg__WEBPACK_IMPORTED_MODULE_5__
}];
var parametres = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active"
};


/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "likeCards": function() { return /* binding */ likeCards; },
/* harmony export */   "removeCards": function() { return /* binding */ removeCards; }
/* harmony export */ });
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./src/utils/constants.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ "./src/index.js");



function likeCards(nodeCard) {
  var heartLike = nodeCard.querySelector(".elements__icon");
  heartLike.addEventListener("click", function (event) {
    event.target.classList.toggle("elements__icon_activate");
    event.target.removeEventListener("click", likeCards);
  });
}
function removeCards(nodeCard) {
  var cardTrash = nodeCard.querySelector(".elements__trash");
  cardTrash.addEventListener("click", function (event) {
    var card = nodeCard.closest(".elements__cards");
    card.remove();
    event.target.removeEventListener("click", removeCards);
  });
}
_constants_js__WEBPACK_IMPORTED_MODULE_1__.saveButton.addEventListener("click", _index_js__WEBPACK_IMPORTED_MODULE_2__.handleProfileFormSubmit);
_constants_js__WEBPACK_IMPORTED_MODULE_1__.createButton.addEventListener("click", _index_js__WEBPACK_IMPORTED_MODULE_2__.handleAddFormSubmit);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/Di-Braies.svg":
/*!**********************************!*\
  !*** ./src/images/Di-Braies.svg ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "30f6a0e799d95965035a.svg";

/***/ }),

/***/ "./src/images/Latemar.svg":
/*!********************************!*\
  !*** ./src/images/Latemar.svg ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "697169f9b1cd05f03f47.svg";

/***/ }),

/***/ "./src/images/Louise.svg":
/*!*******************************!*\
  !*** ./src/images/Louise.svg ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6be5c64639630540b8c4.svg";

/***/ }),

/***/ "./src/images/Montañas-calvas.svg":
/*!****************************************!*\
  !*** ./src/images/Montañas-calvas.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6c57bba7db7e65dbae1e.svg";

/***/ }),

/***/ "./src/images/Vanoise.svg":
/*!********************************!*\
  !*** ./src/images/Vanoise.svg ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8d59cbc2ff5d47f3113a.svg";

/***/ }),

/***/ "./src/images/Yosemite.svg":
/*!*********************************!*\
  !*** ./src/images/Yosemite.svg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e43af7e528616bf5e1e9.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM3RHBCLHdFQUE2QixDQUFDLE9BQU8sRUFBRXNCLDBEQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7QUMzQjNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9wcm9qZWN0XzVfZXNwLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF81X2VzcC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNV9lc3AvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF81X2VzcC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNV9lc3AvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF81X2VzcC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNV9lc3AvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF81X2VzcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF81X2VzcC8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNV9lc3AvLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNV9lc3AvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzVfZXNwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzVfZXNwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF81X2VzcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzVfZXNwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNV9lc3Avd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNV9lc3Avd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF81X2VzcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNV9lc3Avd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpa2VDYXJkcywgcmVtb3ZlQ2FyZHMgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKHsgZGF0YSwgaGFuZGxlQ2FyZENsaWNrIH0pIHtcclxuICAgIHRoaXMuX3RleHQgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9pbWFnZSA9IGRhdGEubGluaztcclxuICAgIHRoaXMuaGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gIH1cclxuXHJcbiAgX2dldFRlbXBsYXRlKCkge1xyXG4gICAgY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZHMtdGVtcGxhdGVcIilcclxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19fY2FyZHNcIilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICByZXR1cm4gY2FyZFRlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgX3NldEF0cmlidXR0ZSgpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1saW5rXCIsIHRoaXMuX2ltYWdlKTtcclxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIsIHRoaXMuX3RleHQpO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDYXJkKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcblxyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuX3NldEF0cmlidXR0ZSgpO1xyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX19wbGFjZVwiKS5zcmMgPSB0aGlzLl9pbWFnZTtcclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19fZGVzY3JpcHRpb25cIikudGV4dENvbnRlbnQgPVxyXG4gICAgICB0aGlzLl90ZXh0O1xyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX19wbGFjZVwiKS5hbHQgPSB0aGlzLl90ZXh0O1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX3BsYWNlXCIpO1xyXG4gICAgY29uc3QgaGVhcnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2ljb25cIik7XHJcbiAgICBsaWtlQ2FyZHModGhpcy5fZWxlbWVudCk7XHJcbiAgICByZW1vdmVDYXJkcyh0aGlzLl9lbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3IocGFyYW1ldHJlcykge1xyXG4gICAgKHRoaXMuX2Zvcm1TZWxlY3RvciA9IHBhcmFtZXRyZXMuZm9ybVNlbGVjdG9yKSxcclxuICAgICAgKHRoaXMuX2lucHV0U2VsZWN0b3IgPSBwYXJhbWV0cmVzLmlucHV0U2VsZWN0b3IpLFxyXG4gICAgICAodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBwYXJhbWV0cmVzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKSxcclxuICAgICAgKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBwYXJhbWV0cmVzLmluYWN0aXZlQnV0dG9uQ2xhc3MpLFxyXG4gICAgICAodGhpcy5faW5wdXRFcnJvckNsYXNzID0gcGFyYW1ldHJlcy5pbnB1dEVycm9yQ2xhc3MpLFxyXG4gICAgICAodGhpcy5fZXJyb3JDbGFzcyA9IHBhcmFtZXRyZXMuZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfc2hvd0lucHV0RXJyb3IoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfaGlkZUlucHV0RXJyb3IoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCkge1xyXG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoXHJcbiAgICAgICAgZm9ybUVsZW1lbnQsXHJcbiAgICAgICAgaW5wdXRFbGVtZW50LFxyXG4gICAgICAgIGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfaGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkge1xyXG4gICAgcmV0dXJuIGlucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF90b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQpIHtcclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoaW5wdXRMaXN0KSkge1xyXG4gICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGlucHV0TGlzdCA9IEFycmF5LmZyb20oXHJcbiAgICAgIGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcilcclxuICAgICk7XHJcbiAgICBjb25zdCBidXR0b25FbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGVuYWJsZVZhbGlkYXRpb24ocGFyYW1ldHJlcykge1xyXG4gICAgY29uc3QgZm9ybUxpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fZm9ybVNlbGVjdG9yKSk7XHJcbiAgICBmb3JtTGlzdC5mb3JFYWNoKChmb3JtRWxlbWVudCkgPT4ge1xyXG4gICAgICBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBmaWVsZHNldExpc3QgPSBBcnJheS5mcm9tKFxyXG4gICAgICAgIGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX3NldFwiKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgZmllbGRzZXRMaXN0LmZvckVhY2goKGZpZWxkc2V0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoZmllbGRzZXQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBvdmVybGF5LCBjbG9zZUJ1dHRvbiB9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHMuanNcIjtcclxuXHJcbi8qIGltcG9ydCB7XHJcbiAgb3BlbkZvcm1CdXR0b24sXHJcbiAgY2xvc2VGb3JtQnV0dG9uLFxyXG4gIGNsb3NlQnV0dG9uTmV3UGxhY2UsXHJcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiOyAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwLCBidXR0b24pIHtcclxuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cCk7XHJcbiAgICB0aGlzLl9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbik7XHJcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbiA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYnRuXCIpO1xyXG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSAoZXZlbnQpID0+IHRoaXMuX2hhbmRsZUVzYyhldmVudCk7XHJcbiAgICB0aGlzLl9vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIHRoaXMuX292ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlfdmlzaWJsZVwiKTtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF92aXNpYmxlXCIpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVybGF5X3Zpc2libGVcIik7XHJcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfdmlzaWJsZVwiKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVFc2MoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmNsb3NlKCkpO1xyXG4gICAgdGhpcy5fY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuY2xvc2UoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cCwgc3VibWl0Q2FsbEJhY2spIHtcclxuICAgIHN1cGVyKHBvcHVwKTtcclxuICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xyXG4gICAgdGhpcy5fc3VibWl0Q2FsbEJhY2sgPSBzdWJtaXRDYWxsQmFjaztcclxuICB9XHJcblxyXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgIGNvbnN0IGlucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pbnB1dFwiKSk7XHJcbiAgICBjb25zdCBmb3JtVmFsdWVzID0ge307XHJcbiAgICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm1WYWx1ZXM7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5fc3VibWl0Q2FsbEJhY2sodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgdGhpcy5fZm9ybS5yZXNldCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwKSB7XHJcbiAgICBzdXBlcihwb3B1cCk7XHJcbiAgICB0aGlzLl9wb3B1cEltYWdlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19fcGxhY2UtcG9wdXBcIik7XHJcbiAgICB0aGlzLl9wb3B1cENhcHRpb24gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5lbGVtZW50c19fZGVzY3JpcHRpb24tcG9wdXBcIlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9wZW4oZXZlbnQsIGltYWdlLCB0aXRsZSkge1xyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5lbGVtZW50c19fY2FyZHNcIik7XHJcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX19wbGFjZVwiKTtcclxuICAgIGNvbnN0IGltYWdlVXJsID0gY2FyZEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1saW5rXCIpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjYXJkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIik7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBpbWFnZUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5fcG9wdXBJbWFnZS5zcmMgPSBpbWFnZVVybDtcclxuICAgICAgdGhpcy5fcG9wdXBDYXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcbiAgICAgIHN1cGVyLm9wZW4oaW1hZ2VFbGVtZW50LCB0aGlzLl9wb3B1cENhcHRpb24udGV4dENvbnRlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW1BdEVuZChlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIuYXBwZW5kKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbUF0SW5pdGljaWFsKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbXMoKSB7XHJcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlbmRlcmVkSXRlbSA9IHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xyXG4gICAgICB0aGlzLmFkZEl0ZW1BdEVuZChyZW5kZXJlZEl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICBjb25zdHJ1Y3Rvcih7IHVzZXJOYW1lLCB1c2VySm9iIH0pIHtcclxuICAgIHRoaXMuX3VzZXJOYW1lID0gdXNlck5hbWU7XHJcbiAgICB0aGlzLl91c2VySm9iID0gdXNlckpvYjtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogdGhpcy5fdXNlck5hbWUudmFsdWUsXHJcbiAgICAgIGpvYjogdGhpcy5fdXNlckpvYi52YWx1ZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRVc2VySW5mbyh7IG5hbWUsIGpvYiB9KSB7XHJcbiAgICB0aGlzLl91c2VyTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICB0aGlzLl91c2VySm9iLnRleHRDb250ZW50ID0gam9iO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XHJcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9jb21wb25lbnRzL1BvcHVwLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgYWRkQnV0dG9uLFxyXG4gIGNyZWF0ZUJ1dHRvbixcclxuICBwYXJhbWV0cmVzLFxyXG4gIHNhdmVCdXR0b24sXHJcbiAgaW5pdGlhbENhcmRzLFxyXG4gIGlucHV0TmFtZSxcclxuICBpbnB1dFRpdGxlLFxyXG4gIGlucHV0VXJsSW1hZ2UsXHJcbiAgcHJvZmlsZUZ1bGxOYW1lLFxyXG4gIGlucHV0Sm9iLFxyXG4gIHByb2ZpbGVKb2IsXHJcbiAgb3BlbkZvcm1CdXR0b24sXHJcbn0gZnJvbSBcIi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XHJcblxyXG5jb25zdCBmb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IocGFyYW1ldHJlcyk7XHJcbmZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGNhcmRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWxlbWVudHNfX3BsYWNlXCIpO1xyXG4gIGNvbnN0IHBvcHVwV2l0aEltYWdlID0gbmV3IFBvcHVwV2l0aEltYWdlKFwiLmVsZW1lbnRzX19wb3B1cFwiKTtcclxuXHJcbiAgY2FyZEltYWdlLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBwb3B1cFdpdGhJbWFnZS5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICBwb3B1cFdpdGhJbWFnZS5vcGVuKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNhcmQgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gbmV3IENhcmQoe1xyXG4gICAgZGF0YSxcclxuICAgIGhhbmRsZUNhcmRDbGljazogeyBuYW1lOiBkYXRhLm5hbWUsIGxpbms6IGRhdGEubGluayB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IG5ld0NhcmQgPSBjYXJkRWxlbWVudC5nZW5lcmF0ZUNhcmQoKTtcclxuICBuZXdDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHBvcHVwV2l0aEltYWdlID0gbmV3IFBvcHVwV2l0aEltYWdlKFwiLmVsZW1lbnRzX19wb3B1cFwiKTtcclxuICAgIHBvcHVwV2l0aEltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICBwb3B1cFdpdGhJbWFnZS5vcGVuKGV2ZW50KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG5ld0NhcmQ7XHJcbn07XHJcblxyXG5jb25zdCBzZWN0aW9uID0gbmV3IFNlY3Rpb24oXHJcbiAge1xyXG4gICAgaXRlbXM6IGluaXRpYWxDYXJkcyxcclxuICAgIHJlbmRlcmVyOiAoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZCh7XHJcbiAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgIGxpbms6IGl0ZW0ubGluayxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjYXJkO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIFwiLmVsZW1lbnRzX190YWJsZVwiXHJcbik7XHJcbnNlY3Rpb24ucmVuZGVySXRlbXMoKTtcclxuXHJcbmNvbnN0IHBvcHVwRWRpdEJ1dHRvbiA9IG5ldyBQb3B1cChcIi5wb3B1cFwiLCBcIi5lZGl0LWJ0blwiKTtcclxuY29uc3QgcG9wdXBOZXdDYXJkID0gbmV3IFBvcHVwKFwiLnBvcHVwX2NvbnRlbnRfbmV3LXBsYWNlXCIsIFwiLmFkZC1idG5cIik7XHJcblxyXG5jb25zdCBwb3B1cFByb2ZpbGVGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIucG9wdXBcIiwgaGFuZGxlUHJvZmlsZUZvcm1TdWJtaXQpO1xyXG5wb3B1cFByb2ZpbGVGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBwb3B1cEFkZEZvcm0gPSBuZXcgUG9wdXBXaXRoRm9ybShcclxuICBcIi5wb3B1cF9jb250ZW50X25ldy1wbGFjZVwiLFxyXG4gIGhhbmRsZUFkZEZvcm1TdWJtaXRcclxuKTtcclxucG9wdXBBZGRGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVBZGRGb3JtU3VibWl0KCkge1xyXG4gIGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKHtcclxuICAgIG5hbWU6IGlucHV0VGl0bGUudmFsdWUsXHJcbiAgICBsaW5rOiBpbnB1dFVybEltYWdlLnZhbHVlLFxyXG4gIH0pO1xyXG4gIHNlY3Rpb24uYWRkSXRlbUF0SW5pdGljaWFsKGNhcmQpO1xyXG4gIHBvcHVwQWRkRm9ybS5jbG9zZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVQcm9maWxlRm9ybVN1Ym1pdChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgcHJvZmlsZVVzZXJJbmZvID0gcHJvZmlsZVVzZXIuZ2V0VXNlckluZm8oKTtcclxuICBwcm9maWxlRnVsbE5hbWUudGV4dENvbnRlbnQgPSBwcm9maWxlVXNlckluZm8ubmFtZTtcclxuICBwcm9maWxlSm9iLnRleHRDb250ZW50ID0gcHJvZmlsZVVzZXJJbmZvLmpvYjtcclxuICBwb3B1cFByb2ZpbGVGb3JtLmNsb3NlKCk7XHJcbn1cclxuXHJcbmNvbnN0IHByb2ZpbGVVc2VyID0gbmV3IFVzZXJJbmZvKHtcclxuICB1c2VyTmFtZTogaW5wdXROYW1lLFxyXG4gIHVzZXJKb2I6IGlucHV0Sm9iLFxyXG59KTtcclxuXHJcbm9wZW5Gb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgcG9wdXBQcm9maWxlRm9ybS5vcGVuKCk7XHJcbn0pO1xyXG5cclxuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgcG9wdXBBZGRGb3JtLm9wZW4oKTtcclxufSk7XHJcblxyXG5leHBvcnQgeyBoYW5kbGVBZGRGb3JtU3VibWl0LCBoYW5kbGVQcm9maWxlRm9ybVN1Ym1pdCB9O1xyXG4iLCJpbXBvcnQgeW9zZW1pdGVTcmMgZnJvbSBcIi4uL2ltYWdlcy9Zb3NlbWl0ZS5zdmdcIjtcclxuaW1wb3J0IGxhZ29TcmMgZnJvbSBcIi4uL2ltYWdlcy9Mb3Vpc2Uuc3ZnXCI7XHJcbmltcG9ydCBtb250YcOxYXNTcmMgZnJvbSBcIi4uL2ltYWdlcy9Nb250YcOxYXMtY2FsdmFzLnN2Z1wiO1xyXG5pbXBvcnQgbGF0ZW1hclNyYyBmcm9tIFwiLi4vaW1hZ2VzL0xhdGVtYXIuc3ZnXCI7XHJcbmltcG9ydCB2YW5vaXNlU3JjIGZyb20gXCIuLi9pbWFnZXMvVmFub2lzZS5zdmdcIjtcclxuaW1wb3J0IGJyYWllc1NyYyBmcm9tIFwiLi4vaW1hZ2VzL0RpLUJyYWllcy5zdmdcIjtcclxubGV0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X25hbWVcIik7XHJcbmxldCBpbnB1dEpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X2pvYlwiKTtcclxubGV0IHByb2ZpbGVGdWxsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZS1pbmZvX19mdWxsbmFtZVwiKTtcclxubGV0IHByb2ZpbGVKb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGUtaW5mb19fam9iXCIpO1xyXG5sZXQgaW5wdXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X3RpdGxlXCIpO1xyXG5sZXQgaW5wdXRVcmxJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXJsLWlucHV0XCIpO1xyXG5jb25zdCBwb3B1cEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19fcGxhY2UtcG9wdXBcIik7XHJcbmNvbnN0IHBvcHVwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX19kZXNjcmlwdGlvbi1wb3B1cFwiKTtcclxuY29uc3QgcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19fcG9wdXBcIik7XHJcbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idG5cIik7XHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbmNvbnN0IG9wZW5Gb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWJ0blwiKTtcclxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYnRuXCIpO1xyXG5jb25zdCBwb3B1cEVkaXRQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcclxuY29uc3QgcG9wdXBOZXdQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfY29udGVudF9uZXctcGxhY2VcIik7XHJcbmNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19zYXZlLWJ0blwiKTtcclxuY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY3JlYXRlLWJ0blwiKTtcclxuXHJcbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIlZhbGxlIGRlIFlvc2VtaXRlXCIsXHJcbiAgICBsaW5rOiB5b3NlbWl0ZVNyYyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFnbyBMb3Vpc2VcIixcclxuICAgIGxpbms6IGxhZ29TcmMsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk1vbnRhw7FhcyBDYWx2YXNcIixcclxuICAgIGxpbms6IG1vbnRhw7Fhc1NyYyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxyXG4gICAgbGluazogbGF0ZW1hclNyYyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUGFycXVlIE5hY2lvbmFsIGRlIGxhIFZhbm9pc2VcIixcclxuICAgIGxpbms6IHZhbm9pc2VTcmMsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXHJcbiAgICBsaW5rOiBicmFpZXNTcmMsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHBhcmFtZXRyZXMgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiBcIi5wb3B1cF9fZm9ybVwiLFxyXG4gIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5wb3B1cF9fYnV0dG9uXCIsXHJcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJwb3B1cF9fYnV0dG9uX2luYWN0aXZlXCIsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiBcInBvcHVwX19pbnB1dF90eXBlX2Vycm9yXCIsXHJcbiAgZXJyb3JDbGFzczogXCJwb3B1cF9faW5wdXQtZXJyb3JfYWN0aXZlXCIsXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGlucHV0TmFtZSxcclxuICBpbnB1dEpvYixcclxuICBwcm9maWxlRnVsbE5hbWUsXHJcbiAgcHJvZmlsZUpvYixcclxuICBpbnB1dFRpdGxlLFxyXG4gIGlucHV0VXJsSW1hZ2UsXHJcbiAgcG9wdXBJbWFnZSxcclxuICBwb3B1cERlc2NyaXB0aW9uLFxyXG4gIHBvcHVwRWxlbWVudCxcclxuICBjbG9zZUJ1dHRvbixcclxuICBvdmVybGF5LFxyXG4gIG9wZW5Gb3JtQnV0dG9uLFxyXG4gIGFkZEJ1dHRvbixcclxuICBwb3B1cEVkaXRQcm9maWxlLFxyXG4gIHBvcHVwTmV3UGxhY2UsXHJcbiAgc2F2ZUJ1dHRvbixcclxuICBjcmVhdGVCdXR0b24sXHJcbiAgcGFyYW1ldHJlcyxcclxuICBpbml0aWFsQ2FyZHMsXHJcbn07XHJcbiIsImltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcclxuaW1wb3J0IHtcclxuICBvcGVuRm9ybUJ1dHRvbixcclxuICBhZGRCdXR0b24sXHJcbiAgc2F2ZUJ1dHRvbixcclxuICBjcmVhdGVCdXR0b24sXHJcbn0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XHJcbmltcG9ydCB7IGhhbmRsZUFkZEZvcm1TdWJtaXQsIGhhbmRsZVByb2ZpbGVGb3JtU3VibWl0IH0gZnJvbSBcIi4uL2luZGV4LmpzXCI7XHJcblxyXG5mdW5jdGlvbiBsaWtlQ2FyZHMobm9kZUNhcmQpIHtcclxuICBjb25zdCBoZWFydExpa2UgPSBub2RlQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX19pY29uXCIpO1xyXG4gIGhlYXJ0TGlrZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImVsZW1lbnRzX19pY29uX2FjdGl2YXRlXCIpO1xyXG4gICAgZXZlbnQudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsaWtlQ2FyZHMpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVDYXJkcyhub2RlQ2FyZCkge1xyXG4gIGNvbnN0IGNhcmRUcmFzaCA9IG5vZGVDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX3RyYXNoXCIpO1xyXG4gIGNhcmRUcmFzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBjb25zdCBjYXJkID0gbm9kZUNhcmQuY2xvc2VzdChcIi5lbGVtZW50c19fY2FyZHNcIik7XHJcbiAgICBjYXJkLnJlbW92ZSgpO1xyXG4gICAgZXZlbnQudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVDYXJkcyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbnNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVByb2ZpbGVGb3JtU3VibWl0KTtcclxuY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVBZGRGb3JtU3VibWl0KTtcclxuXHJcbmV4cG9ydCB7IGxpa2VDYXJkcywgcmVtb3ZlQ2FyZHMgfTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJsaWtlQ2FyZHMiLCJyZW1vdmVDYXJkcyIsIkNhcmQiLCJfcmVmIiwiZGF0YSIsImhhbmRsZUNhcmRDbGljayIsIl9jbGFzc0NhbGxDaGVjayIsIl90ZXh0IiwibmFtZSIsIl9pbWFnZSIsImxpbmsiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl9nZXRUZW1wbGF0ZSIsImNhcmRUZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfc2V0QXRyaWJ1dHRlIiwiX2VsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJnZW5lcmF0ZUNhcmQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJzcmMiLCJ0ZXh0Q29udGVudCIsImFsdCIsImltYWdlIiwiaGVhcnQiLCJkZWZhdWx0IiwiRm9ybVZhbGlkYXRvciIsInBhcmFtZXRyZXMiLCJfZm9ybVNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX3Nob3dJbnB1dEVycm9yIiwiZm9ybUVsZW1lbnQiLCJpbnB1dEVsZW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJlcnJvckVsZW1lbnQiLCJjb25jYXQiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsIl9oaWRlSW5wdXRFcnJvciIsInJlbW92ZSIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJ2YWxpZGl0eSIsInZhbGlkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGFzSW52YWxpZElucHV0IiwiaW5wdXRMaXN0Iiwic29tZSIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImJ1dHRvbkVsZW1lbnQiLCJfdGhpcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVuYWJsZVZhbGlkYXRpb24iLCJfdGhpczIiLCJmb3JtTGlzdCIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiZmllbGRzZXRMaXN0IiwiZmllbGRzZXQiLCJvdmVybGF5IiwiY2xvc2VCdXR0b24iLCJQb3B1cCIsInBvcHVwIiwiYnV0dG9uIiwiX3BvcHVwIiwiX2J1dHRvbiIsIl9jbG9zZUJ1dHRvbiIsIl9oYW5kbGVFc2NDbG9zZSIsImV2ZW50IiwiX2hhbmRsZUVzYyIsIl9vdmVybGF5Iiwib3BlbiIsImNsb3NlIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJQb3B1cFdpdGhGb3JtIiwiX1BvcHVwIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwic3VibWl0Q2FsbEJhY2siLCJjYWxsIiwiX2Zvcm0iLCJfc3VibWl0Q2FsbEJhY2siLCJfZ2V0SW5wdXRWYWx1ZXMiLCJmb3JtVmFsdWVzIiwiaW5wdXQiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwicmVzZXQiLCJQb3B1cFdpdGhJbWFnZSIsIl9wb3B1cEltYWdlIiwiX3BvcHVwQ2FwdGlvbiIsInRpdGxlIiwiY2FyZEVsZW1lbnQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiaW1hZ2VFbGVtZW50IiwiaW1hZ2VVcmwiLCJnZXRBdHRyaWJ1dGUiLCJkZXNjcmlwdGlvbiIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiYWRkSXRlbUF0RW5kIiwiZWxlbWVudCIsImFwcGVuZCIsImFkZEl0ZW1BdEluaXRpY2lhbCIsInByZXBlbmQiLCJyZW5kZXJJdGVtcyIsIml0ZW0iLCJyZW5kZXJlZEl0ZW0iLCJVc2VySW5mbyIsInVzZXJOYW1lIiwidXNlckpvYiIsIl91c2VyTmFtZSIsIl91c2VySm9iIiwiZ2V0VXNlckluZm8iLCJqb2IiLCJzZXRVc2VySW5mbyIsIl9yZWYyIiwiYWRkQnV0dG9uIiwiY3JlYXRlQnV0dG9uIiwic2F2ZUJ1dHRvbiIsImluaXRpYWxDYXJkcyIsImlucHV0TmFtZSIsImlucHV0VGl0bGUiLCJpbnB1dFVybEltYWdlIiwicHJvZmlsZUZ1bGxOYW1lIiwiaW5wdXRKb2IiLCJwcm9maWxlSm9iIiwib3BlbkZvcm1CdXR0b24iLCJmb3JtVmFsaWRhdG9yIiwiY2FyZEltYWdlIiwicG9wdXBXaXRoSW1hZ2UiLCJjYXJkIiwiY3JlYXRlQ2FyZCIsIm5ld0NhcmQiLCJzZWN0aW9uIiwicG9wdXBFZGl0QnV0dG9uIiwicG9wdXBOZXdDYXJkIiwicG9wdXBQcm9maWxlRm9ybSIsImhhbmRsZVByb2ZpbGVGb3JtU3VibWl0IiwicG9wdXBBZGRGb3JtIiwiaGFuZGxlQWRkRm9ybVN1Ym1pdCIsInByb2ZpbGVVc2VySW5mbyIsInByb2ZpbGVVc2VyIiwieW9zZW1pdGVTcmMiLCJsYWdvU3JjIiwibW9udGHDsWFzU3JjIiwibGF0ZW1hclNyYyIsInZhbm9pc2VTcmMiLCJicmFpZXNTcmMiLCJwb3B1cEltYWdlIiwicG9wdXBEZXNjcmlwdGlvbiIsInBvcHVwRWxlbWVudCIsInBvcHVwRWRpdFByb2ZpbGUiLCJwb3B1cE5ld1BsYWNlIiwibm9kZUNhcmQiLCJoZWFydExpa2UiLCJ0b2dnbGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FyZFRyYXNoIl0sInNvdXJjZVJvb3QiOiIifQ==