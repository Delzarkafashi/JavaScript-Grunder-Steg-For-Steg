export async function fetchFakeProducts() {
  const res = await fetch("https://fakestoreapi.com/products")

  if (!res.ok) {
    throw new Error("Kunde inte hämta produkter")
  }

  const data = await res.json()
  // array med produkter
  return data 
}