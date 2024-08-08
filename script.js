// Captura a TAG img do html
const imagem = document.querySelector('img')

// Função assincrona que busca a image de um gato
// na API cataas
async function getCatPicture() {
  // Fecth é usado para capturar o retorno da API
  await fetch("https://cataas.com/cat")
  .then(res => {
    // Adiciona o link da foto na TAG img
    imagem.src = `${res.url}`
  })
}

// Executa função assincrona
getCatPicture()