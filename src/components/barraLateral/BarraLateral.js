import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class BarraLateral extends Component {
  render() {
    return (
      <div className="barraLateral">
        <nav>
          <ul className="nav flex-column">
            <li className="classNamenav-item">
              <Link className="nav-link active links" to="/">
                Home
              </Link>
            </li>
            <li className="classNamenav-item">
              <Link className="nav-link active links" to="/autor">
                Autor
              </Link>
            </li>
            <li className="classNamenav-item">
              <Link className="nav-link active links" to="/livro">
                Livro
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default BarraLateral;
