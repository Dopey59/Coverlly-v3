export async function getProducts() {
  const token = process.env.API_TOKEN;

  const res = await fetch("https://api.printful.com/store/products", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: { revalidate: 60 }, // Pour ISR (incremental static regeneration)
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error.message || "Impossible de récupérer les produits");
  }

  const data = await res.json();
  return data.result; // Retourne uniquement la liste des produits
}
