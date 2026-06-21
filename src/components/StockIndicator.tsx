import "../styles/StockIndicator.css";

type Props = {
  quantity: number;
};

export default function StockIndicator({ quantity }: Props) {
  let className = "";

  if (quantity < 10) {
    className = "low-stock";
  } else if (quantity < 30) {
    className = "medium-stock";
  } else {
    className = "in-stock";
  }

  return (
    <span className={className}>
      {quantity} in stock
    </span>
  );
}