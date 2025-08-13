// Starters
const starters = [
  {
    title: "Brik à l’Œuf",
    description: "Crispy pastry filled with egg, tuna, and capers.",
    price: "12 DT",
  },
  {
    title: "Salade Méchouia",
    description: "Grilled peppers and tomatoes with garlic and olive oil.",
    price: "10 DT",
  },
  {
    title: "Lablabi",
    description: "Chickpea soup with harissa, olive oil, and bread.",
    price: "8 DT",
  },
];

// Mains
const mains = [
  {
    title: "Couscous Royal",
    description:
      "Steamed semolina with lamb, chicken, merguez, and vegetables.",
    price: "28 DT",
  },
  {
    title: "Ojja Merguez",
    description: "Spicy tomato and pepper stew with eggs and merguez sausage.",
    price: "20 DT",
  },
  {
    title: "Sea Bass with Charmoula",
    description: "Marinated and grilled whole fish with herbs.",
    price: "30 DT",
  },
];

export function loadMenu() {
  const contentBox = document.querySelector("#content");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const heading = document.createElement("h1");
  heading.textContent = "Menu";

  const sep = document.createElement("div");
  sep.classList.add("seperation");

  const startersDiv = document.createElement("div");
  startersDiv.classList.add("starters");

  const startersHeading = document.createElement("h1");
  startersHeading.textContent = "Our Starters";

  const startersOptns = document.createElement("div");
  startersOptns.classList.add("starters-optns");

  for (const item of starters) {
    const starterItem = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    const price = document.createElement("h4");
    price.textContent = item.price;

    starterItem.appendChild(title);
    starterItem.appendChild(description);
    starterItem.appendChild(price);

    startersOptns.appendChild(starterItem);
  }

  const mainsDiv = document.createElement("div");
  mainsDiv.classList.add("mains");

  const mainsHeading = document.createElement("h1");
  mainsHeading.textContent = "Our Mains";

  const menusOptns = document.createElement("div");
  menusOptns.classList.add("mains-optns");

for (const item of mains) {
    const mainItem = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    const price = document.createElement("h4");
    price.textContent = item.price;

    mainItem.appendChild(title);
    mainItem.appendChild(description);
    mainItem.appendChild(price);

    menusOptns.appendChild(mainItem);
}

mainsDiv.appendChild(mainsHeading);
mainsDiv.appendChild(menusOptns);

startersDiv.appendChild(startersHeading);
startersDiv.appendChild(startersOptns);

menuContainer.appendChild(heading);
menuContainer.appendChild(sep);
menuContainer.appendChild(startersDiv);
menuContainer.appendChild(mainsDiv);

contentBox.appendChild(menuContainer);
}
