export class FakeProductBox {
  constructor({ id, title, price, description, category, image, rating }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rating = rating;
  }

  getProductInfo() {
    return `${this.title} – ${this.price} USD (${this.category})`;
  }

  getRatingText() {
    return `Betyg: ${this.rating.rate} (${this.rating.count} reviews)`;
  }
}
