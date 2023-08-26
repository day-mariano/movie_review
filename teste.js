const filmes = [
  {
    nome: "Barbie",
    nota: 2,
  },
  {
    nome: 'Titanic',
    nota: 5,
  },
]

function exibir(informacoes) {

  console.log(`O filme ${informacoes.nome}, tem ${informacoes.nota} estrelas .`)
}

for (let filme of filmes) {
  exibir(filme)
}

