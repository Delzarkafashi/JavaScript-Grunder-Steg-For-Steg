import { FakeProductBox } from "./ClassForFakeProductBox.js"
import { fetchFakeProducts } from "./fakeStoreApi.js"
import { openProductModal } from "./PopUpFunctionForFakeStoreReadMore.js"

function createProductCard(product) {
  const parent = document.createElement("div")
  parent.classList.add("parent-klader")

  const card = document.createElement("section")
  card.classList.add("produkt-kort-klader")

  // Titel
  const titleEl = document.createElement("h3")
  titleEl.classList.add("titel-klader")
  titleEl.textContent = product.title

  // Bild
  const imgWrapper = document.createElement("div")
  imgWrapper.classList.add("bild-klader")

  const img = document.createElement("img")
  img.src = product.image
  img.alt = product.title
  imgWrapper.appendChild(img)

  // Kort beskrivning + Läs mer
  const descEl = document.createElement("p")
  descEl.classList.add("beskrivning-klader")

  const maxWords = 10
  const words = product.description.split(" ")
  let shortText = words.slice(0, maxWords).join(" ") + "... "

  // Klickbar “Läs mer”
  const readMoreSpan = document.createElement("span")
  readMoreSpan.textContent = "Läs mer"
  readMoreSpan.style.color = "#5a7cff"
  readMoreSpan.style.cursor = "pointer"
  readMoreSpan.addEventListener("click", () => openProductModal(product))

  descEl.textContent = shortText
  descEl.appendChild(readMoreSpan)

  // Pris
  const priceEl = document.createElement("div")
  priceEl.classList.add("pris-klader")
  priceEl.textContent = `${product.price} USD`

  // Köp-knapp
  const button = document.createElement("button")
  button.classList.add("kop-knapp-klader")
  button.type = "button"
  button.textContent = "Köp"

  // Bygg kortet
  card.append(titleEl, imgWrapper, descEl, priceEl, button)
  parent.appendChild(card)

  return parent
}
// Init
document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.querySelector(".product-grid")

  try {
    const rawProducts = await fetchFakeProducts()

    rawProducts.forEach(item => {
      const prod = new FakeProductBox(item)
      const card = createProductCard(prod)
      grid.appendChild(card)
    })
  } catch (err) {
    console.error(err)
  }
})
