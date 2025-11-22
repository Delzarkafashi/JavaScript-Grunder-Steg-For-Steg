export async function fetchProducts() {
  //fake-API-fil
  const res = await fetch("assets/products.json"); 

  if (!res.ok) {
    throw new Error("Kunde inte hämta produkter");
  }

  const data = await res.json();
  // array med produkter
  return data; 
}
