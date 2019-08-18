import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {
  MdMenu,
  MdClose,
  MdHome,
  MdPersonPin,
  MdCollectionsBookmark
} from "react-icons/md";

const menu = [
  { label: "Home", icon: <MdHome />, to: "/" },
  { label: "Autor", icon: <MdPersonPin />, to: "/autor" },
  { label: "Livro", icon: <MdCollectionsBookmark />, to: "/livro" }
];

function BarraLateral() {
  const [openedMenu, setOpenMenu] = useState(false);
  return (
    <div className="sideMenuContainer">
      <input type="checkbox" id="chkbx" />
      <label
        htmlFor="chkbx"
        className="containerIcon"
        onClick={() => setOpenMenu(!openedMenu)}
      >
        {openedMenu ? (
          <MdClose className="menuIcon" />
        ) : (
          <MdMenu className="menuIcon" />
        )}
      </label>
      <nav className="navContainer">
        <ul className="ulContainer">
          {menu.map((menuItem, index) => (
            <Link key={index} className="links" to={menuItem.to}>
              <li className="liContainer">
                {openedMenu ? menuItem.label : menuItem.icon}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default BarraLateral;
