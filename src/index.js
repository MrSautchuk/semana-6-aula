console.log("Hello World");

// Lista de produtos disponíveis com nome e preço
const produtosDisponiveis = [
  { nome: "Camisa", preco: 50.0 },
  { nome: "Calça", preco: 100.0 },
  { nome: "Sapato", preco: 150.0 },
  { nome: "Boné", preco: 25.0 },
];

// Carrinho de compras como um array de objetos
let carrinho = [];
console.log(carrinho)

// Fazer tudo que eu escrevo no prompt entrar na let carrinho, deixar o array ocupado por um dos itens.

// Função para adicionar produtos ao carrinho
function adicionarProdutos() {
let nomedoProduto = prompt("Qual dos produtos você deseja adicionar: Camisa, Calça, Sapato ou Boné?")
// Utilizar um método to uppercase para verificar os itens
// Após verificar, precisamos utilizar o método push para adicionar o que a pessoa escreveu no prompt na minha let carrinho

alert(nomedoProduto)
}
adicionarProdutos()

