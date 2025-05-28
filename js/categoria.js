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
document.getElementById('titulo-categoria').textContent = categoriaSelecionada;

// precisa filtrar antes de exibir
const produtosFiltrados = filtrarProdutosPorCategoria(categoriaSelecionada);
exibirProdutos(produtosFiltrados);





// 3. Exibir produtos (já está certo — sua versão com createElement é segura!)
/* function exibirProdutos(produtosFiltrados) {
  const container = document.getElementById('produtos');
  container.innerHTML = '';

  produtosFiltrados.forEach(produto => {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('produto');


    const linkImagem = document.createElement('a');
    linkImagem.href = `detalhes.html?id=${produto.nome}`; 

    const img = document.createElement('img');
    img.src = produto.imagem;
    img.alt = produto.nome;

    linkImagem.appendChild(img)

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

    const botao = document.createElement('a');
    botao.href = '#';
    botao.textContent = 'Adicionar ao Carrinho';
    botao.classList.add('botao-carrinho');

    infoDiv.appendChild(nome);
    infoDiv.appendChild(preco);
    infoDiv.appendChild(botao);

    produtoDiv.appendChild(linkImagem);
    produtoDiv.appendChild(infoDiv, linkImagem);
    container.appendChild(produtoDiv);
  });
} */