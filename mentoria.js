// Função para enviar a mensagem do usuário
 /* function sendMessage() {
    const inputField = document.getElementById('message-input');
    const messageText = inputField.value;

    if (messageText.trim() === '') {
        return; // Não enviar mensagens vazias
    }

    // Cria o elemento da mensagem do usuário
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = messageText;

    // Adiciona a mensagem na caixa de chat
    const chatBox = document.getElementById('chat-box');
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Rola para a última mensagem

    // Limpa o campo de entrada
    inputField.value = '';

    // Simula uma resposta do "bot" após um pequeno atraso
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = 'Olá! Como posso ajudar?'; // Mensagem simulada do bot

        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight; // Rola para a última mensagem
    }, 1000);
}
*/