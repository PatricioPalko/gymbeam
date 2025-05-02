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

export const getProductDetail = async (id: number) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return data;
    } catch (error) {
        console.error(error);
    }
}