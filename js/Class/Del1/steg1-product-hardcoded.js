import { ProductJSFirstStep } from "../getProduktJSFirstStep.js"

export const hoodieBox = new ProductJSFirstStep({
  title: "Hoodie svart (Steg1)",
  price: "399 kr",
  inStock: true,
  description: "Mjuk hoodie i bomull.",
  kategori: { namn: "Kläder", typ: "Hoodie" }
})

console.log(hoodieBox.getProduktJSFirstStep())
