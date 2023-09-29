import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <nav id="side-bar" className={isOpen ? "active" : ""}>
      <div className="toggle-btn" id="btn" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul id="liens-sideBar">
        <li>
          <Link
            to={"/"}
            // className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            accueil
          </Link>
        </li>

        <li>
          <Link
            to={"/knowledges"}
            // className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            compétences
          </Link>
        </li>

        <Link
          to="/projet1"
          //   className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>projet 1</li>
        </Link>
        <Link
          to="/projet2"
          //   className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>projet 2</li>
        </Link>
        <Link
          to="/projet3"
          //   className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>projet 3</li>
        </Link>
        <Link
          to="/projet4"
          //   className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>projet 4</li>
        </Link>

        <li>
          <Link
            to={"/contact"}
            // className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
