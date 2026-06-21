import "../styles/Reports.css";

export default function Reports() {
  return (
    <div className="reports">
      <h1>Sales Reports</h1>

      <div className="report-grid">
        <div className="report-card">
          <h3>Sales Today</h3>
          <p>₱15,000</p>
        </div>

        <div className="report-card">
          <h3>Monthly Sales</h3>
          <p>₱250,000</p>
        </div>

        <div className="report-card">
          <h3>Products Sold</h3>
          <p>420</p>
        </div>
      </div>
    </div>
  );
}