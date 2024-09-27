// Mostrar/ocultar el chat y enviar el mensaje de bienvenida
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    
    // Si el chat se está mostrando, envía el mensaje de bienvenida solo una vez
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'block';
        sendWelcomeMessage();
    } else {
        chatBox.style.display = 'none';
    }
}

// Función para enviar el mensaje de bienvenida automáticamente
function sendWelcomeMessage() {
    const chatContent = document.getElementById('chatContent');

    // Crear el mensaje de bienvenida del bot
    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');
    botMessage.innerText = 'Hola, bienvenido a Sena Store Web. Puedes consultar con las siguientes opciones:';
    chatContent.appendChild(botMessage);

    // Desplazar el chat hacia abajo
    chatContent.scrollTop = chatContent.scrollHeight;
}

// Función para cuando el usuario selecciona una opción de pregunta
function chooseOption(option) {
    const chatContent = document.getElementById('chatContent');

    // Crear el mensaje del usuario basado en la opción seleccionada
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.innerText = capitalizeFirstLetter(option);
    chatContent.appendChild(userMessage);
    
    // Respuesta del bot basada en la opción seleccionada
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.innerText = botResponse(option);
        chatContent.appendChild(botMessage);
        
        // Desplazar el chat hacia abajo
        chatContent.scrollTop = chatContent.scrollHeight;
    }, 500);
}

// Función para capitalizar la primera letra
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Respuesta dinámica del bot basada en preguntas sobre la tienda de uniformes
function botResponse(userMessage) {
    const respuestas = {
        'tallas': 'Ofrecemos uniformes en varias tallas: S, M, L, XL.',
        'precios': 'Los precios varían según el tipo de uniforme. Los puedes ver en nuestra seccion de catalogo',
        'envíos': 'Realizamos envíos en la ciudad de Ibague. El costo de envío es de $8.000.',
        'ubicacion': 'En la ciudad de ibague se encuentran diversas tiendas, lo puedes ver en la seccion de tiendas',
        'contacto': 'puedes comunicarte con nosotros a traves de nuestras redes sociales y numeros telefonicos, los puedes ver en la seccion de informacion.',
        'personalización': 'Ofrecemos servicios de personalización para bordar nombres o logotipos en los uniformes.'

    };

    return respuestas[userMessage] || 'Lo siento, no tengo esa información. ¿Puedes reformular tu pregunta o especificar más detalles sobre lo que necesitas saber?';
}