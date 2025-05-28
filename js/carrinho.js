// js/carrinho.js

function carregarCarrinho() {
  const produtosCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const container = document.getElementById('produtos');

  container.innerHTML = ''; // Limpa o conteúdo

  if (produtosCarrinho.length === 0) {
    const vazio = document.createElement('p');
    vazio.textContent = 'O carrinho está vazio.';
    container.appendChild(vazio);
    return;
  }

  produtosCarrinho.forEach(produto => {
    const item = document.createElement('div');
    item.classList.add('item-carrinho');

    const img = document.createElement('img');
    img.src = produto.imagem;
    img.alt = produto.nome;
    img.classList.add('imagem-carrinho');

    const info = document.createElement('div');
    info.classList.add('info-carrinho');

    const titulo = document.createElement('h3');
    titulo.textContent = produto.nome;

    const categoria = document.createElement('p');
    categoria.innerHTML = `<strong>Categoria:</strong> `;
    categoria.append(document.createTextNode(produto.categoria));

    const preco = document.createElement('p');
    preco.innerHTML = `<strong>Preço:</strong> ${produto.preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })}`;

    const botaoRemover = document.createElement('button');
    botaoRemover.classList.add('remover-produto');
    botaoRemover.textContent = 'Remover';
    botaoRemover.dataset.id = produto.id;

    botaoRemover.addEventListener('click', () => {
      removerProdutoDoCarrinho(produto.id);
    });

    info.append(titulo, categoria, preco, botaoRemover);
    item.append(img, info);
    container.appendChild(item);
  });
}


function removerProdutoDoCarrinho(idProduto) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho = carrinho.filter(produto => produto.id !== idProduto);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  carregarCarrinho(); // Recarrega a lista
}

// Botão para limpar o carrinho inteiro
document.getElementById('limpar-carrinho')?.addEventListener('click', () => {
  localStorage.removeItem('carrinho');
  carregarCarrinho();
});

// Inicializa
carregarCarrinho();



