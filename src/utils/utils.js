import Card from "../components/Card.js";
import {
  openFormButton,
  addButton,
  saveButton,
  createButton,
} from "./constants.js";
import { handleAddFormSubmit, handleProfileFormSubmit } from "../index.js";

function likeCards(nodeCard) {
  const heartLike = nodeCard.querySelector(".elements__icon");
  heartLike.addEventListener("click", function (event) {
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

saveButton.addEventListener("click", handleProfileFormSubmit);
createButton.addEventListener("click", handleAddFormSubmit);

export { likeCards, removeCards };
