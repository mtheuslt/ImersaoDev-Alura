projectsData = {
  conversor: {
    title: 'Conversor de Moedas',
    link: 'https://codepen.io/Arcadya/pen/zYNdaVM',
    description: [
      'Projeto - Aula 1.',
      'Introdução ao JavaScript com o desenvolvimento de um conversor de unidades.',
      'Primeiro programa feito com JavaScript e CodePen, usando variáveis.',
    ],
    img: 'https://github.com/mtheuslt/ImersaoDev-Alura/blob/main/img/Aula01.png?raw=true',
  },
  calculadora: {
    title: 'Calculadora',
    link: 'https://codepen.io/Arcadya/pen/OJWjwgj',
    description: [
      'Projeto - Aula 2.',
      'Criada uma calculadora para as operações de soma, subtração, multiplicação e divisão.',
      'Introdução ao "if" e "else", utilizados para identificar qual a operação deve ser realizada.',
      'Demonstração da manipulação do documento HTML',
    ],
    img: 'https://github.com/mtheuslt/ImersaoDev-Alura/blob/main/img/Aula02.png?raw=true',
  },
  mentalista: {
    title: 'Mentalista',
    link: 'https://codepen.io/Arcadya/pen/jOyLpdQ',
    description: [
      'Projeto - Aula 3.',
      'Criado um jogo de adivinhar o número escolhido pelo computador',
      'Apresentado o "while" para a criação de loops. Neste caso criou-se um loop para verificar as tentativas restantes.',
    ],
    img: 'https://github.com/mtheuslt/ImersaoDev-Alura/blob/main/img/Aula03.png?raw=true',
  },
  aluraflix: {
    title: 'Aluraflix - TrailerFlix',
    link: 'https://codepen.io/Arcadya/pen/jOyLvOJ',
    description: [
      'Projeto - Aulas 4 e 5.',
      'Criada uma página que monta um painel de imagens com os links fornecidos pelo usuário.',
      'Apresentação de Array de dados e alguns métodos para a manipulação dos mesmos.',
      'Introdução do "for", também utilizado para a criação de loops',
    ],
    img: 'https://github.com/mtheuslt/ImersaoDev-Alura/blob/main/img/Aula04_05.png?raw=true',
  },
  tabela: {
    title: 'Tabela de Classificação',
    link: 'https://codepen.io/Arcadya/pen/abpyaBm',
    description: [
      'Projeto - Aula 6',
      'Criada uma tabela de classificação com base no número de vitórias, derrotas e empates',
      'Introdução aos Objetos, como forma de armazenamento de dados',
      'Manipulação do documento HTML com uso do JavaScript',
    ],
    img: 'https://github.com/mtheuslt/ImersaoDev-Alura/blob/main/img/Aula06.png?raw=true',
  },
  supertrunfo: {
    title: 'Supertrunfo',
    link: 'https://codepen.io/Arcadya/pen/wvgqEQL',
    description: [
      'Projeto - Aulas 7 a 9.',
      'Elaborado um jogo no estilo "Supertrunfo" onde o jogador disputa contra o computador',
      'Projeto com a aplicação dos conhecimentos obtidos durante a imersão',
    ],
    img: 'https://github.com/mtheuslt/ImersaoDev-Alura/blob/main/img/Aula07-09.png?raw=true',
  },
  certificard: {
    title: 'CertifiCard',
    link: 'https://codepen.io/Arcadya/pen/MWJvqxj',
    description: [
      'Projeto - Aula 10.',
      'Este projeto foi desenvolvido para ser um híbrido de certificado da imersão com um cartão dos projetos desenvolvidos.',
      'Nessa aula foram passados conhecimentos relativos ao uso do HTML e CSS.',
    ],
    img: 'https://github.com/mtheuslt/ImersaoDev-Alura/blob/main/img/AulaFinal%20-%20Certificado.png?raw=true',
  },
}

function closePreview() {
  const previewBox = document.querySelector('.previewBox');
  previewBox.style.opacity = 0;
  previewBox.style.pointerEvents = 'none';
}

function openPreview(project) {
  const previewBox = document.querySelector('.previewBox');
  updateProjectData(project);
  previewBox.style.opacity = 1;
  previewBox.style.pointerEvents = 'all';
}

function updateProjectData(project) {
  const projectTitleHTML = document.getElementById('projectTitle');
  const projectImgHTML = document.getElementById('projectImg');
  projectImgHTML.setAttribute('src', '');
  const projectTextHTML = document.getElementById('projectText');
  const projectLinkHTML = document.getElementById('projectLink');
  
  projectTitleHTML.innerHTML = projectsData[project].title;
  projectImgHTML.setAttribute('src', projectsData[project].img);
  projectTextHTML.innerHTML = projectsData[project].description.reduce((text, paragraph) => {
    return text + `<p>${paragraph}</p>`;
  }, '');
  projectLinkHTML.setAttribute('href', projectsData[project].link);
}
