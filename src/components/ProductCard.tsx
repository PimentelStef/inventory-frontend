import StockIndicator from "./StockIndicator";
import "../styles/ProductCard.css";

type Props = {
  name: string;
  price: number;
  quantity: number;
};

export default function ProductCard({
  name,
  price,
  quantity,
}: Props) {
  return (
    <div className="product-card">
      <h3>{name}</h3>

      <p>Price: ₱{price}</p>

      <StockIndicator quantity={quantity} />

      <button>View Details</button>
    </div>
  );
}