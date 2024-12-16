export const fetchSelectedProducts = async (productIds) => {
    try {
      const promises = productIds.map((id) =>
        fetch(`https://api.printful.com/store/products/${id}`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        }).then((res) => res.json())
      );
  
      const results = await Promise.all(promises);
  
      // Filtrer les résultats valides
      const validProducts = results
        .filter((result) => result.code === 200)
        .map((result) => result.result);
  
      return validProducts;
    } catch (error) {
      console.error("Erreur lors de la récupération des produits :", error);
      return [];
    }
  };
