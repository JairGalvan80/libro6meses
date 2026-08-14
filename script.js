function nextPage(pageNumber) {
    const currentPage = document.getElementById(`p${pageNumber}`);
    
    // Gira la página actual
    currentPage.classList.add('flipped');
    currentPage.classList.remove('active');
    
    // Activa la página de abajo para que reciba clicks
    const nextPage = document.getElementById(`p${pageNumber + 1}`);
    if (nextPage) {
        nextPage.classList.add('active');
    }
}

// Trolleo del botón "No" optimizado para el nuevo tamaño
function moverBotonNo(e) {
    if (e) {
        e.preventDefault(); 
    }
    
    const btnNo = document.getElementById('btn-no');
    
    // Rango de salto ajustado para que no se salga de la tarjeta nueva
    const isMobile = window.innerWidth <= 600;
    const limiteX = isMobile ? 65 : 120;
    const limiteY = isMobile ? 75 : 40;
    
    const x = Math.random() * (limiteX - (-limiteX)) + (-limiteX);
    const y = Math.random() * (limiteY - (-limiteY)) + (-limiteY);
    
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
}

// Victoria
function aceptarInvitacion() {
    alert('¡SIII! Sabía que dirías que sí. ¡Te amo muchísimo! ❤️🌹');
}
