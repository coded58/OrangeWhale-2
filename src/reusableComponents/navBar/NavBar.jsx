import "./styles.css";
import { FaUserCircle as Profile } from "react-icons/fa";
import { GiHamburgerMenu as Bar } from "react-icons/gi";
import { useState } from "react";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    console.log(setOpenMenu());
  };

  return (
    <nav>
      <div className="nav">
        <Bar className="nav-icon" onClick={handleOpenMenu} />
        <Profile className="nav-icon" />
      </div>
    </nav>
  );
};

export default NavBar;
