export async function getProducts() {
    const token = process.env.API_TOKEN;
    
    const res = await fetch("https://api.printful.com/store/products", {
        
        headers: {
            Authorization: `Bearer ${token}`,
        },
        next: { revalidate: 60 },
    });
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return data.result;
  }
  