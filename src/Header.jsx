import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header id="header">
      <Link to="/">
        {" "}
        <h2>Fatih</h2>
      </Link>

      <div className="right">
        <Link to="/projects">Project</Link>
        <HashLink to="#about">{props.about}</HashLink>
      </div>
    </header>
  );
}

export default Header;
