// pages/api/proxy.js
export default async function handler(req, res) {
    const { offset, limit } = req.query;
    const token = process.env.API_TOKEN;
  
    try {
      const response = await fetch(`https://api.printful.com/store/products?offset=${offset}&limit=${limit}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        const error = await response.json();
        return res.status(response.status).json({ error: error.error.message || "Impossible de récupérer les produits" });
      }
  
      const data = await response.json();
      return res.status(200).json(data.result);
    } catch (error) {
      console.error("Erreur lors de la requête vers l'API externe :", error);
      return res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }  