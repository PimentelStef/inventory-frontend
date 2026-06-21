import { useEffect, useState } from "react";
import type { Order } from "../types/Order";
import "../styles/Orders.css";
import api from "../services/api";

export default function Orders() {
const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api
      .get("/Orders")
      .then((res) =>
        setOrders(res.data)
      );
  }, []);

  return (
    <div>

      <h1>Orders</h1>

      {orders.map((o) => (
        <div key={o.orderId}>
          {o.orderNumber}
          {" | "}
          {o.customerName}
          {" | "}
          ₱{o.totalAmount}
          {" | "}
          {o.status}
        </div>
      ))}

    </div>
  );
}