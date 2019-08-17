import React, { Component } from "react";
import BarraLateral from "./components/barraLateral/BarraLateral";
import Cabecalho from "./components/cabecalho/cabecalho";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Cabecalho />
        </header>
        <div>
          <aside>
            <BarraLateral />
          </aside>
          <main>{this.props.children}</main>
        </div>
      </div>
    );
  }
}

export default App;
