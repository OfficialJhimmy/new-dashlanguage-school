import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/dash language black.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosExit } from "react-icons/io";

import Hamburger from "./Hamburger";
import "./index.css";

const Header = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: <HiOutlineMenuAlt3 />,
  });

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    return () => {
      // Cleanup event listener when component unmounts
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  useEffect(() => {
    // Listening for page changes.
    return navigateListener();
  }, []);

  const navigateListener = () => {
    navigate({
      listener: (location, action) => {
        setState({ clicked: false, menuName: <HiOutlineMenuAlt3 /> });
      },
    });
  };

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: <IoIosExit />,
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: <HiOutlineMenuAlt3 />,
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: <IoIosExit />,
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 85) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header className={navbar ? "nav-header active" : "nav-header"}>
      <div className="header__container">
        <div className="header__wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="Official Logo" className="dach__logo" />
              </Link>
            </div>
            <div className="menu">
              <button
                className="menu-btn"
                disabled={disabled}
                onClick={handleMenu}
              >
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default Header;
