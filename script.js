const imagem = document.querySelector('img')

async function getCatPicture() {
  await fetch("https://cataas.com/cat")
  .then(res => {
    imagem.src = `${res.url}`
  })
}

getCatPicture()