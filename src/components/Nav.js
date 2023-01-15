import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-body">
      <header className="header">
        <nav className="nav">
          <ul>
            <li>
              <a href="src/components/About.js">Connect</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
