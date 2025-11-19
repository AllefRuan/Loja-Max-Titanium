const botoesComprar = document.querySelectorAll('.comprar');
const carrinho = document.getElementById('carrinho');
const listaCarrinho = document.getElementById('itens-carrinho');
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const btnCarrinho = document.getElementById('carrinho-btn');

let itens = [];
let totalCompra = 0;

botoesComprar.forEach(botao => {
  botao.addEventListener('click', (e) => {
    const produto = e.target.parentElement;
    const nome = produto.querySelector('h3').innerText;
    const preco = parseFloat(produto.querySelector('p').innerText.replace('R$', '').replace(',', '.'));
    
    itens.push({ nome, preco });
    totalCompra += preco;

    atualizarCarrinho();
  });
});

function atualizarCarrinho() {
  listaCarrinho.innerHTML = '';
  itens.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    listaCarrinho.appendChild(li);
  });

  contador.textContent = itens.length;
  total.textContent = `Total: R$ ${totalCompra.toFixed(2).replace('.', ',')}`;
}

btnCarrinho.addEventListener('click', () => {
  carrinho.style.display = carrinho.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('finalizar').addEventListener('click', () => {
  alert('Compra finalizada! Obrigado pela preferência 💪');
  itens = [];
  totalCompra = 0;
  atualizarCarrinho();
});
