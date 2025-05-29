
function carregarDetalhesProduto() {
  const container = document.getElementById('detalhes-produto');

  const params = new URLSearchParams(window.location.search);
  const idProduto = parseInt(params.get('id'));

  if (!idProduto || isNaN(idProduto)) {
    container.innerHTML = '<p>ID inválido.</p>';
    document.title = 'Erro';
    return;
  }

  const produto = produtos.find(p => p.id === idProduto);

  if (!produto) {
    container.innerHTML = '<p>Produto não encontrado.</p>';
    document.title = 'Produto não encontrado';
    return;
  }

  document.title = produto.nome;
  document.getElementById('titulo-produto-detalhes').textContent = produto.nome;

  const img = document.getElementById('imagem-produto');
  img.src = produto.imagem;
  img.alt = `Imagem de ${produto.nome}`;

  document.getElementById('categoria-produto').textContent = produto.categoria;
  document.getElementById('preco-produto').textContent = produto.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  document.getElementById('marca-produto').textContent = produto.marca || 'Sem marca.';


  const descricaoEl = document.getElementById('descricao-produto');
  descricaoEl.textContent = produto.descricao || 'Descrição não disponível.';

  const btnAdicionarCarrinho = document.getElementById('btn-adicionar-carrinho');

  // Verificar se já está no carrinho
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const jaExiste = carrinho.find(p => p.id === produto.id);


  // Faz o comportamento de adicionar produto ao carrinho que na home, mas nao adiciona um elemento na div pelo js, pois essa pagina a estrutura e feita direta no html
  const textoAdicionado = document.createElement('span');
  textoAdicionado.textContent = 'Adicionado ao carrinho';
  textoAdicionado.classList.add('texto-adicionado');

  if (jaExiste) {
    btnAdicionarCarrinho.replaceWith(textoAdicionado);
  } else {
    // Se ainda não estiver no carrinho, adicionar comportamento do botão
    btnAdicionarCarrinho.addEventListener('click', function (event) {
      event.preventDefault();

      carrinho.push(produto);
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      atualizarContadorCarrinho();
      btnAdicionarCarrinho.replaceWith(textoAdicionado);
    });
  }
}
document.addEventListener('DOMContentLoaded', () => {
  carregarDetalhesProduto();
  atualizarContadorCarrinho();
});

