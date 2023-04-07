import { profileFullName, profileJob } from "../utils/constants";
import { createCard } from "../page/index.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import { likeCards, updateLikes, removeCards } from "../utils/utils.js";

export class Api {
  constructor({ baseUrl, name, link, about, cardId, likes, avatar }) {
    this._baseUrl = baseUrl;
    this._name = name;
    this._link = link;
    this._about = about;
    this._cardId = cardId;
    this._likes = likes;
    this._avatar = avatar;
  }

  setCards(cardObject) {
    const section = new Section(
      {
        items: cardObject,
        renderer: (data) => {
          const card = createCard({
            name: data.name,
            link: data.link,
            id: data._id,
          });
          card.setAttribute("data-id", data._id);
          card.setAttribute("data-user-id", data.owner._id);
          updateLikes(card);
          likeCards(card);
          removeCards(card);
          return card;
        },
      },
      ".elements__table"
    );
    section.renderItems();
  }

  setInitialCards() {
    return fetch(this._baseUrl, {
      headers: {
        authorization: "6bf7647c-45da-4c77-891f-7b53e2ffb971",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        this.setCards(result);
      })
      .catch((err) => console.log(err));
  }

  getUserInfo() {
    return fetch(this._baseUrl, {
      headers: {
        authorization: "6bf7647c-45da-4c77-891f-7b53e2ffb971",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        (this._name.textContent = result.name),
          (this._about.textContent = result.about);
        return this._name, this._about;
      })
      .catch((err) => console.log(err));
  }

  editProfile() {
    return fetch(this._baseUrl, {
      method: "PATCH",
      headers: {
        authorization: "6bf7647c-45da-4c77-891f-7b53e2ffb971",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this._name,
        about: this._about,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        const profileUser = new UserInfo({
          userName: this._name,
          userJob: this._about,
        });
        return profileUser;
      })
      .catch((err) => console.log(err));
  }

  createNewCard() {
    return fetch(this._baseUrl, {
      method: "POST",
      headers: {
        authorization: "6bf7647c-45da-4c77-891f-7b53e2ffb971",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this._name,
        link: this._link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.log(err));
  }

  getCurrentUser() {
    return fetch(this._baseUrl, {
      headers: {
        authorization: "6bf7647c-45da-4c77-891f-7b53e2ffb971",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        return result._id;
      })
      .catch((err) => console.log(err));
  }

  getLikes() {
    return fetch(this._baseUrl, {
      headers: {
        authorization: "6bf7647c-45da-4c77-891f-7b53e2ffb971",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        return result;
      })
      .catch((err) => console.log(err));
  }

  putLike() {
    return fetch(
      `https://around.nomoreparties.co/v1/web_es_cohort_03/cards/likes/${this._cardId}`,
      {
        method: "PUT",
        headers: {
          authorization: "6bf7647c-45da-4c77-891f-7b53e2ffb971",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        return (result.likes = +1);
      })
      .catch((err) => console.log(err));
  }

  deleteLikes() {
    return fetch(
      `https://around.nomoreparties.co/v1/web_es_cohort_03/cards/likes/${this._cardId}`,
      {
        method: "DELETE",
        headers: {
          authorization: "6bf7647c-45da-4c77-891f-7b53e2ffb971",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        return (result.likes = -1);
      })
      .catch((err) => console.log(err));
  }

  deleteCard() {
    fetch(
      `https://around.nomoreparties.co/v1/web_es_cohort_03/cards/${this._cardId}`,
      {
        method: "DELETE",
        headers: {
          authorization: "6bf7647c-45da-4c77-891f-7b53e2ffb971",
          "Content-Type": "application/json",
        },
      }
    )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  }

  setNewAvatar() {
    return fetch(this._baseUrl, {
      method: "PATCH",
      headers: {
        authorization: "6bf7647c-45da-4c77-891f-7b53e2ffb971",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: this._avatar,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.log(err));
  }
}
