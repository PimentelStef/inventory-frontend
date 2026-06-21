import "../styles/StockIndicator.css";

type Props = {
  stock: number;
  threshold: number;
};

export default function StockIndicator({ stock, threshold, }: Props) {
  
  const className =
    stock <= threshold
      ? "low-stock"
      : "in-stock";

  return (
    <span className={className}>
      {stock} items
    </span>
  );
}