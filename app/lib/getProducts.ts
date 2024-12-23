export const getProducts = async (offset: number = 0, limit: number = 20) => {
  // Détection de l'origine pour construire une URL absolue
  const origin =
    typeof window !== "undefined"
      ? "" // En environnement client, laissez l'URL relative
      : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"; // Utilisez l'origine en SSR

  const proxyUrl = `${origin}/api/proxy?offset=${offset}&limit=${limit}`;

  try {
    const res = await fetch(proxyUrl);

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to fetch products: ${res.statusText}. Details: ${errorText}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error('Invalid response format: Expected an array');
    }

    return data;
  } catch (error) {
    console.error("Error fetching products via proxy:", error);
    throw error;
  }
};