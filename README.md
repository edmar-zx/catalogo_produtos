# Loja Virtual de Produtos

Este projeto é uma loja virtual moderna e responsiva, desenvolvida com foco em performance, usabilidade e boa organização de código. A aplicação permite que os usuários naveguem por categorias de produtos, busquem itens específicos, visualizem detalhes de produtos e adicionem/removam produtos do carrinho de compras.

## Funcionalidades

- Listagem de produtos por categoria  
- Barra de busca para encontrar produtos rapidamente  
- Carrinho de compras com resumo de itens e total  
- Página de detalhes de cada produto  
- Layout 100% responsivo para todos os dispositivos  
- Estrutura de dados organizada por atributos como nome, marca, cor, imagem, categoria, preço e descrição  

## Estrutura de Dados dos Produtos

Os produtos estão estruturados no formato JSON, com os seguintes campos:

```js
{
  id: Number,
  nome: String,
  preco: Number,
  imagem: String (URL),
  categoria: String,
  cor: String,
  marca: String,
  descricao: String
}

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- `localStorage` para persistência do carrinho

## Destaques Técnicos

- Elementos dinâmicos são criados via JavaScript para o carrinho
- A página de detalhes usa HTML fixo com preenchimento dinâmico
- Uso condicional de botões e mensagens (ex: esconder botão "Remover Todos" se carrinho estiver vazio)
- Ícones adicionados com Font Awesome
- Uso de classes CSS organizadas para estilização

1. Clone o repositório:

   git clone https://github.com/edmar-zx/catalogo_produtos.git
   cd catalogo_produtos
