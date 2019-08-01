import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/bootstrap/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import home from "./components/home";
import autor from "./components/autor/autor";
import livro from "./components/livro/livro";
import store from "./config/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/autor" component={autor} />
          <Route path="/livro" component={livro} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
