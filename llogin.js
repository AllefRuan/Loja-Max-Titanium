const nomeField = document.getElementById("nomeField");
const title = document.getElementById("title");
const loginBtn = document.getElementById("loginBtn");
const cadastroBtn = document.getElementById("cadastroBtn");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

// Troca entre Login e Cadastro
cadastroBtn.onclick = () => {
  nomeField.style.display = "block";
  title.innerText = "Cadastro";
  cadastroBtn.classList.remove("disable");
  loginBtn.classList.add("disable");
};

loginBtn.onclick = () => {
  nomeField.style.display = "none";
  title.innerText = "Login";
  loginBtn.classList.remove("disable");
  cadastroBtn.classList.add("disable");
};

// Função para salvar usuário
function salvarUsuario(nome, email, senha) {
  localStorage.setItem("usuario", JSON.stringify({ nome, email, senha }));
}

// Função para verificar login
function verificarLogin(email, senha) {
  const user = JSON.parse(localStorage.getItem("usuario"));
  if (user && user.email === email && user.senha === senha) {
    alert(`Bem-vindo de volta, ${user.nome}! 💪`);
    window.location.href = "../index.html";
  } else {
    alert("E-mail ou senha incorretos!");
  }
}

// Clique no botão de cadastro
cadastroBtn.addEventListener("click", () => {
  if (!cadastroBtn.classList.contains("disable")) {
    if (nome.value && email.value && senha.value) {
      salvarUsuario(nome.value, email.value, senha.value);
      alert("Cadastro realizado com sucesso!");
      window.location.href = "../index.html";
    } else {
      alert("Preencha todos os campos!");
    }
  }
});

// Clique no botão de login
loginBtn.addEventListener("click", () => {
  if (!loginBtn.classList.contains("disable")) {
    verificarLogin(email.value, senha.value);
  }
});

// Se o usuário já estiver logado, pula direto pra loja
window.onload = () => {
  const user = localStorage.getItem("usuario");
  if (user) {
    const nome = JSON.parse(user).nome;
    console.log(`Usuário logado: ${nome}`);
  }
};
