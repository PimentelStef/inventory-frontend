import { useNavigate } from "react-router-dom";
import type { Product } from "../types/Product";
import "../styles/ProductCard.css";

type Props = { product: Product;
};

export default function ProductCard({
  product,
}: Props) {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <h3>{product.name}</h3>

      <p>
        SKU:
        {" "}
        {product.sku}
      </p>

      <p>
        ₱{product.unitPrice}
      </p>

      <p>
        Stock:
        {" "}
        {product.stockQuantity}
      </p>

      <button
        onClick={() =>
          navigate(
            `/products/${product.productId}`
          )
        }
      >
        View Details
      </button>
    </div>
  );
}