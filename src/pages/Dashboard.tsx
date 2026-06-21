import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Products</h3>
          <p>150</p>
        </div>

        <div className="card">
          <h3>Orders Today</h3>
          <p>25</p>
        </div>

        <div className="card">
          <h3>Low Stock Items</h3>
          <p>12</p>
        </div>
      </div>
    </div>
  );
}