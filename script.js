// Variable global para asegurar que la hoja girada siempre quede en la capa más alta del lado izquierdo
let currentZIndex = 10;

function nextPage(pageNumber) {
    const book = document.querySelector('.book');
    const currentPage = document.getElementById(`p${pageNumber}`);
    
    // Centrar libro al abrir la portada
    if (pageNumber === 1) {
        book.classList.add('open');
    }
    
    // Girar la hoja actual
    currentPage.classList.add('flipped');
    currentPage.classList.remove('active');
    
    // Magia 3D: La hoja volteada toma prioridad de capa inmediatamente
    currentZIndex++;
    currentPage.style.zIndex = currentZIndex;
    
    // Activar la hoja que queda descubierta en el lado derecho
    const nextPage = document.getElementById(`p${pageNumber + 1}`);
    if (nextPage) {
        nextPage.classList.add('active');
    }
}

// Trolleo del botón "No" optimizado para PC y Celular (Touch)
function moverBotonNo(e) {
    // Evita que el celular registre el toque antes de que el botón huya
    if (e) {
        e.preventDefault(); 
    }
    
    const btnNo = document.getElementById('btn-no');
    
    // Detectamos si está en celular para reducir el rango de salto
    const isMobile = window.innerWidth <= 600;
    const limiteX = isMobile ? 45 : 120;
    const limiteY = isMobile ? 35 : 40;
    
    const x = Math.random() * (limiteX - (-limiteX)) + (-limiteX);
    const y = Math.random() * (limiteY - (-limiteY)) + (-limiteY);
    
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
}

// Acción al dar click al botón SÍ
function aceptarInvitacion() {
    alert('¡SIII! Sabía que dirías que sí. ¡Te amo muchísimo! ❤️🌹');
}