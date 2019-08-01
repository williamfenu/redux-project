const INITIAL_STATE = [
  {
    nome: "As crônicas de Arthur",
    ano: "1995"
  },
  {
    nome: "O Hobbit",
    ano: "1937"
  }
];

export default function livroReducer(state = INITIAL_STATE, action) {
  if (action.type === "ADD_BOOKS") {
    let newState = [...state];
    newState.push({ nome: action.nome, email: action.ano });
    return newState;
  }
  return state;
}
