import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7068/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = async () => {
  const res = await api.get("/products");
  return res.data;
};

export const getProductById = async (
  id: number
) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

export const addProduct = async (
  product: any
) => {
  const res = await api.post(
    "/products",
    product
  );

  return res.data;
};

export const updateProduct = async (
  id: number,
  product: any
) => {
  const res = await api.put(
    `/products/${id}`,
    product
  );

  return res.data;
};

export const deleteProduct = async (
  id: number
) => {
  await api.delete(`/products/${id}`);
};

export default api;