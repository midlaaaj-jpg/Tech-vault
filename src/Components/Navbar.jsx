import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <h2>TECH VAULT</h2>

      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
export default Navbar;
