export const getAllProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return data;

    } catch (error) {
        console.error(error);
    }
}

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    }
  };
  
  export const getProductDetail = async (id: number): Promise<Product> => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data: Product = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching product detail:", error);
      throw error;
    }
  };
  