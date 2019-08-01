import React, { Component } from "react";
import "./styles.css";

class Cabecalho extends Component {
  render() {
    return (
      <div className="header">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Much longer nav link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Cabecalho;
