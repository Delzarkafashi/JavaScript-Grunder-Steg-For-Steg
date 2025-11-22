export function openProductModal(product) {
  const overlay = document.createElement("div")
  overlay.classList.add("modal-overlay")

  const parent = document.createElement("div")
  parent.classList.add("parent-klader", "modal-card-wrapper")

  const card = document.createElement("section")
  card.classList.add("produkt-kort-klader", "modal-card")

  const titleEl = document.createElement("h3")
  titleEl.classList.add("titel-klader")
  titleEl.textContent = product.title

  const imgWrapper = document.createElement("div")
  imgWrapper.classList.add("bild-klader")

  const img = document.createElement("img")
  img.src = product.image
  img.alt = product.title
  imgWrapper.appendChild(img)

  const descEl = document.createElement("p")
  descEl.classList.add("beskrivning-klader")
  descEl.textContent = product.description

  const priceEl = document.createElement("div")
  priceEl.classList.add("pris-klader")
  priceEl.textContent = `${product.price} USD`

  const ratingEl = document.createElement("p")
  ratingEl.classList.add("rating-text")  
  ratingEl.textContent = `Betyg: ${product.rating.rate} (${product.rating.count} reviews)`

  const closeBtn = document.createElement("button")
  closeBtn.type = "button"
  closeBtn.classList.add("kop-knapp-klader")
  closeBtn.textContent = "Stäng"
  closeBtn.addEventListener("click", () => overlay.remove())

  card.append(titleEl, imgWrapper, descEl, ratingEl, priceEl, closeBtn)
  parent.appendChild(card)
  overlay.appendChild(parent)

  overlay.addEventListener("click", e => {
    if (e.target === overlay) overlay.remove()
  })

  document.body.appendChild(overlay)
}
