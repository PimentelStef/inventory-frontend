import ProductCard from "../components/ProductCard";
import "../styles/Products.css";

export default function Products() {
  return (
    <div className="products">
      <h1>Products</h1>

      <div className="search-section">
        <input type="text" placeholder="Search products..." />

        <select>
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Food</option>
          <option>Accessories</option>
        </select>

        <button>Search</button>
      </div>

      <div className="product-grid">
        <ProductCard
          name="Laptop"
          price={45000}
          quantity={5}
        />

        <ProductCard
          name="Mouse"
          price={600}
          quantity={50}
        />

        <ProductCard
          name="Keyboard"
          price={1500}
          quantity={20}
        />
      </div>
    </div>
  );
}