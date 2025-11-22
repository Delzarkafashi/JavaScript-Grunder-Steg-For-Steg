import { ProductBox } from "../classForMyProductBox.js";
import { fetchProducts } from "./steg2productsApi.js";

function createProductCard(product, imageUrl) {
  const parent = document.createElement("div");
  parent.classList.add("parent-klader");

  const card = document.createElement("section");
  card.classList.add("produkt-kort-klader");

  const titleEl = document.createElement("h3");
  titleEl.classList.add("titel-klader");
  titleEl.textContent = product.title;

  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("bild-klader");

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = `${product.title} – produktbild`;
  imgWrapper.appendChild(img);

  const descEl = document.createElement("p");
  descEl.classList.add("beskrivning-klader");
  descEl.textContent = product.description;

  const priceEl = document.createElement("div");
  priceEl.classList.add("pris-klader");
  priceEl.textContent = product.price;

  const button = document.createElement("button");
  button.classList.add("kop-knapp-klader");
  button.type = "button";
  button.textContent = "Köp";

  card.append(titleEl, imgWrapper, descEl, priceEl, button);
  parent.appendChild(card);

  return parent;
}

document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.querySelector(".product-grid");

  try {
     // hämta från “API”
    const rawProducts = await fetchProducts();

    rawProducts.forEach(item => {
      // mappa JSON → klass
      const product = new ProductBox({
        title: item.name,
        price: `${item.price} ${item.currency}`,
        inStock: item.inStock,
        description: item.description,
        kategori: { namn: item.category, brand: item.brand }
      });

      const card = createProductCard(product, item.image);
      grid.appendChild(card);
    });
  } catch (err) {
    console.error(err);
  }
});
