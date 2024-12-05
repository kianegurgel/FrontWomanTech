// Espera o DOM carregar completamente antes de adicionar o evento ao formulário
document.addEventListener('DOMContentLoaded', function () {
    // Captura o formulário
    const form = document.getElementById('curriculumForm');
    
    // Função que será chamada quando o formulário for enviado
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

        // Coleta os dados do formulário
        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            cpf: sessionStorage.getItem('cpf'),
            idade: document.getElementById('idade').value,
            sexo: document.getElementById('sexo').value,
            area: document.getElementById('area').value,
            formacao: document.getElementById('formacao').value,
            trabalhoAtual: document.getElementById('trabalhoAtual').value,
            pretensaoSalarial: document.getElementById('pretensaoSalarial').value
        };

        // Enviar os dados para o backend
        enviarDadosCurriculo(formData);
    });
});

// Função para enviar os dados do formulário para o backend
async function enviarDadosCurriculo(data) {
    try {
        const response = await fetch('http://localhost:8080/api/curriculo/salvar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Verificar se a resposta foi bem-sucedida
        if (response.ok) {
            alert('Currículo cadastrado com sucesso!');
            // Aqui você pode redirecionar ou limpar o formulário, por exemplo
            document.getElementById('curriculumForm').reset();
        } else {
            alert('Erro ao cadastrar o currículo. Tente novamente.');
        }
    } catch (error) {
        console.error('Erro ao salvar o currículo:', error);
        alert('Erro de comunicação com o servidor. Tente novamente mais tarde.');
    }
}
