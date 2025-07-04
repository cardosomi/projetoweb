const main = document.createElement("main");
const sec1 = document.createElement("section");
const texto1 = document.createElement("p");
texto1.innerText ="Traduzindo de LIBRAS para Fala";
const sec2 = document.createElement("section");
const texto2 = document.createElement("p");
texto2.innerText = "Traduzindo de Fala para LIBRAS";
const img1 = document.createElement("img");
img1.src="../imgs/img1.jpg";
img1.alt="imagem de libras";
const img2 = document.createElement("img");
img2.src= "../imgs/img2.jpg";
img2.alt= "imagem de microfone"
document.body.appendChild(main);
main.append(sec1,sec2);
sec1.append(img1,texto1);
sec2.append(img2,texto2);