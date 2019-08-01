export default function livroActions(livro) {
  return {
    type: "ADD_BOOKS",
    nome: livro.nome,
    ano: livro.ano
  };
}
