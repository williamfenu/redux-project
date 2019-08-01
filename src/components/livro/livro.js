import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import livroActions from "../../commons/actions/livroActions";

class LivroField extends Component {
  render() {
    return (
      <div>
        <input
          className="form-control"
          type="text"
          name="nome"
          value={this.props.value.nome}
          onChange={event => this.props.handleChange(event)}
          placeholder="nome"
        />
        <input
          className="form-control"
          type="number"
          name="ano"
          value={this.props.value.ano}
          onChange={event => this.props.handleChange(event)}
          placeholder="ano"
        />
        <button className="btn btn-outline-secondary">Enviar</button>
      </div>
    );
  }
}
class LivroBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      ano: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log(this.props.books);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return <LivroField handleChange={this.handleChange} value={this.state} />;
  }
}
export default connect(state => ({ books: state }))(LivroBox);
