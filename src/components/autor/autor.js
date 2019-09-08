import React, { Component, useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import authorActions from "../../commons/actions/autorActions";

class AutorInput extends Component {
  render() {
    return (
      <main
        style={{
          display: "flex"
        }}
      >
        <form
          style={{
            display: "flex",
            flexFlow: "column"
          }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="nome"
            name="nome"
            value={this.props.autor.nome}
            onChange={e =>
              this.props.handleChange({
                ...this.props.autor,
                [e.target.name]: e.target.value
              })
            }
          />
          <input
            type="email"
            className="form-control"
            placeholder="email"
            name="email"
            value={this.props.autor.email}
            onChange={e =>
              this.props.handleChange({
                ...this.props.autor,
                [e.target.name]: e.target.value
              })
            }
          />
          <input
            type="password"
            className="form-control"
            placeholder="senha"
            name="senha"
            value={this.props.autor.senha}
            onChange={e =>
              this.props.handleChange({
                ...this.props.autor,
                [e.target.name]: e.target.value
              })
            }
          />
          <button
            className="btn btn-outline-secondary"
            onClick={this.props.handleSubmit()}
          >
            Enviar
          </button>
        </form>
      </main>
    );
  }
}

class AutorTable extends Component {
  render() {
    return (
      <table
        className="table"
        style={{ border: "double 1px black", borderCollapse: "separate" }}
      >
        <thead>
          <tr>
            <th>Titulo</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {this.props.list &&
            this.props.list.map((reg, index) => (
              <tr key={index}>
                <td>{reg.nome}</td>
                <td>{reg.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

//uso do hooks
const AutorBox = () => {
  const [autor, setAutor] = useState({ nome: "", email: "", senha: "" });
  const returnedList = useSelector(state => state);
  const dispatch = useDispatch();

  function handleSubmit() {
    event.preventDefault();

    dispatch({ type: "ADD_AUTHOR", nome: autor.nome, email: autor.email });
    clearFields();
  }

  function clearFields() {
    setAutor({ nome: "", email: "", senha: "" });
  }

  return (
    <div>
      <AutorInput
        autor={autor}
        handleChange={setAutor}
        handleSubmit={() => handleSubmit}
      />
      <AutorTable list={returnedList} />
    </div>
  );
};

//versáo com redux antigo

// class AutorBox extends Component {
//   constructor() {
//     super();
//     this.state = {
//       autor: {
//         nome: "",
//         email: "",
//         senha: ""
//       },
//       list: []
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.cleanFields = this.cleanFields.bind(this);
//   }

//   componentDidMount() {
//     this.setState({
//       list: this.props.authors
//     });
//   }
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.authors) {
//       this.setState({
//         list: nextProps.authors
//       });
//     }
//   }

//   handleChange(event) {
//     this.setState({
//       autor: {
//         ...this.state.autor,
//         [event.target.name]: event.target.value
//       }
//     });
//   }

//   handleSubmit() {
//     event.preventDefault();
//     const autor = {
//       nome: this.state.autor.nome,
//       email: this.state.autor.email
//     };
//     this.props.authorActions(autor);

//     this.cleanFields();
//   }

//   cleanFields() {
//     this.setState({
//       autor: {
//         nome: "",
//         email: "",
//         senha: ""
//       }
//     });
//   }

//   render() {
//     return (
//       <div>
//         <AutorInput
//           autor={this.state.autor}
//           handleChange={this.handleChange}
//           handleSubmit={() => this.handleSubmit}
//         />
//         <AutorTable list={this.state.list} />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({ authors: state });

// const mapDispatchToProps = dispatch => ({
//   authorActions: autor => dispatch(authorActions(autor))
// });

//não é necessário connect com hooks

export default /*connect(
  mapStateToProps,
  mapDispatchToProps
)*/ AutorBox;
