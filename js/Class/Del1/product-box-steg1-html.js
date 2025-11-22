import { hoodieBox } from "./steg1-product-hardcoded.js"

function createProductCard(product) {
  const parent = document.createElement("div")
  parent.classList.add("parent-klader")

  const card = document.createElement("section")
  card.classList.add("produkt-kort-klader")

  const titleId = `produkt-titel-${crypto.randomUUID()}`
  card.setAttribute("aria-labelledby", titleId)

  // Titel
  const titleEl = document.createElement("h3")
  titleEl.classList.add("titel-klader")
  titleEl.id = titleId
  titleEl.textContent = product.title

  // Bild
  const imgWrapper = document.createElement("div")
  imgWrapper.classList.add("bild-klader")

  const img = document.createElement("img")
  img.src = "assets/images/hoodie-svart.jpg"
  img.alt = `${product.title} – produktbild`
  imgWrapper.appendChild(img)

  // Beskrivning
  const descEl = document.createElement("p")
  descEl.classList.add("beskrivning-klader")
  descEl.textContent = product.description

  // Pris
  const priceEl = document.createElement("div")
  priceEl.classList.add("pris-klader")
  priceEl.textContent = product.price

  // Lagerstatus för skärmläsare
  const stockText = document.createElement("p")
  stockText.classList.add("visually-hidden")
  stockText.textContent = product.inStock ? "I lager" : "Slut i lager"

  // Köp-knapp
  const button = document.createElement("button")
  button.classList.add("kop-knapp-klader")
  button.type = "button"
  button.textContent = "Köp"
  button.setAttribute(
    "aria-label",
    `Köp ${product.title} för ${product.price}`
  )

  card.append(titleEl, imgWrapper, descEl, priceEl, stockText, button)
  parent.appendChild(card)

  return parent
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".product-grid")
  const hoodieCard = createProductCard(hoodieBox)
  grid.appendChild(hoodieCard)
})
