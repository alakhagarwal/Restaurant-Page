import interiorImgPath from "../images/au-coeur-de-la-medina.jpg"

const contentBox = document.querySelector("#content");

export function loadHome() {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  const heading = document.createElement("h1");
  heading.textContent = "Dar El Bahja";

  const para = document.createElement("p");
  para.textContent = "Authentic Tunisian flavors, straight from the medina.";

  const image = document.createElement("img");
  image.setAttribute("src", interiorImgPath);
  image.setAttribute("alt", "Restaurant Image");

  homeContainer.appendChild(heading);
  homeContainer.appendChild(para);
  homeContainer.appendChild(image);

  contentBox.appendChild(homeContainer);
}
