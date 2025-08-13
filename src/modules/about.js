export function loadAbout() {
  const contentBox = document.querySelector("#content");

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-us");

  const heading = document.createElement("h1");
  heading.textContent = "About Us";

  const para = document.createElement("p");
  para.textContent =
    "Our Story: Located in the heart of Tunis, Dar El Bahja is a celebration of Tunisia’s rich culinary heritage. Our recipes are inspired by generations of family cooking — blending Berber, Arab, Andalusian, and Mediterranean influences. We roast our meats over charcoal, bake bread in traditional tabouna ovens, and grind our spices fresh daily.";

  aboutContainer.appendChild(heading);
  aboutContainer.appendChild(para);
  contentBox.appendChild(aboutContainer);
}
