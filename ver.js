const chatToggle = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-box');
const sendButton = document.getElementById('send-button');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.querySelector('.chat-messages');

// Live chatni ko'rsatish va yashirish
chatToggle.addEventListener('click', () => {
    chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
});

// Xabarni yuborish
sendButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        const newMessage = document.createElement('p');
        newMessage.textContent = userMessage;
        newMessage.classList.add('message', 'user-message');
        chatMessages.appendChild(newMessage);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight; // Skrollni pastga suradi
    }
});



