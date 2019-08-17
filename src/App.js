import React, { Component } from "react";
import BarraLateral from "./components/barraLateral/BarraLateral";
import Cabecalho from "./components/cabecalho/cabecalho";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="defaultHeigh">
        <header>
          <Cabecalho />
        </header>
        <div>
          <aside>
            <BarraLateral />
          </aside>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default App;
