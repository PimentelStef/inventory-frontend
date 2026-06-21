import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/products">Products</NavLink>
        </li>

        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>

        <li>
          <NavLink to="/reports">Reports</NavLink>
        </li>
      </ul>
    </nav>
  );
}