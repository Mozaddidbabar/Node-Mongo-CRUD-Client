import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/users">
        Users
      </Link>
      <Link className="link" to="/addUser">
        Add User
      </Link>
    </nav>
  );
};

export default Header;
