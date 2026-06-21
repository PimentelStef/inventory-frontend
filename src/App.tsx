import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Reports from "./pages/Reports";

import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;