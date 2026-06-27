/* --- SELECIONANDO ELEMENTOS DA PÁGINA --- */
const cabecalho = document.querySelector(".cabecalho");
const titulo = document.querySelector(".cabecalho h1");
const conteudo = document.querySelector(".card");
const listaDenuncia = document.querySelector(".lista-denuncia");

/* --- CRIANDO BOTÃO DE MENSAGEM DE APOIO --- */
const botaoApoio = document.createElement("button");
botaoApoio.textContent = "Mensagem de apoio";
botaoApoio.classList.add("botao-apoio");

/* --- CRIANDO ÁREA DA MENSAGEM --- */
const mensagemApoio = document.createElement("p");
mensagemApoio.classList.add("mensagem-apoio");

/* --- INSERINDO BOTÃO E MENSAGEM NA PÁGINA --- */
conteudo.appendChild(botaoApoio);
conteudo.appendChild(mensagemApoio);

/* --- AÇÃO DO BOTÃO --- */
botaoApoio.addEventListener("click", function () {
  mensagemApoio.textContent =
    "Você não está sozinho. Procure um professor, a equipe pedagógica ou alguém de confiança. Denunciar é um ato de coragem.";

  mensagemApoio.style.color = "#7cff9b";
  mensagemApoio.style.fontWeight = "bold";
  mensagemApoio.style.textAlign = "center";
});

/* --- EFEITO NO TÍTULO AO PASSAR O MOUSE --- */
titulo.addEventListener("mouseover", function () {
  titulo.textContent = "Juntos contra o bullying!";
  titulo.style.color = "#d9a7ff";
});

titulo.addEventListener("mouseout", function () {
  titulo.textContent = "Combatendo o bullying na escola";
  titulo.style.color = "#ffffff";
});

/* --- DESTAQUE NA LISTA DE CANAIS DE DENÚNCIA --- */
listaDenuncia.addEventListener("click", function () {
  listaDenuncia.style.borderLeft = "6px solid #d9a7ff";
  listaDenuncia.style.boxShadow = "0 0 20px rgba(217, 167, 255, 0.5)";
});

/* --- MENSAGEM INICIAL NO CONSOLE --- */
console.log("Página sobre combate ao bullying carregada com sucesso.");