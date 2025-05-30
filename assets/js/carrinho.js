function carregarCarrinho() {
  const produtosCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const container = document.getElementById('produtos-carrinho');
  const btnLimparCarrinho = document.getElementById('limpar-carrinho');

  container.innerHTML = ''; // Limpa o conteúdo

   // Mostrar ou esconder o botão limpar carrinho
  if (produtosCarrinho.length === 0) {
    if (btnLimparCarrinho) btnLimparCarrinho.style.display = 'none';

    const vazio = document.createElement('p');
    vazio.textContent = 'O carrinho está vazio.';
    vazio.classList.add('mensagem-vazio-titulo');
    container.appendChild(vazio);

    // Texto de sugestao
    const sugestao = document.createElement('p');
    sugestao.textContent = 'Que tal continuar explorando nossos produtos?';
    sugestao.classList.add('mensagem-vazio');
    container.appendChild(sugestao);

    // Botão para continuar comprando
    const botaoContinuar = document.createElement('a');
    botaoContinuar.innerHTML = '<i class="fas fa-shopping-cart"></i> Continuar comprando';
    botaoContinuar.href = 'index.html';
    botaoContinuar.classList.add('botao-continuar');
    container.appendChild(botaoContinuar);

    return;
  }

  produtosCarrinho.forEach(produto => {
    const item = document.createElement('div');
    item.classList.add('item-carrinho');

    const linkDetalhesImg = document.createElement('a');
    linkDetalhesImg.href = `detalhes.html?id=${produto.id}`;

    const img = document.createElement('img');
    img.src = produto.imagem;
    img.alt = produto.nome;
    img.classList.add('imagem-carrinho');

    linkDetalhesImg.appendChild(img);

    const info = document.createElement('div');
    info.classList.add('info-carrinho');

    const linhaTopo = document.createElement('div');
    linhaTopo.classList.add('linha-topo');

    const detalhesEsquerda = document.createElement('div');
    detalhesEsquerda.classList.add('detalhes-esquerda');

  const titulo = document.createElement('h3');

  const tituloLink = document.createElement('a');
  tituloLink.href = `detalhes.html?id=${produto.id}`;
  tituloLink.textContent = produto.nome;
  tituloLink.classList.add('link-produto-nome');

  titulo.appendChild(tituloLink);

    const categoria = document.createElement('p');
    categoria.classList.add('categoria-produto');
    categoria.textContent = `Categoria: ${produto.categoria}`;

    detalhesEsquerda.appendChild(titulo);
    detalhesEsquerda.appendChild(categoria);

    if (produto.cor && produto.cor.trim() !== '') {
      const cor = document.createElement('p');
      cor.classList.add('cor-produto');
      cor.textContent = `Cor: ${produto.cor}`;
      detalhesEsquerda.appendChild(cor);
    }

    const preco = document.createElement('p');
    preco.classList.add('preco-produto');
    preco.textContent = produto.preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    linhaTopo.append(detalhesEsquerda, preco);

    const botaoRemover = document.createElement('button');
    botaoRemover.classList.add('remover-produto');
    botaoRemover.textContent = 'Remover';
    botaoRemover.dataset.id = produto.id;

    botaoRemover.addEventListener('click', () => {
      removerProdutoDoCarrinho(produto.id);
    });

    info.append(linhaTopo, botaoRemover);
    item.append(linkDetalhesImg, info);
    container.appendChild(item);
  });

   // Calcula o total
  const total = produtosCarrinho.reduce((soma, produto) => soma + produto.preco, 0);

  // Cria um elemento para mostrar o total
  const totalElement = document.createElement('p');
  totalElement.classList.add('total-carrinho');
  totalElement.textContent = `Total: ${total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })}`;

  container.appendChild(totalElement);
  

}

function removerProdutoDoCarrinho(idProduto) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho = carrinho.filter(produto => produto.id !== idProduto);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  carregarCarrinho(); // Recarrega a lista
  atualizarContadorCarrinho(); // Atualiza o número
}

// Botão para limpar o carrinho inteiro
document.getElementById('limpar-carrinho')?.addEventListener('click', () => {
  localStorage.removeItem('carrinho');
  carregarCarrinho();
  atualizarContadorCarrinho(); // Atualiza o número
});

// Inicializa
carregarCarrinho();
atualizarContadorCarrinho(); // Atualiza o número


