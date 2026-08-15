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

function aceptarInvitacion() {
    alert('¡SIII! Sabía que dirías que sí. ¡Te amo muchísimo! ❤️🌹');
}
