import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import "../styles/Products.css";
import SearchBar from "../components/SearchBar";
import type { Product } from "../types/Product";

export default function Products() {
  const [products, setProducts] =
    useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res =
        await api.get("/Products");

      setProducts(res.data);
    };

    fetchProducts();
  }, []);

  async function handleSearch(
    keyword: string
  ) {
    if (keyword.trim() === "") {
      const res =
        await api.get("/Products");

      setProducts(res.data);
      return;
    }

    const res = await api.get(
      `/Products?search=${keyword}`
    );

    setProducts(res.data);
  }

  return (
    <>
      <h1>Products</h1>

      <SearchBar
        onSearch={handleSearch}
      />

      {products.map((p) => (
        <div key={p.productId}>
          <h3>{p.name}</h3>

          <p>SKU: {p.sku}</p>

          <p>
            Stock:
            {p.stockQuantity}
          </p>

          <p>
            ₱{p.unitPrice}
          </p>

          <Link
            to={`/products/${p.productId}`}
          >
            <button>
              View Details
            </button>
          </Link>
        </div>
      ))}
    </>
  );
}