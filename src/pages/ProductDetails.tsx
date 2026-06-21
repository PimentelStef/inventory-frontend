import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Product } from "../types/Product";
import "../styles/ProductDetails.css"
import api from "../services/api";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    api
      .get(`/Products/${id}`)
      .then((res) =>
        setProduct(res.data)
      );
  }, [id]);

  if (!product)
    return <h2>Loading...</h2>;

  return (
    <div className="product-details">

    <h1>{product.name}</h1>

    <p>
      <strong>SKU:</strong>
      {product.sku}
    </p>

    <p>
      <strong>Category:</strong>
      {product.categoryName}
    </p>

    <p>
      <strong>Description:</strong>
      {product.description}
    </p>

    <p>
      <strong>Price:</strong>
      ₱{product.unitPrice}
    </p>

    <p>
      <strong>Stock:</strong>
      {product.stockQuantity}
    </p>

    <button
      onClick={() => navigate(-1)}
    >
      Back
    </button>

    </div>
  );
}