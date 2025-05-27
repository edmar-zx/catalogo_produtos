// 1. Pegar a categoria da URL
function obterCategoriaDaURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('categoria');
}

// 2. Filtrar os produtos com base na categoria
function filtrarProdutosPorCategoria(categoria) {
  return produtos.filter(produto => produto.categoria === categoria);
}

// 3. Exibir produtos (já está certo — sua versão com createElement é segura!)
function exibirProdutos(produtosFiltrados) {
  const container = document.getElementById('produtos');
  container.innerHTML = '';

  produtosFiltrados.forEach(produto => {
    const div = document.createElement('div');
    div.classList.add('produto');

    const img = document.createElement('img');
    img.src = produto.imagem;
    img.alt = produto.nome;

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info-produto');

    const nome = document.createElement('p');
    nome.classList.add('nome-produto');
    nome.textContent = produto.nome;

    const preco = document.createElement('p');
    preco.classList.add('preco-produto');
    preco.textContent = produto.preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'Adicionar ao Carrinho';

    infoDiv.appendChild(nome);
    infoDiv.appendChild(preco);
    infoDiv.appendChild(link);

    div.appendChild(img);
    div.appendChild(infoDiv);
    container.appendChild(div);
  });
}

// 4. Execução automática quando a página carregar
const categoriaSelecionada = obterCategoriaDaURL();
document.getElementById('titulo-categoria').textContent = categoriaSelecionada;

// Aqui está o ponto importante: precisa filtrar antes de exibir!
const produtosFiltrados = filtrarProdutosPorCategoria(categoriaSelecionada);
exibirProdutos(produtosFiltrados);
