import "../styles/Orders.css";

export default function Orders() {
  return (
    <div className="orders">
      <h1>Orders</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1001</td>
              <td>Juan Dela Cruz</td>
              <td>₱3,500</td>
            </tr>

            <tr>
              <td>1002</td>
              <td>Maria Santos</td>
              <td>₱1,200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}