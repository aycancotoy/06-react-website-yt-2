import React, {useState} from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaTimes } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <MdFingerprint className="navbar-icon" />
            LAVISH
          </Link>
          <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <GoThreeBars />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
