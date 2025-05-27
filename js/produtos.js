// Exemplo de dados dos produtos (podem vir da API depois)
const produtos = [
  {
    nome: 'Apple iPhone 15 128GB - Preto',
    preco: 4450.10,
    imagem: 'assets/images/tatu.png',
    categoria: 'Celulares e Smartphones'
  },
  {
    nome: 'Smartphone Samsung Galaxy S24 5G Roxo 256GB',
    preco: 3499.00,
    imagem: 'assets/images/tatu.png',
    categoria: 'Celulares e Smartphones'
  },
  {
    nome: 'Smart TV 50" 4K Ultra HD Samsung 50DU7700 com processador Crystal 4K, Gaming Hub, AIEnergy Mode, Alexa built-in, Wi-Fi, Bluetooth, USB e HDMI',
    preco: 2248.00,
    imagem: 'assets/images/tatu.png',
    categoria: 'TV'
  },
  {
    nome: 'Smartphone Motorola g15 Verde 256GB, 4GB RAM + 8GB Ram Boost e Camera 50MP com AI e Night Vision, 5.200mAh Tela FHD+ 6.7" Superbrilho e NFC',
    preco: 989.00,
    imagem: 'assets/images/tatu.png',
    categoria: 'Celulares e Smartphones'
  },
  {
    nome: 'Smart TV 50" HQ 4K 3 HDMI 2 USB WI-FI Android 11 e Design Slim',
    preco: 1599.00,
    imagem: 'assets/images/tatu.png',
    categoria: 'TV'
  },
  {
    nome: 'LG InstaView Side-by-Side GC-X247CSAV',
    preco: 15639.08,
    imagem: 'assets/images/tatu.png',
    categoria: 'Eletrodomésticos'
  },
  {
    nome: 'Fritadeira Air Fryer Bella Cuccina BCFR06 3,5L - Preta - 220V',
    preco: 236.75,
    imagem: 'assets/images/tatu.png',
    categoria: 'Eletrodomésticos'
  },
  {
    nome: 'Fogão Consul 4 Bocas CFO4NAR com Mesa de Inox, Acendimento Automático e Design Frente Única Bivolt - Inox',
    preco: 9000.00,
    imagem: 'assets/images/tatu.png',
    categoria: 'Eletrodomésticos'
  },

];

// Função que cria e adiciona os produtos no container
function exibirProdutos(lista) {
  const container = document.getElementById('produtos');
  container.innerHTML = ''; // limpa o container antes de inserir

  lista.forEach(produto => {
    // cria a div produto
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('produto');

    // cria a imagem
    const img = document.createElement('img');
    img.src = produto.imagem;
    img.alt = produto.nome;

    // cria div info-produto
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info-produto');

    // cria nome-produto
    const nomeP = document.createElement('p');
    nomeP.classList.add('nome-produto');
    nomeP.textContent = produto.nome;  // textContent é seguro!

    // cria preco-produto
    const precoP = document.createElement('p');
    precoP.classList.add('preco-produto');
    precoP.textContent = produto.preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    // cria botão
    const botao = document.createElement('a');
    botao.href = '#';
    botao.textContent = 'Adicionar ao Carrinho';


    // monta a estrutura
    infoDiv.append(nomeP, precoP, botao);
    produtoDiv.append(img, infoDiv);

    // adiciona no container
    container.appendChild(produtoDiv);
  });
}

// Função para filtrar por categoria
function filtrarPorCategoria(categoria) {
  if (!categoria) {
    exibirProdutos(produtos); // se não passar categoria, mostra todos
    return;
  }
  const filtrados = produtos.filter(p => p.categoria === categoria);
  exibirProdutos(filtrados);
}

// Exibe todos os produtos ao carregar a página
exibirProdutos(produtos);
