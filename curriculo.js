
const cpf = sessionStorage.getItem('cpf');
console.log(sessionStorage.getItem('cpf'));
async function carregarCurriculo() {
    try {
        // Fazendo a requisição para o backend com o CPF
        const response = await fetch(`http://localhost:8080/api/curriculo/cpf/${cpf}`);

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao carregar o currículo');
        }

        // Converte a resposta para JSON
        const data = await response.json();

        // Preenche os campos com os dados recebidos
        document.getElementById('nome').innerText = data.nome;
        document.getElementById('email').innerText = data.email;
        document.getElementById('idade').innerText = data.idade;
        document.getElementById('sexo').innerText = data.sexo;
        document.getElementById('telefone').innerText = data.telefone;
        document.getElementById('cpf').innerText = data.cpf;
        document.getElementById('area').innerText = data.area;
        document.getElementById('formacao').innerText = data.formacao;
        document.getElementById('salario').innerText = data.salario;
        document.getElementById('trabalho').innerText = data.trabalhoAtual;

    } catch (error) {
        console.error('Erro ao carregar o currículo:', error);
        // Exibir mensagem de erro se o currículo não for encontrado
        alert('Currículo não encontrado, favor fazer login.');
        window.location.href = "login.html";
    }
}
window.onload = carregarCurriculo;

