
const produtos = [
  {
    id: 1,
    nome: 'Apple iPhone 15 128GB - Preto',
    preco: 4450.10,
    imagem: 'https://geekstore.pt/1860-large_default/iphone-15-black-128gb.jpg',
    categoria: 'Celulares e Smartphones',
    cor: 'Preto',
    marca: 'Apple',
    descricao: 'A DYNAMIC ISLAND CHEGA AO IPHONE 15 — A Dynamic Island mostra alertas e Atividades ao Vivo para você não perder nenhuma informação enquanto faz outras coisas. Você pode acompanhar sua próxima corrida, saber quem está ligando, confirmar as informações do seu voo e muito mais. DESIGN INOVADOR — O iPhone 15 tem vidro resistente colorido por infusão e design em alumínio. Ele aguenta o tranco contra respingos, água e poeira.'
  },
  {
    id: 2,
    nome: 'Smartphone Samsung Galaxy S24 5G Roxo 256GB',
    preco: 3499.00,
    imagem: 'https://a-static.mlcdn.com.br/1500x1500/celular-samsung-galaxy-s24-128gb-8gb-de-ram-tela-de-6-2-galaxy-ai/samsung/5683/6e3fb5d7ca872a90d5d05d0cd7072198.jpeg',
    categoria: 'Celulares e Smartphones',
    cor: 'Roxo',
    marca: 'Samsung',
    descricao: 'Processador Samsung Exynos 2400e (Deca-Core) 256GB de Memória Interna e 8GB RAM Bateria de 4700mAh Câmera Tripla Traseira de 50MP +12MP + 8MP Câmera Frontal de 10MP'
  },
  {
    id: 3,
    nome: 'Smart TV 50" 4K Ultra HD Samsung 50DU7700 com processador Crystal 4K, Gaming Hub, AIEnergy Mode, Alexa built-in, Wi-Fi, Bluetooth, USB e HDMI',
    preco: 2248.00,
    imagem: 'https://imgs.casasbahia.com.br/55066184/1g.jpg?imwidth=500',
    categoria: 'TV',
    cor: 'Preto',
    marca: 'Samsung',
    descricao: 'Com processador Crystal 4K, a Samsung 50DU7700 oferece imagens com cores vívidas, modo de economia AIEnergy, acesso ao Gaming Hub, suporte à Alexa, Wi-Fi, Bluetooth, USB e HDMI para máxima conectividade.'
  },
  {
    id: 4,
    nome: 'Smartphone Motorola g15 Verde 256GB, 4GB RAM + 8GB Ram Boost e Camera 50MP com AI e Night Vision, 5.200mAh Tela FHD+ 6.7" Superbrilho e NFC',
    preco: 989.00,
    imagem: 'https://imgs.pontofrio.com.br/55068313/3g.jpg?imwidth=500',
    categoria: 'Celulares e Smartphones',
    cor: 'Verde',
    marca: 'Motorola',
    descricao: 'Smartphone com 256GB de armazenamento, RAM expansível até 12GB com Ram Boost, câmera com inteligência artificial de 50MP e Night Vision, bateria de longa duração de 5200mAh, tela FHD+ de 6.7" e suporte a NFC.'
  },
  {
    id: 5,
    nome: 'Smart TV 50" HQ 4K 3 HDMI 2 USB WI-FI Android 11 e Design Slim',
    preco: 1599.00,
    imagem: 'https://imgs.casasbahia.com.br/1548664885/1xg.jpg?imwidth=1000',
    categoria: 'TV',
    cor: 'Preto',
    marca: 'HQ Screen',
    descricao: 'A Smart TV HQ 50 4K oferece imagens com resolução Ultra HD e cores de tirar o fôlego. A Smart HQ possui as principais tecnologias da atualidade como Wi-Fi integrado, entrada HDMI e conexões USB. Conta com recursos modernos, que proporcionam conforto e bons momentos de entretenimento para quem está assistindo. Ela é a escolha perfeita para transformar sua casa em um verdadeira sala de cinema. Tudo que você sempre quis em uma TV. Os aplicativos mais desejados já vão instalados, como: Netflix, Youtube, PrimeVideo, Spotify e você também pode baixar diversos outros pela loja. 1 ano de garantia pelo fabricante'
  },
  {
    id: 6,
    nome: 'LG InstaView Side-by-Side GC-X247CSAV',
    preco: 15639.08,
    imagem: 'https://www.lg.com/content/dam/channel/wcms/br/images/geladeiras/gc-x257cshs_absfsbs_essp_br_c/gallery/2010-02.jpg/_jcr_content/renditions/thum-1600x1062.jpeg',
    categoria: 'Eletrodomésticos',
    cor: 'Cinza',
    marca: 'LG',
    descricao: 'Geladeira side-by-side com tecnologia InstaView Door-in-Door, que permite visualizar o interior sem abrir a porta. Conta com recursos de economia de energia, painel touch e amplo espaço interno para melhor organização dos alimentos.'
  },
  {
    id: 7,
    nome: 'Fritadeira Air Fryer Bella Cuccina BCFR06 3,5L - Preta - 220V',
    preco: 236.75,
    imagem: 'https://a-static.mlcdn.com.br/1500x1500/fritadeira-eletrica-sem-oleo-air-fryer-mondial-pratic-af-35-bf-preta-35l-com-timer/magazineluiza/236479800/132767d0349df4a2b9f676d26f62505c.jpg',
    categoria: 'Eletrodomésticos',
    cor: 'Preto',
    marca: 'Mondial',
    descricao: 'Fritadeira elétrica sem óleo com capacidade de 3,5 litros, ideal para preparar alimentos crocantes e saudáveis. Possui controle de temperatura, timer e design moderno, funcionando em 220V.'
  },
  {
    id: 8,
    nome: 'Fogão Consul 4 Bocas CFO4NAR com Mesa de Inox, Acendimento Automático e Design Frente Única Bivolt - Inox',
    preco: 1165.42,
    imagem: 'https://imgs.casasbahia.com.br/6460227/1g.jpg?imwidth=500',
    categoria: 'Eletrodomésticos',
    cor: 'Cinza',
    marca: 'Consul',
    descricao: 'Fogão de 4 bocas com mesa de inox resistente, acendimento automático e design de frente única para facilitar a limpeza. Funciona em voltagem bivolt.'
  },
  {
    id: 9,
    nome: 'PlayStation®5 Slim Edição Digital com 2 Jogos',
    preco: 3254.00,
    imagem: 'https://images.kabum.com.br/produtos/fotos/542929/console-playstation-5-slim-edicao-digital-branco-2-jogos-1000038914_1713450978_gg.jpg',
    categoria: 'Informática',
    cor: 'Branco',
    marca: 'Sony',
    descricao: 'Jogos impressionantes: Maravilhe-se com os gráficos incríveis e experimente os recursos do novo PS5. Imersão de tirar o fôlego: Descubra uma experiência de jogos mais profunda compatível com resposta tátil, gatilhos adaptáveis e tecnologia de áudio 3D. Design Slim: Com o PS5 Edição Digital, os jogadores contam com uma poderosa tecnologia de jogos em um design elegante e compacto.'
  },
  {
    id: 10,
    nome: 'Smartphone Samsung Galaxy S24 Ultra 256GB 12GB RAM',
    preco: 7999.90,
    imagem: 'https://samsungbrshop.vtexassets.com/arquivos/ids/249571/sm-E3_front_titaniumgray_231106.jpg?v=638793894861430000',
    categoria: 'Celulares e Smartphones',
    cor: 'Cinza',
    marca: 'Samsung',
    descricao: 'Processador Exynos 2400e, 256GB de armazenamento, 12GB RAM, câmera quádrupla de 200MP, bateria de 5000mAh e tela Dynamic AMOLED 2X de 6.8".'
  },
  {
    id: 11,
    nome: 'Notebook Dell Inspiron 15 5515 Ryzen 5 5500U 8GB 256GB SSD',
    preco: 3899.00,
    imagem: 'https://cdn-cosmos.bluesoft.com.br/products/884116392828',
    categoria: 'Informática',
    cor: 'Prata',
    marca: 'Dell',
    descricao: 'Processador AMD Ryzen 5 5500U, 8GB RAM, SSD 256GB, tela Full HD de 15.6”, sistema Windows 11 Home.'
  },
  {
    id: 12,
    nome: 'Fone de Ouvido Bluetooth Sony WH-1000XM5',
    preco: 1999.00,
    imagem: 'https://m.media-amazon.com/images/I/51aXvjzcukL.jpg',
    categoria: 'Informática',
    cor: 'Preto',
    marca: 'Sony',
    descricao: 'Cancelamento de ruído ativo, até 30 horas de bateria, carregamento rápido e som de alta resolução.'
  },
  {
    id: 13,
    nome: 'Geladeira Brastemp Frost Free Duplex 375 litros',
    preco: 3499.00,
    imagem: 'https://brastemp.vtexassets.com/arquivos/ids/249932/Brastemp_Geladeira_BRM44HB_Imagem_Frontal_Fechada_1.png?v=638786035150800000',
    categoria: 'Eletrodomésticos',
    cor: 'Branca',
    marca: 'Brastemp',
    descricao: 'Frost Free, capacidade 375 litros, dispenser de água e gelo, painel eletrônico e prateleiras ajustáveis.'
  },
  {
    id: 14,
    nome: 'Câmera DSLR Canon EOS Rebel T7i',
    preco: 3200.00,
    imagem: 'https://acdn-us.mitiendanube.com/stores/001/073/289/products/novacameracanonrebelt7i1-33291181b5b557c80515759978547619-640-0.jpg',
    categoria: 'Informática',
    cor: 'Preto',
    marca: 'Canon',
    descricao: '24.2 MP, vídeo Full HD, tela touchscreen articulada, Wi-Fi integrado e sistema de autofoco rápido.'
  },
  {
    id: 15,
    nome: 'Sofá 3 Lugares Retrátil e Reclinável Suede Cinza',
    preco: 1299.90,
    imagem: 'https://cdn.leroymerlin.com.br/products/sofa_3_lugares_retratil_e_reclinavel_roma_suede_cinza_1567009869_71fb_600x600.jpg',
    categoria: 'Móveis',
    cor: 'Cinza',
    marca: 'Casa & Conforto',
    descricao: 'Sofá retrátil e reclinável em suede cinza, confortável e ideal para salas de estar modernas.'
  },
  {
    id: 16,
    nome: 'Mesa de Jantar 6 Lugares Retangular em MDF Carvalho',
    preco: 899.00,
    imagem: 'https://gazin-images.gazin.com.br/H3z9bH5F3urn6KaTEteDb18AOik=/1920x/filters:format(webp):quality(75)/https://gazin-marketplace.s3.amazonaws.com/midias/imagens/2024/05/mesa-de-jantar-6-cadeiras-madeira-macica-e-mdf-antonella-provincia-132405111750.jpg',
    categoria: 'Móveis',
    cor: 'Carvalho',
    marca: 'Móveis Lux',
    descricao: 'Mesa para 6 pessoas, design moderno em MDF com acabamento carvalho, resistente e fácil de limpar.'
  },
  {
    id: 17,
    nome: 'Ar Condicionado Split Inverter Springer 12.000 BTUs Frio',
    preco: 1699.00,
    imagem: 'https://cdn2.centralar.com.br/centralar/mds/produtos/springer-midea/inverter/3365/1000x1000/Conjunto.jpg',
    categoria: 'Ar e Ventilação',
    cor: 'Branco',
    marca: 'Springer',
    descricao: 'Ar condicionado split inverter, 12.000 BTUs, função frio, eficiente e econômico, ideal para quartos e salas pequenas.'
  },
  {
    id: 18,
    nome: 'Ventilador de Mesa Mondial 40cm 3 Velocidades',
    preco: 179.90,
    imagem: 'https://io.convertiez.com.br/m/lojasedmil/shop/products/images/1099/medium/ventilador-de-mesa-mondial-vsp-40-b-40cm-com-6-pas-3-velocidades-e-sistema-ocilante-preto_12398.jpg',
    categoria: 'Ar e Ventilação',
    cor: 'Branco',
    marca: 'Mondial',
    descricao: 'Ventilador de mesa com 40 cm de diâmetro, 3 velocidades, design moderno e base antiderrapante.'
  },
  {
    id: 19,
    nome: 'Cadeira Escritório Giratória Ergônomica Preta',
    preco: 399.90,
    imagem: 'https://cdn.awsli.com.br/2500x2500/349/349432/produto/348286527/c026-preto-fk131-v0xkpb1ohy.png',
    categoria: 'Móveis',
    cor: 'Preto',
    marca: 'Office Pro',
    descricao: 'Cadeira giratória com apoio lombar e assento acolchoado, ajuste de altura e base com rodízios.'
  },
{
  id: 20,
  nome: 'Smartphone Xiaomi Redmi Note 13 5G 256GB Azul',
  preco: 1899.00,
  imagem: 'https://a-static.mlcdn.com.br/1500x1500/smartphone-xiaomi-redmi-note-13-5g-256gb-8gb-ram-de-6-67-108-8-2mp-16mp/leperfumimportados/80106620e65811ee9da94201ac185040/f05c985d6411c8f0d78bf21b618bafab.jpeg',
  categoria: 'Celulares e Smartphones',
  cor: 'Azul',
  marca: 'Xiaomi',
  descricao: 'Equipado com processador MediaTek Dimensity 6100+, o Redmi Note 13 5G conta com 256GB de armazenamento, 8GB RAM, tela AMOLED de 6.6\'\' FHD+, bateria de 5000mAh e câmera de 50MP com IA.'
},
{
  id: 21,
  nome: 'Smart TV LG 55" OLED evo C3 4K AI ThinQ, Dolby Vision e WebOS',
  preco: 4699.90,
  imagem: 'https://www.lg.com/content/dam/channel/wcms/br/images/tv/oled83c3psa_awz_essp_br_c/gallery/DZ05.jpg',
  categoria: 'TV',
  cor: 'Preto',
  marca: 'LG',
  descricao: 'A LG OLED evo C3 com 55 polegadas entrega contraste infinito, Dolby Vision, AI Picture Pro e sistema WebOS com controle por voz. Ideal para filmes, esportes e jogos.'
},
{
  id: 22,
  nome: 'Notebook Lenovo Ideapad 3i Intel Core i5 8GB 512GB SSD',
  preco: 2999.00,
  imagem: 'https://imgs.casasbahia.com.br/1001337301/1g.jpg',
  categoria: 'Informática',
  cor: 'Cinza',
  marca: 'Lenovo',
  descricao: 'Notebook com processador Intel Core i5 de 11ª geração, 8GB de RAM, 512GB SSD, tela de 15.6” Full HD, ideal para estudos, trabalho e uso diário. Sistema Windows 11 Home.'
},
{
  id: 23,
  nome: 'Aspirador de Pó Vertical Electrolux PowerSpeed 1800W',
  preco: 429.90,
  imagem: 'https://imgs.casasbahia.com.br/1570637357/1xg.jpg',
  categoria: 'Eletrodomésticos',
  cor: 'Vermelho',
  marca: 'Electrolux',
  descricao: 'Aspirador vertical com 1800W de potência, coletor lavável, filtro HEPA, ideal para limpeza rápida e eficiente de todos os ambientes da casa.'
},
{
  id: 24,
  nome: 'Estante Livreira 5 Prateleiras Madeira Rústica',
  preco: 599.00,
  imagem: 'https://m.media-amazon.com/images/I/61mCitnT1ZL._AC_UF894,1000_QL80_.jpg',
  categoria: 'Móveis',
  cor: 'Madeira Rústica',
  marca: 'Home Decor',
  descricao: 'Estante com 5 prateleiras espaçosas, estrutura em MDF e acabamento em madeira rústica. Ideal para organizar livros, objetos de decoração e itens do dia a dia.'
}


];

// Funcao para atualizar o contador que fica ao lado do carrinho, funciona em todos os outros .js
function atualizarContadorCarrinho() {
  const contador = document.getElementById('contador-carrinho');
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  if (carrinho.length > 0) {
    contador.textContent = carrinho.length;
    contador.style.display = 'inline-block';

  } else {
    contador.style.display = 'none';
  }
}

// Função que cria e adiciona os produtos no container
function exibirProdutos(lista) {
  const container = document.getElementById('produtos');
  if (!container) return;
  
  container.innerHTML = '';
  console.log(container)

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

    botao.addEventListener('click', function (event) {
      event.preventDefault();

      let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
      const jaExiste = carrinho.find(p => p.id === produto.id);

      if (!jaExiste) {
        carrinho.push(produto);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarContadorCarrinho();

        const textoAdicionado = document.createElement('span');
        textoAdicionado.textContent = 'Adicionado ao carrinho';
        textoAdicionado.classList.add('texto-adicionado');

        botao.replaceWith(textoAdicionado);
      } else {
      
      }
    });

    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho.find(p => p.id === produto.id)) {
      const textoAdicionado = document.createElement('span');
      textoAdicionado.textContent = 'Adicionado ao carrinho';
      textoAdicionado.classList.add('texto-adicionado');
      infoDiv.append(nome, preco, textoAdicionado);
    } else {
      infoDiv.append(nome, preco, botao);
    }

    produtoDiv.append(linkImagem, infoDiv);
    container.appendChild(produtoDiv);
  });
}


exibirProdutos(produtos);
atualizarContadorCarrinho();

document.addEventListener("DOMContentLoaded", () => {
  const formPesquisa = document.getElementById('form-pesquisa');
  const inputPesquisa = document.getElementById('barra-de-pesquisa');

  if (formPesquisa && inputPesquisa) {
    formPesquisa.addEventListener('submit', function (event) {
      event.preventDefault();
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
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const inputPesquisa = document.getElementById('barra-de-pesquisa');

  if (inputPesquisa) {
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
        document.getElementById('produtos').innerHTML = '<p>Nenhum produto encontrado.</p>';
      }
    });
  }
});

