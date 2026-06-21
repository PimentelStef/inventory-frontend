import { useEffect, useState } from "react";
import type { InventoryValue } from "../types/InventoryValue";
import api from "../services/api";
import "../styles/Dashboard.css";
import type { Product } from "../types/Product";

export default function Dashboard() {
const [stats, setStats] = useState<InventoryValue | null>(null);
const [lowStock, setLowStock] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get(
        "/Analytics/inventory-value"
      )
      .then((res) =>
        setStats(res.data)
      );
        api
    .get(
      "/Analytics/low-stock"
    )
    .then((res) =>
      setLowStock(res.data)
    );
  }, []);

  if (!stats)
    return <h2>Loading...</h2>;

  return (
    <div>

      <div className="card">
        <h3>Total Products</h3>
        <p>{stats.totalProducts}</p>
      </div>

      <div className="card">
        <h3>Total Units</h3>
        <p>{stats.totalUnits}</p>
      </div>

      <div className="card">
        <h3>Total Cost Value</h3>
        <p>
          ₱
          {stats.totalCostValue}
        </p>
      </div>

      <div className="card">
        <h3>Total Retail Value</h3>
        <p>
          ₱
          {stats.totalRetailValue}
        </p>
        <hr />

      <h2>
        Low Stock Products
      </h2>

      {lowStock.length === 0 ? (
        <p>
          No low stock products.
        </p>
      ) : (
        lowStock.map((p) => (
          <div
            key={p.productId}
          >
            {p.name}
            {" - "}
            {p.stockQuantity}
            {" left"}
          </div>
        ))
      )}
      </div>

    </div>
  );
}