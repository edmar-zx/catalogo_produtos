// Pega a categoria da URL
function obterCategoriaDaURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('categoria');
}

// Filtrar os produtos com base na categoria
function filtrarProdutosPorCategoria(categoria) {
  return produtos.filter(produto => produto.categoria === categoria);
}

// Execução automática quando a página carregar
const categoriaSelecionada = obterCategoriaDaURL();
document.getElementById('titulo-pagina').textContent = categoriaSelecionada;

// precisa filtrar antes de exibir
const produtosFiltrados = filtrarProdutosPorCategoria(categoriaSelecionada);
exibirProdutos(produtosFiltrados);
