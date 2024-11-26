import React from "react";
import "./Header.scss";
import { LINKS } from "../../static/header";

const Header = () => {
  const linkItems = LINKS.map((item) => (
    <li key={item.id} className="navbar__item">
      <a href={item.link} className="navbar__link">
        {item.icon && <item.icon className="navbar__icon" />}
        <span>{item.name}</span>
      </a>
    </li>
  ));

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar__collection">{linkItems}</ul>
      </nav>
    </header>
  );
};

export default Header;
