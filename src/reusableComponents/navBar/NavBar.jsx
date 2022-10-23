import "./styles.css";
import { FaUserCircle as Profile } from "react-icons/fa";
import { GiHamburgerMenu as Bar } from "react-icons/gi";
import { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <div className="nav">
        <Bar className="nav-icon" onClick={() => setShowMenu(!showMenu)} />
        <Profile className="nav-icon" />
      </div>
    </nav>
  );
};

export default NavBar;
