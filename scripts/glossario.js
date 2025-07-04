
const lista = document.getElementById("lista-itens");
const inputTermo = document.getElementById("nova-tarefa");
const inputDescricao = document.getElementById("nova-descricao");
const botaoAdicionar = document.getElementById("adicionar-tarefa");


botaoAdicionar.addEventListener("click", () => {
  const termo = inputTermo.value.trim();
  const descricao = inputDescricao.value.trim();
  
  if (termo === "") return;
  
  
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const btn = document.createElement("button");

  
  h3.innerText = termo;
  p.innerText = descricao;
  btn.innerText = "Remover";
  
  btn.addEventListener("click", () => {
    li.remove();
  });

  
  li.appendChild(h3);
  li.appendChild(p);
  li.appendChild(btn);
  lista.appendChild(li);
  
  inputTermo.value = "";
  inputDescricao.value = "";
  inputTermo.focus();
});