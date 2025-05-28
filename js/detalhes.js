function carregarDetalhesProduto() {
  const params = new URLSearchParams(window.location.search);
  const idProduto = parseInt(params.get('id'));

  if (!idProduto || isNaN(idProduto)) {
    container.innerHTML = '<p>ID inválido.</p>';
    document.title = 'Erro';
    return;
  }

  const produto = produtos.find(p => p.id === idProduto);
  const container = document.getElementById('detalhes-produto');

  if (!produto) {
    container.innerHTML = '<p>Produto não encontrado.</p>';
    document.title = 'Produto não encontrado';
    return;
  }

  document.title = produto.nome;
  document.getElementById('titulo-produto').textContent = produto.nome;

  const img = document.getElementById('imagem-produto');
  img.src = produto.imagem;
  img.alt = `Imagem de ${produto.nome}`;

  document.getElementById('categoria-produto').textContent = produto.categoria;
  document.getElementById('preco-produto').textContent = produto.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  document.getElementById('descricao-produto').textContent = produto.descricao || 'Sem descrição.';
}

document.addEventListener('DOMContentLoaded', carregarDetalhesProduto);
