const INITIAL_STATE = [
  {
    nome: "William",
    email: "willianfn@msn.com"
  },
  {
    nome: "João",
    email: "joao@1234.com.br"
  }
];

export default function authorReducer(state = INITIAL_STATE, action) {
  if (action.type === "ADD_AUTHOR") {
    let newState = [...state];
    newState.push({ nome: action.nome, email: action.email });
    return newState;
  }
  return state;
}
