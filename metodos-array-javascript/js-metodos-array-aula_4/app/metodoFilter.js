const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? FiltrarPorDisponibilidade() : FiltrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if(categoria =='disponivel'){
        const ValorTotal = SomaValorDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTodosOsLivrosDisponiveis(ValorTotal)
    }
}

function FiltrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria)
}

function FiltrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTodosOsLivrosDisponiveis(ValorTotal){
    elementoParaFiltrarLivrosDisponiveis.innerHTML = `
    <section id="valor_total_livros_disponiveis">
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${ValorTotal}</span></p>
    </div>
  </section>`
}

