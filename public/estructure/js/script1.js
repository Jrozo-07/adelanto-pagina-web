document.addEventListener('DOMContentLoaded', function() {
    const chatIcon = document.getElementById('chat-icon');
    const chatWindow = document.getElementById('chat-window');
    const chatMessages = document.getElementById('chat-messages');
    const chatButtons = document.querySelectorAll('#chat-input button');

    const responses = {
        'documento-privado': "Aquí tienes los requisisitos generales para tramitar un documento privado en la Oficina juridica Rodrigo Gutierrez: Cedulas de identidad de todas las partes involucradas, documento original, identificacion de las partes, documentos de propiedad y solvencia ",
        'traspaso-bienes': "Aquí tienes los requisitos si deseas realizar un traspaso de bienes en la Oficina Juridica Rodrigo Gutierrez, documento traslativo de propiedad debidamente autenticado, la cédula de identidad laminada y vigente, el certificado de registro de vehículo (si aplica) y una copia de la póliza de responsabilidad civil. También se requiere una constancia de experticia de verificación legal (original) y la Planilla Única de Trámite. En caso de ser un apoderado legal, se debe presentar un documento de poder debidamente notariado. Asimismo hay algunos requisitos adicionales (dependiendo el tipo de traspaso); Inmuebles: Certificado de Tradición y Libertad no mayor a 30 días,Fotocopia del Impuesto Predial del año vigente y al día, Paz y Salvo del impuesto de Valorización del inmueble, Cédula catastral actualizada. Copia del documento de propiedad registrado. Documento de condominio (si aplica), Poderes para firmas (si aplica), Comprobante de pago (si aplica); Vehiculos: Certificado de Registro de Vehículo a nombre del propietario anterior, constancia de Experticia de Verificación Legal (vigente) emitida por la Policía Nacional, comprobante de pago de los aranceles. Consideraciones adicionales:Es importante verificar si hay deudas pendientes sobre la propiedad (certificados de gravamen), si la propiedad es de propiedad horizontal, se debe estar a paz y salvo de administración y al día con el reglamento de la zona, si una de las partes no puede asistir, se puede otorgar un poder a un tercero, si hay un extranjero involucrado, debe realizar el trámite de registro de extranjeros ante el SAREN, se deben pagar los aranceles y timbres fiscales.",
        'divorcio': "Aquí tienes los requisitos si deseas divorciarte en la Juridica Rodrigo Gutierrez, acta de matrimonio (original o copia certificada), actas de nacimiento de los hijos (si los hay), poder para representar a una o ambas partes, y documentos de propiedad de bienes conyugales. Si hay hijos menores, se requiere información adicional sobre patria potestad, régimen de convivencia y pensión alimentaria. "
    };


    const welcomeMessage = "¡Hola! Soy tu asistente jurídico básico. Por el momento solo puedo indicarte cuales son los requisitos de tres temas en especifico . Haz clic en una opción:";

    let isFirstOpen = true;


    chatIcon.addEventListener('click', function() {
        if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
            chatWindow.style.display = 'flex';
            if (isFirstOpen) {
                addAssistantMessage(welcomeMessage);
                isFirstOpen = false;
            }
        } else {
            chatWindow.style.display = 'none';
        }
    });

    chatButtons.forEach(button => {
        button.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            const userQuestion = this.textContent;
             addUserMessage(userQuestion);
            const response = responses[topic] || "Lo siento, no tengo información sobre ese tema."; // Fallback por si acaso
            addAssistantMessage(response);

            chatMessages.scrollTop = chatMessages.scrollHeight;
        });
    });


    function addAssistantMessage(text) {
        const messageElement = document.createElement('p');
        messageElement.innerHTML = '<b>Asistente:</b> ' + text;
        chatMessages.appendChild(messageElement);
    }


     function addUserMessage(text) {
        const messageElement = document.createElement('p');
        messageElement.innerHTML = '<b>Tú:</b> ' + text;
        messageElement.style.textAlign = 'right';
        chatMessages.appendChild(messageElement);
     }


    
});