import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from "../../assets/logo.svg";
import "./navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wai">What is AI?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="ai__navbar">
      <div className="ai__navbar-links">
        <div className="ai__navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="ai__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="ai__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="ai__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            size={27}
            color={"#fff"}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            size={27}
            color={"#fff"}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="ai__navbar-menu_container scale-up-center">
            <div className="ai__navbar-menu_container-links">
              <Menu />
              <div className="ai__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
