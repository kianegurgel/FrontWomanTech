class Login {
    constructor() {
        this.url = 'http://localhost:8080/api/login/login'; // Endpoint da API de login
    }

    // Método para autenticar o usuário
    async autenticar(cpf, senha) {
        try {
            // Construa a URL com os parâmetros cpf e senha na query string
            const urlComParametros = `${this.url}?cpf=${encodeURIComponent(cpf)}&senha=${encodeURIComponent(senha)}`;

            const response = await fetch(urlComParametros, {
                method: 'POST', // Método POST
                headers: {
                    'Content-Type': 'application/json', // Cabeçalho necessário
                },
            });

            if (!response.ok) {
                // Se a resposta não for OK (status 2xx), lança um erro
                throw new Error(`Erro: ${response.statusText}`);
            }

            // Se o login for bem-sucedido
            const result = await response.text(); // Resposta do servidor (texto simples)
            return result; // Retorna a mensagem de sucesso ou falha
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            throw new Error("Erro na requisição de login.");
        }
    }
}

// Exemplo de uso da classe Login
const login = new Login();

async function efetuarLogin(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    const cpf = document.getElementById('cpf').value; // Pega o CPF do formulário
    const senha = document.getElementById('senha').value; // Pega a senha do formulário

    sessionStorage.setItem('cpf', cpf); // Salva o CPF no sessionStorage
    console.log('CPF salvo no sessionStorage:', cpf); // V

    try {
        const mensagem = await login.autenticar(cpf, senha); // Tenta fazer o login
        alert(mensagem); // Exibe a resposta do servidor
        if (mensagem === "Login bem-sucedido") {
            sessionStorage.setItem('cpf', cpf);
            console.log(sessionStorage.getItem('cpf'));
            window.location.href = "index.html"; // Redireciona para outra página após sucesso
        }
    } catch (error) {
        alert(error.message); // Exibe o erro caso ocorra
    }
}

// Adiciona o evento de submit ao formulário
document.getElementById('formLogin').addEventListener('submit', efetuarLogin);
