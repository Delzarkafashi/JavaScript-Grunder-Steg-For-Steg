import { ProductBox } from "../classForMyProductBox.js"

export const hoodieBox = new ProductBox({
  title: "Hoodie svart (claser och moudlar del 1)",
  price: "399 kr",
  inStock: true,
  description: "Mjuk hoodie i bomull.",
  kategori: { namn: "Kläder", typ: "Hoodie" }
})

console.log(hoodieBox.getProductBox())
