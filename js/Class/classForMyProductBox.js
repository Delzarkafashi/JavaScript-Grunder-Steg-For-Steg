export class ProductBox {
  constructor({ title, price, inStock, description = "", kategori = {} }) {
    this.title = title
    this.price = price
    this.inStock = inStock
    this.description = description
    this.kategori = kategori
  }

  getProductBox() {
    const lagerText = this.inStock ? "I lager" : "Slut i lager"
    return `${this.title} – ${this.price} (${lagerText})`
  }

  toggleInStock() {
    this.inStock = !this.inStock
    return this.inStock
  }
}
