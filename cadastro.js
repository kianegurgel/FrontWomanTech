document.addEventListener("DOMContentLoaded", function() {
    // Espera o DOM ser carregado para adicionar o event listener ao formulário
    const formCadastro = document.getElementById("formCadastro");

    if (!formCadastro) {
        console.error("Formulário não encontrado.");
        return;
    }

    formCadastro.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Validação básica do formulário
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const area = document.getElementById("area").value;
        const cpf = document.getElementById("cpf").value;

        if (!nome || !email || !senha || !area || !cpf) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Cria o objeto do usuário
        const usuario = {
            nome: nome,
            email: email,
            senha: senha,
            area: area, // Corrigido para ser consistente com o back-end
            cpf: cpf
        };

        // Faz a requisição para o servidor Java
        fetch("http://localhost:8080/api/usuario", { // Ajuste da URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao cadastrar (${response.status}): ${response.statusText}`);
            }
            return response.json(); // Converte a resposta para JSON
        })
        .then(data => {
            alert("Cadastro realizado com sucesso!");
            sessionStorage.setItem('cpf', cpf);
            console.log(sessionStorage.getItem('cpf'));
            window.location.href = "index.html";
            console.log("Dados cadastrados:", data); // Exibe a resposta no console
        })
        .catch(error => {
            console.error("Erro:", error); // Log para depuração
            alert("Erro ao cadastrar: " + error.message);
        });
    });
});