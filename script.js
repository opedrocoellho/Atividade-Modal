document.getElementById("btn-login").addEventListener("click", () => {
    document.getElementById("modal").classList.remove("hidden");
  });
  
  document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
  });
  
  document.getElementById("form-cadastro").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const dadosUsuario = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      telefone: document.getElementById("telefone").value,
      cpf: document.getElementById("cpf").value,
      senha: document.getElementById("senha").value,
    };
  
    localStorage.setItem("dadosUsuario", JSON.stringify(dadosUsuario));
    alert("Seu cadastro foi realizado!");
    window.location.href = "perfil.html";
  });
  
  