const quotesList = [
  {
    frase:
      "Uma pessoa com HIV, além de ter um problema sério para ela, é uma despesa para todos aqui no Brasil.",
    bolsonaro: true,
    fonte:
      "https://noticias.uol.com.br/politica/ultimas-noticias/2020/02/05/bolsonaro-pessoa-com-hiv-e-despesa-para-o-pais.htm",
  },
  {
    frase: "Índio tá evoluindo, cada vez mais é ser humano igual a nós.",
    bolsonaro: true,
    fonte:
      "https://noticias.uol.com.br/politica/ultimas-noticias/2020/01/23/indio-ta-evoluindo-cada-vez-mais-e-ser-humano-igual-a-nos-diz-bolsonaro.htm",
  },
  {
    frase:
      "Você fala para mim de poluição ambiental, é só você fazer cocô dia sim, dia não, que melhora bastante a nossa vida também.",
    bolsonaro: true,
    fonte:
      "https://www.gazetaonline.com.br/noticias/politica/2019/08/bolsonaro-sugere-fazer-coco-dia-sim-dia-nao-para-preservar-o-ambiente-1014193455.html",
  },
  {
    frase: "O que é Golden Shower?",
    bolsonaro: true,
    fonte:
      "https://noticias.uol.com.br/politica/ultimas-noticias/2019/03/05/bolsonaro-posta-video-com-homem-urinando-em-outro-e-o-associa-a-blocos.htm",
  },
  {
    frase:
      "Você tem uma cara de homossexual terrível, mas nem por isso eu te acuso de ser homossexual.",
    bolsonaro: true,
    fonte:
      "https://noticias.uol.com.br/politica/ultimas-noticias/2019/12/20/bolsonaro-defende-flavio-e-critica-investigacao-do-mp-e-governador-do-rj.htm",
  },
  {
    frase:
      "Falar que se passa fome no Brasil é uma grande mentira. Você não vê gente pobre pelas ruas com físico esquelético como a gente vê em alguns outros países por aí pelo mundo.",
    bolsonaro: true,
    fonte:
      "https://g1.globo.com/politica/noticia/2019/07/19/falar-que-se-passa-fome-no-brasil-e-uma-grande-mentira-diz-bolsonaro.ghtml",
  },
  {
    frase:
      "Todo mundo gostaria de passar a tarde com um príncipe. Principalmente vocês, mulheres, né?",
    bolsonaro: true,
    fonte:
      "https://noticias.uol.com.br/ultimas-noticias/bbc/2019/10/29/bolsonaro-todo-mundo-gostaria-de-passar-a-tarde-com-um-principeprincipalmente-voces-mulheres.htm",
  },
  {
    frase:
      "A solidariedade é o sentimento que melhor expressa o respeito pela dignidade humana.",
    bolsonaro: false,
    img: "kafka.jpg",
    caption: "Franz Kafka",
    fonte:
      'A frase é de autoria de Franz Kafka, considerado um dos maiores escritores do século 20, autor das cultuadas obras "A Metamorfose" e "O Processo".',
  },
  {
    frase: "Todos os tipos de coisas neste mundo se comportam como espelhos.",
    bolsonaro: false,
    img: "jacques-lacan.jpg",
    caption: "Jacques Lacan",
    fonte:
      "Quem disse isso foi o francês Jacques Lacan, um dos pioneiros da psicanálise.",
  },
  {
    frase:
      "Não é possível discutir racionalmente com alguém que prefere matar-nos a ser convencido pelos nossos argumentos.",
    bolsonaro: false,
    img: "karl-popper.jpg",
    caption: "Karl Popper",
    fonte:
      "O autor da sóbria mensagem é Karl Popper, filósofo da ciência e grande defensor da democracia liberal.",
  },
  {
    frase:
      "Não creio ser um homem que saiba. Tenho sido sempre um homem que busca, mas já agora não busco mais nas estrelas e nos livros: começo a ouvir os ensinamentos que o meu sangue murmura em mim.",
    bolsonaro: false,
    img: "hermann-hesse.jpg",
    caption: "Hermann Hesse",
    fonte:
      'A sentença é de autoria de Hermann Hesse, escritor e pintor alemão, receptor do prêmio Goethe e do Nobel de Literatura. Conhecido pela autoria das obras "O Lobo da Estepe", "Sidarta" e "O Jogo das Contas de Vidro" ',
  },
  {
    frase:
      "Maturidade é aprender a se afastar de pessoas e situações que ameaçam a paz de sua mente, seu respeito por si próprio, valores, moral e auto-estima.",
    bolsonaro: false,
    img: "buddha.png",
    caption: "Estátua do Buddha",
    fonte:
      "A lição sobre inteligência emocional vem de Siddhartha Gautama, o Buddha.",
  },
  {
    frase:
      "Aprendi o silêncio com os faladores, a tolerância com os intolerantes, a bondade com os maldosos; e, por estranho que pareça, sou grato a esses professores.",
    bolsonaro: false,
    img: "khalil-gibran.jpg",
    caption: "Khalil Gibran",
    fonte:
      'A mensagem sobre tolerância é de Khalil Gibran, poeta, pintor e filósofo libanês, mais conhecido pela autoria do livro "O Profeta".',
  },
  {
    frase: "Nós não vemos as coisas como elas são, vemo-las como nós somos.",
    bolsonaro: false,
    img: "anais-nin.jpg",
    caption: "Anaïs Nin",
    fonte:
      "Quem disse isso foi a escritora francesa Anaïs Nin, nos levando a refletir sobre como o conteúdo do que dizemos diz muito sobre quem somos.",
  },
];

const positiveIntros = [
  "(＠＾◡＾)  Isso mesmo! 	(＠＾◡＾)",
  "ヽ(*・ω・)ﾉ  Muito bem! ヽ(*・ω・)ﾉ",
  "٩(◕‿◕｡)۶  Correto! 	٩(◕‿◕｡)۶",
  "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧  Você é muito sagaz! 	(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
  "ヽ(*⌒▽⌒*)ﾉ  Certa resposta! ヽ(*⌒▽⌒*)ﾉ",
  "	(◕‿◕)♡  Isso aí!  (◕‿◕)♡",
  "	ヽ(♡‿♡)ノ  Brilhou!  	ヽ(♡‿♡)ノ",
];

const negativeIntros = [
  "｡ﾟ･ (>﹏<) ･ﾟ｡  Não. 	｡ﾟ･ (>﹏<) ･ﾟ｡",
  "(╥﹏╥)  Errado! 	(╥﹏╥)",
  "(╯_╰)  Incorreto! 	(╯_╰)",
  "(T_T)  Nope  (T_T)",
  "o(〒﹏〒)o  Não não não  o(〒﹏〒)o",
  "(μ_μ)  De forma alguma  (μ_μ)",
  ".｡･ﾟﾟ･(＞_＜)･ﾟﾟ･｡.  Resposta incorreta! 	.｡･ﾟﾟ･(＞_＜)･ﾟﾟ･｡.",
];

const bolsonaroAutor = [
  "A sentença é de autoria de Jair Bolsonaro.",
  "O autor é o polêmico político brasileiro.",
  "A autoria é do presidente da república.",
  "Foi o presidente quem falou.",
  "Foi ele.",
  "A autoria é de Jair Bolsonaro.",
  "Foi o presidente quem disse isso.",
];

const msgStyleSuccess = {
  fontSize: 18,
  color: "#00214d",
  background: "#00ebc7",
  borderStyle: "solid",
  borderRadius: "5px",
  padding: "10px",
  marginBottom: "10px",
};

const msgStyleError = {
  fontSize: 18,
  color: "#00214d",
  background: "#ff5470",
  borderStyle: "solid",
  borderRadius: "5px",
  padding: "10px",
  marginBottom: "10px",
};

export {
  quotesList,
  positiveIntros,
  negativeIntros,
  bolsonaroAutor,
  msgStyleSuccess,
  msgStyleError,
};
