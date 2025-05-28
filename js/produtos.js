
const produtos = [
  {
    id: 1,
    nome: 'Apple iPhone 15 128GB - Preto',
    preco: 4450.10,
    imagem: 'https://geekstore.pt/1860-large_default/iphone-15-black-128gb.jpg',
    categoria: 'Celulares e Smartphones'
  },
  {
    id: 2,
    nome: 'Smartphone Samsung Galaxy S24 5G Roxo 256GB',
    preco: 3499.00,
    imagem: 'https://a-static.mlcdn.com.br/1500x1500/celular-samsung-galaxy-s24-128gb-8gb-de-ram-tela-de-6-2-galaxy-ai/samsung/5683/6e3fb5d7ca872a90d5d05d0cd7072198.jpeg',
    categoria: 'Celulares e Smartphones'
  },
  {
    id: 3,
    nome: 'Smart TV 50" 4K Ultra HD Samsung 50DU7700 com processador Crystal 4K, Gaming Hub, AIEnergy Mode, Alexa built-in, Wi-Fi, Bluetooth, USB e HDMI',
    preco: 2248.00,
    imagem: 'https://imgs.casasbahia.com.br/55066184/1g.jpg?imwidth=500',
    categoria: 'TV'
  },
  {
    id: 4,
    nome: 'Smartphone Motorola g15 Verde 256GB, 4GB RAM + 8GB Ram Boost e Camera 50MP com AI e Night Vision, 5.200mAh Tela FHD+ 6.7" Superbrilho e NFC',
    preco: 989.00,
    imagem: 'https://imgs.pontofrio.com.br/55068313/3g.jpg?imwidth=500',
    categoria: 'Celulares e Smartphones'
  },
  {
    id: 5,
    nome: 'Smart TV 50" HQ 4K 3 HDMI 2 USB WI-FI Android 11 e Design Slim',
    preco: 1599.00,
    imagem: 'https://imgs.casasbahia.com.br/1548664885/1xg.jpg?imwidth=1000',
    categoria: 'TV'
  },
  {
    id: 6,
    nome: 'LG InstaView Side-by-Side GC-X247CSAV',
    preco: 15639.08,
    imagem: 'https://www.lg.com/content/dam/channel/wcms/br/images/geladeiras/gc-x257cshs_absfsbs_essp_br_c/gallery/2010-02.jpg/_jcr_content/renditions/thum-1600x1062.jpeg',
    categoria: 'Eletrodomésticos'
  },
  {
    id: 7,
    nome: 'Fritadeira Air Fryer Bella Cuccina BCFR06 3,5L - Preta - 220V',
    preco: 236.75,
    imagem: 'https://a-static.mlcdn.com.br/1500x1500/fritadeira-eletrica-sem-oleo-air-fryer-mondial-pratic-af-35-bf-preta-35l-com-timer/magazineluiza/236479800/132767d0349df4a2b9f676d26f62505c.jpg',
    categoria: 'Eletrodomésticos'
  },
  {
    id: 8,
    nome: 'Fogão Consul 4 Bocas CFO4NAR com Mesa de Inox, Acendimento Automático e Design Frente Única Bivolt - Inox',
    preco: 9000.00,
    imagem: 'https://imgs.casasbahia.com.br/6460227/1g.jpg?imwidth=500',
    categoria: 'Eletrodomésticos'
  },

];


// Função que cria e adiciona os produtos no container
function exibirProdutos(lista) {
  const container = document.getElementById('produtos');
  if (!container) return;

  container.innerHTML = '';

  const termo = document.getElementById('barra-de-pesquisa')?.value.trim();
  const regex = termo ? new RegExp(`(${termo})`, 'gi') : null;

  lista.forEach(produto => {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('produto');

    const linkImagem = document.createElement('a');
    linkImagem.href = `detalhes.html?id=${produto.id}`;

    const img = document.createElement('img');
    img.src = produto.imagem;
    img.alt = produto.nome;
    linkImagem.appendChild(img);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info-produto');

    const nome = document.createElement('p');
    nome.classList.add('nome-produto');

    // Aplica destaque se houver termo
    if (regex) {
      nome.innerHTML = produto.nome.replace(regex, '<mark>$1</mark>');
    } else {
      nome.textContent = produto.nome;
    }

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

    infoDiv.append(nome, preco, botao);
    produtoDiv.append(linkImagem, infoDiv);
    container.appendChild(produtoDiv);

    botao.addEventListener('click', function (event) {
      let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
      const jaExiste = carrinho.find(p => p.id === produto.id);

      if (!jaExiste) {
        carrinho.push(produto);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        alert('Produto adicionado ao carrinho!');
      } else {
        alert('Esse produto já está no carrinho.');
      }
    });
  });
}


exibirProdutos(produtos);

const formPesquisa = document.getElementById('form-pesquisa');
const inputPesquisa = document.getElementById('barra-de-pesquisa');

formPesquisa.addEventListener('submit', function (event) {
  event.preventDefault(); // previne o reload da página no submit

  const termo = inputPesquisa.value.trim().toLowerCase();

  if (termo === '') {
    // Se o campo estiver vazio, mostra todos os produtos
    exibirProdutos(produtos);
    return;
  }

  // Filtra os produtos que contém o termo no nome (ignora maiúsculas/minúsculas)
  const produtosFiltrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(termo) ||
    produto.categoria.toLowerCase().includes(termo)
  );

  // Exibe os produtos filtrados
  exibirProdutos(produtosFiltrados);

  if (produtosFiltrados.length === 0) {
    const container = document.getElementById('produtos');
    container.innerHTML = '<p>Nenhum produto encontrado.</p>';
  }
});


inputPesquisa.addEventListener('input', function () {
  const termo = inputPesquisa.value.trim().toLowerCase();

  if (termo === '') {
    exibirProdutos(produtos);
    return;
  }

  const produtosFiltrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(termo) ||
    produto.categoria.toLowerCase().includes(termo)
  );

  exibirProdutos(produtosFiltrados);

  if (produtosFiltrados.length === 0) {
    const container = document.getElementById('produtos');
    container.innerHTML = '<p>Nenhum produto encontrado.</p>';
  }
});


/* // Função para filtrar por categoria
function filtrarPorCategoria(categoria) {
  if (!categoria) {
    exibirProdutos(produtos);
    return;
  }
  const filtrados = produtos.filter(p => p.categoria === categoria);
  exibirProdutos(filtrados);
} */

// Exibe todos os produtos ao carregar a página

