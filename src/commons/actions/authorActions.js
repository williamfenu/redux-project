export function authorActions(author) {
  return {
    type: "ADD_AUTHOR",
    nome: author.nome,
    email: author.email
  };
}
