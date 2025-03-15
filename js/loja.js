
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(item) {
    carrinho.push(item);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
    document.getElementById('mensagem').textContent = item + " adicionado ao carrinho!";
}

// Função para atualizar a lista de itens no carrinho
function atualizarCarrinho() {
    const carrinhoList = document.getElementById('carrinhoList');
    carrinhoList.innerHTML = '';
    carrinho.forEach(item => {
        const novoItem = document.createElement('li');
        novoItem.textContent = item;
        carrinhoList.appendChild(novoItem);
    });
}



// Função para carregar itens do Local Storage ao abrir a página
function carregarCarrinho() {
    carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    atualizarCarrinho();
}


// Função para adicionar item ao carrinho
function adicionarAoCarrinho(item) {
    const carrinhoList = document.getElementById('carrinhoList');
    const novoItem = document.createElement('li');
    novoItem.textContent = item;
    carrinhoList.appendChild(novoItem);

    // Exibe mensagem de sucesso
    document.getElementById('mensagem').textContent = item + " adicionado ao carrinho!";

    // Adiciona ao Local Storage
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(item);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Função para remover o último item do carrinho
function removerUltimoItem() {
    const carrinhoList = document.getElementById('carrinhoList');
    if (carrinhoList.lastChild) {
        carrinhoList.removeChild(carrinhoList.lastChild);
    }
}

// Função para remover todos os itens do carrinho
function removerTodos() {
    const carrinhoList = document.getElementById('carrinhoList');
    carrinhoList.innerHTML = ''; // Remove todos os itens

    // Limpa o Local Storage
    localStorage.removeItem('carrinho');
}


// Função para finalizar a compra e redirecionar para a página de compra
function finalizarCompra() {
    window.location.href = 'finalizarcompra.html';  // Redireciona para a página de compra
}
