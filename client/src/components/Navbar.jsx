import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Safety App</h2>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;