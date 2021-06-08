var menuFilmes = document.querySelector("#filmes");
var categoriaFilmes = document.querySelector(".filmes");
var menuSeries = document.querySelector("#series");
var categoriaSeries = document.querySelector(".series");

// Listas de Filmes
var listaFilmes = [
  {
    imagem:
      "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    nota: 7.8,
    trailer: "83M6jszIFkE",
  },
  {
    imagem:
      "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    nota: 7.0,
    trailer: "Q0CbN8sfihY",
  },
  {
    imagem:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
    nota: 9.2,
    trailer: "y_-YWEot_7w",
  },
  {
    imagem:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    nota: 9.0,
    trailer: "zqfz04yCTnE",
  },
  {
    imagem:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    nota: 8.8,
    trailer: "R_VX0e0PX90",
  },
  {
    imagem:
      "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    nota: 8.8,
    trailer: "ejvK2jW8dh8",
  },
  {
    imagem:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    nota: 8.8,
    trailer: "0i86oM1nHjM",
  },
  {
    imagem:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    nota: 8.7,
    trailer: "2KnZac176Hs",
  },
  {
    imagem:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    nota: 8.6,
    trailer: "zSWdZVtXT7E",
  },
];
// Lista de Séries
var listaSeries = [
  {
    imagem:
      "https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX182_CR0,0,182,268_AL_.jpg",
    nota: 8.2,
    trailer: "sfAc2U20uyg",
  },
  {
    imagem:
      "https://m.media-amazon.com/images/M/MV5BZDA1MzE3M2EtNTE4Ni00OGE4LWE1NjctYzFhMzA2NDgxMDIxXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
    nota: 8.0,
    trailer: "IKtL4IW6G0I",
  },
  {
    imagem:
      "https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    nota: 8.2,
    trailer: "tjujvMkqWe4",
  },
  {
    imagem:
      "https://m.media-amazon.com/images/M/MV5BNzM2OWM1MTUtNmNhYy00ZDJlLTgyYWQtOWY3ZmVjYjNiN2U4XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
    nota: 7.8,
    trailer: "gqAIm18G1fk",
  },
  {
    imagem:
      "https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg",
    nota: 7.7,
    trailer: "fymU5y3Xm14",
  },
  {
    imagem:
      "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    nota: 8.5,
    trailer: "9GgxinPwAGc",
  },
  {
    imagem:
      "https://m.media-amazon.com/images/M/MV5BMzZjMWEwMGMtODdhMi00NGRkLTkwZTEtNmM4NjA3M2FlNzc2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg",
    nota: 8.5,
    trailer: "fYlZDTru55g",
  },
];

// Função de Alerta
function MensagemDeAlerta(tag, msg) {
  tag.innerHTML = msg;
  setTimeout(() => {
    tag.innerHTML = "";
  }, 2000);
}

// Update Aula05
function InserirNovoCartaz() {
  let imagemTag = document.querySelector("#imagem");
  let notaTag = document.querySelector("#nota");
  let trailerTag = document.querySelector("#trailer");
  let tipoTag = document.querySelector("#tipo");
  let alertaTag = document.querySelector(".alerta");

  // Validando inputs
  let inserirImagem;
  let inserirNota;
  let inserirTrailer;

  // Validando input de imagem
  if (imagemTag.value.endsWith(".jpg") || imagemTag.value.endsWith(".png")) {
    inserirImagem = imagemTag.value;
  } else if (imagemTag.value == "") {
    MensagemDeAlerta(alertaTag, "Campo de imagem vazio!");
  } else {
    MensagemDeAlerta(
      alertaTag,
      "Imagem inserida é inválida! Verifique se o final termina com .jpg ou .png"
    );
  }

  // Validando input de nota
  let convertNota = parseFloat(notaTag.value);
  if (convertNota >= notaTag.min && convertNota <= notaTag.max) {
    inserirNota = convertNota;
  } else if (convertNota == "") {
    MensagemDeAlerta(alertaTag, "Campo de nota vazio!");
  } else {
    MensagemDeAlerta(alertaTag, "Nota inserida é inválida!");
  }

  // Validando input de trailer
  if (trailerTag.value.includes("https://www.youtube.com/")) {
    let convertTrailerLink = trailerTag.value.split("watch?v=")[1];
    inserirTrailer = convertTrailerLink;
  } else if (trailerTag.value == "") {
    MensagemDeAlerta(alertaTag, "Campo de trailer vazio!");
  } else {
    MensagemDeAlerta(
      alertaTag,
      "Trailer inserido é inválido! Insira um link do youtube"
    );
  }

  let novoCartaz = {
    imagem: inserirImagem,
    nota: inserirNota,
    trailer: inserirTrailer,
  };

  if (
    !(
      (novoCartaz.imagem == undefined) & (novoCartaz.nota == undefined) &&
      novoCartaz.trailer == undefined
    )
  ) {
    if (tipoTag.value == "filme") {
      listaFilmes.push(novoCartaz);
      Limaprlista(categoriaFilmes);
      CarregarLista(listaFilmes, categoriaFilmes);
      imagemTag.value = ""
      notaTag.value = ""
      trailerTag.value = ""
    } else if (tipoTag.value == "serie") {
      listaSeries.push(novoCartaz);
      Limaprlista(categoriaSeries);
      CarregarLista(listaSeries, categoriaSeries);
      imagemTag.value = ""
      notaTag.value = ""
      trailerTag.value = ""
    }
  }
}
// Fim Update Aula05
// Função para limpar lista
function Limaprlista(categoria) {
  let cartazes = categoria.querySelector(".cartazes");
  cartazes.remove();
}
// Função para carregar as lista
function CarregarLista(lista, categoria) {
  if (!(categoria.lastElementChild.className == "cartazes")) {
    categoria.insertAdjacentHTML("beforeend", `<div class="cartazes"></div>`);
  }
  let cartazes = categoria.querySelector(".cartazes");
  // Renderizando a lista no HTML
  for (const filme of lista) {
    cartazes.insertAdjacentHTML(
      "beforeend",
      `<div class="cartaz">
      <img
      src="${filme.imagem}"
      alt="">
      <div class="descricao">
      <img class="playTrailer" accesskey="${
        filme.trailer
      }" src="https://icons.iconarchive.com/icons/danieledesantis/audio-video-outline/64/play-icon.png"
      alt="">
      <div class="status">
      <span>IMDB</span>
      <span>${filme.nota.toFixed(1)}</span>
      </div>
      </div>
      </div>`
    );
  }
}

// Carregando listas no html
CarregarLista(listaFilmes, categoriaFilmes);
CarregarLista(listaSeries, categoriaSeries);

// Aplicar classe .hide na tag
function ApplyHideClass(tag) {
  tag.classList.toggle("hide");
}

// Trailer
document.addEventListener("click", (alvo) => {
  let modalTrailer = document.querySelector(".modal");
  let trailer = document.querySelector(".trailer");

  if (alvo.target.className == "playTrailer") {
    ApplyHideClass(modalTrailer);
    modalTrailer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="trailer">
      <iframe src="https://www.youtube.com/embed/${alvo.target.getAttribute(
        "accesskey"
      )}?controls=1&autoplay=1&start=0">
      </iframe>
      </div>`
    );
  }

  if (alvo.target.className == "fechar") {
    ApplyHideClass(modalTrailer);
    trailer.remove();
  }
});

menuFilmes.addEventListener("click", () => {
  if (categoriaSeries.classList.contains("hide")) {
    return;
  } else {
    ApplyHideClass(categoriaSeries);
  }
  if (categoriaFilmes.classList.contains("hide")) {
    ApplyHideClass(categoriaFilmes);
  }
});
menuSeries.addEventListener("click", () => {
  if (categoriaFilmes.classList.contains("hide")) {
    return;
  } else {
    ApplyHideClass(categoriaFilmes);
  }
  if (categoriaSeries.classList.contains("hide")) {
    ApplyHideClass(categoriaSeries);
  }
});