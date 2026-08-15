function nextPage(pageNumber) {
    const currentPage = document.getElementById(`p${pageNumber}`);
    currentPage.classList.add('flipped');
    currentPage.classList.remove('active');
    
    const nextPage = document.getElementById(`p${pageNumber + 1}`);
    if (nextPage) {
        nextPage.classList.add('active');
    }
}

function moverBotonNo(e) {
    if (e) {
        e.preventDefault(); 
    }
    
    const btnNo = document.getElementById('btn-no');
    
    // Rango de salto (más amplio para que sea más difícil atraparlo)
    const isMobile = window.innerWidth <= 600;
    const maxRangoX = isMobile ? 80 : 130;
    const maxRangoY = isMobile ? 100 : 150;
    
    let x = (Math.random() - 0.5) * maxRangoX * 2;
    let y = (Math.random() - 0.5) * maxRangoY * 2;
    
    // LA MAGIA ANTI-TRAMPAS (Zona prohibida)
    // Como el botón "SÍ" está arriba del "NO", la zona prohibida de choque es hacia arriba (negativa).
    // Si la 'y' calculada cae entre -90 y 10 pixeles, chocaría con el SÍ.
    if (y > -90 && y < 10) {
        // Lo pateamos hacia abajo obligatoriamente
        y = Math.random() * 60 + 30; 
    }
    
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
}

function prevPage(targetPage) {
    // La página a la que queremos regresar (la que está volteada)
    const pageToReveal = document.getElementById(`p${targetPage}`);
    // La página en la que estamos ahorita
    const currentPage = document.getElementById(`p${targetPage + 1}`);

    if (pageToReveal) {
        // Le quitamos la clase 'flipped' para que la hoja regrese a la derecha
        pageToReveal.classList.remove('flipped');
        pageToReveal.classList.add('active');
    }
    
    if (currentPage) {
        // Desactivamos la hoja actual
        currentPage.classList.remove('active');
    }
}

// Función para seleccionar la opción del cuestionario
function selectOption(botonClickeado) {
    // Buscamos todos los botones que tengan la clase 'quiz-btn'
    const botones = document.querySelectorAll('.quiz-btn');
    
    // Le quitamos la clase 'selected' a todos para resetearlos
    botones.forEach(boton => boton.classList.remove('selected'));
    
    // Le ponemos la clase 'selected' únicamente al botón que tocó
    botonClickeado.classList.add('selected');
}

// Función para el btón SÍ (Valida, avanza y manda alerta a Discord)
function aceptarInvitacion() {
    // 1. Verificamos si ya seleccionó una opción
    const opcionSeleccionada = document.querySelector('.quiz-btn.selected');
    
    if (!opcionSeleccionada) {
        // Si no ha elegido nada, le lanzamos una alerta tierna y detenemos la función
        alert("Tienes que elegir algo corazón c:");
        return; // Esto evita que cambie de página o mande la notificación
    }

    // Si ya eligió algo, sacamos el texto de su elección
    const eleccionTexto = opcionSeleccionada.innerText.trim();

    // 2. Hacemos la animación a la última página (p12)
    const currentPage = document.getElementById('p11');
    currentPage.classList.add('flipped');
    currentPage.classList.remove('active');
    
    const nextPage = document.getElementById('p12');
    if (nextPage) {
        nextPage.classList.add('active');
    }

    // 3. Pegas aquí la URL mágica de tu Webhook
    const webhookUrl = "https://discord.com/api/webhooks/1538108487039713372/38lO3Y4s0f0v9qqv56pfhXObETKRcguJqhR7Kh0Sl6GkHiJwAY_eshVD0DXE2we_aUFt";
    
    // 4. Armamos el reporte completo para Discord con su elección
    const payload = {
        content: `🚨 **¡ALERTA ROMÁNTICA!** 🚨\n¡Miriam acaba de decir que SÍ en el libro! 🎉\n\n🍽️ **Su elección para festejar:** ${eleccionTexto}\n\n¡Ve preparando la salida!`
    };

    // 5. El envío silencioso
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })
    .then(() => {
        console.log("Notificación enviada con éxito, el novio ha sido alertado 😎");
    })
    .catch(error => {
        console.error("Error al enviar la notificación:", error);
    });
}
