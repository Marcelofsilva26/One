document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const copyBtn = document.getElementById('copyBtn');

    function validateInput(text) {
        return /^[a-z\s]*$/.test(text); // Apenas letras minúsculas e espaços
    }

    function encrypt(text) {
        if (!validateInput(text)) {
            alert('Por favor, use apenas letras minúsculas e espaços.');
            return '';
        }
        return text.split('').map(char => {
            return String.fromCharCode(char.charCodeAt(0) + 3); // Exemplo de criptografia simples
        }).join('');
    }

    function decrypt(text) {
        if (!validateInput(text)) {
            alert('Por favor, use apenas letras minúsculas e espaços.');
            return '';
        }
        return text.split('').map(char => {
            return String.fromCharCode(char.charCodeAt(0) - 3); // Desfazer a criptografia
        }).join('');
    }

    encryptBtn.addEventListener('click', () => {
        outputText.value = encrypt(inputText.value);
    });

    decryptBtn.addEventListener('click', () => {
        outputText.value = decrypt(inputText.value);
    });

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(outputText.value).then(() => {
            alert('Texto copiado para a área de transferência!');
        }, () => {
            alert('Falha ao copiar o texto.');
        });
    });
});
