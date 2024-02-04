import "./style.css";
import apiData from "./apiData";

const documentationGrid = document.getElementById("documentation-grid");

const createApiCard = (heading: string, apiRoute: string) => {
  // create html elements
  let card = document.createElement("div");
  let cardTitle = document.createElement("p");
  let cardLink = document.createElement("a");

  // parse data into html elements created and set attributes
  cardTitle.innerText = `GET - ${heading}`;
  cardLink.innerText = apiRoute;
  cardLink.href = apiRoute;

  // add css classes to style HTML elements
  card.classList.add("card");
  cardTitle.classList.add("card-title");
  cardLink.classList.add("card-link");

  card.appendChild(cardTitle);
  card.appendChild(cardLink);
  documentationGrid?.appendChild(card);
};

apiData.forEach((data) => {
  createApiCard(data.title, data.url);
})