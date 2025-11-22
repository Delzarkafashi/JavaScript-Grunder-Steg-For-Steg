class ProductBoxComponentSteg1ForJs {
  constructor(parentElement) {
    this.parentElement = parentElement;

    // STEG 1: hårdkodad data i klassen
    this.title = "Hoodie svart";
    this.description = "Mjuk hoodie i bomull.";
    this.price = "399 kr";
    this.imageUrl = "img/hoodie-svart.png";
  }

  render() {
    const parent = document.createElement('div');
    parent.classList.add('parent-klader');

    const card = document.createElement('section');
    card.classList.add('produkt-kort-klader');

    const titleEl = document.createElement('h3');
    titleEl.classList.add('titel-klader');
    titleEl.textContent = this.title;

    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('bild-klader');

    const img = document.createElement('img');
    img.src = this.imageUrl;
    img.alt = this.title;
    imgWrapper.appendChild(img);

    const descEl = document.createElement('p');
    descEl.classList.add('beskrivning-klader');
    descEl.textContent = this.description;

    const priceEl = document.createElement('div');
    priceEl.classList.add('pris-klader');
    priceEl.textContent = this.price;

    const button = document.createElement('button');
    button.classList.add('kop-knapp-klader');
    button.type = 'button';
    button.textContent = 'Köp';

    card.append(titleEl, imgWrapper, descEl, priceEl, button);
    parent.appendChild(card);
    this.parentElement.appendChild(parent);
  }
}

// Användning steg 1
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.product-grid');
    const produkt1 = new ProductBoxComponentSteg1ForJs(grid);
    produkt1.render();

});
