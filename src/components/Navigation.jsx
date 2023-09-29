// import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            accueil
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/knowledges"}
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            compétences
          </NavLink>
        </li>

        <li className="nav-portfolio">
          portfolio
          <ul className="nav-projects">
            <NavLink
              to="/projet1"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet 1</li>
            </NavLink>
            <NavLink
              to="/projet2"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet 2</li>
            </NavLink>
            <NavLink
              to="/projet3"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet 3</li>
            </NavLink>
            <NavLink
              to="/projet4"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet 4</li>
            </NavLink>
          </ul>
        </li>

        <li>
          <NavLink
            to={"/contact"}
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
