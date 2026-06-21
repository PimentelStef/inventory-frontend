import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Reports.css";
import type { SalesSummary } from "../types/SalesSummary";
import type { TopProduct } from "../types/TopProduct";

export default function Reports() {
  const [sales,
    setSales] =
    useState<SalesSummary[]>([]);

  const [topProducts,
    setTopProducts] =
    useState<TopProduct[]>([]);

  useEffect(() => {
    api
      .get("/Analytics/sales")
      .then((res) =>
        setSales(res.data)
      );

    api
      .get(
        "/Analytics/top-products"
      )
      .then((res) =>
        setTopProducts(
          res.data
        )
      );
  }, []);

  return (
    <div className="reports">
      <h1>
        Sales Reports
      </h1>

      <div className="report-grid">

        <div className="report-card">
          <h3>
            Sales Days
          </h3>

          <p>
            {sales.length}
          </p>
        </div>

        <div className="report-card">
          <h3>
            Top Products
          </h3>

          <p>
            {topProducts.length}
          </p>
        </div>

      </div>

      <h2>
        Best Selling Products
      </h2>

      {topProducts.map(
        (p) => (
          <div
            key={
              p.productId
            }
          >
            {p.name}
            {" - "}
            {p.unitsSold}
            {" sold"}
          </div>
        )
      )}
    </div>
  );
}