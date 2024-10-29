// Elementos DOM
const mainPage = document.getElementById('main-page');
const loginPage = document.getElementById('login-page');
const loginBtn = document.getElementById('login-btn');
const backBtn = document.getElementById('back-btn');
const loginForm = document.getElementById('login-form');

// Mostrar página de login con efecto
loginBtn.addEventListener('click', () => {
    // Ocultar la página principal con una transición suave
    mainPage.style.transition = 'opacity 0.3s ease';
    mainPage.style.opacity = '0';

    setTimeout(() => {
        mainPage.style.display = 'none';
        loginPage.classList.remove('hidden');

        // Mostrar la página de login con una transición suave
        loginPage.style.transition = 'opacity 0.3s ease';
        loginPage.style.opacity = '0';

        requestAnimationFrame(() => {
            loginPage.style.opacity = '1';
        });
    }, 300);
});

// Volver a la página principal
backBtn.addEventListener('click', () => {
    // Ocultar la página de login
    loginPage.style.opacity = '0';

    setTimeout(() => {
        loginPage.classList.add('hidden');
        mainPage.style.display = 'block';

        requestAnimationFrame(() => {
            mainPage.style.opacity = '1';
        });
    }, 300);
});

// Animación para los campos de entrada
document.querySelectorAll('.input-group input').forEach(input => {
    // Agregar efecto de enfoque
    input.addEventListener('focus', function() {
        this.style.transition = 'border-color 0.3s ease';
        this.style.borderColor = '#5AABA5';
        this.parentElement.classList.add('focused');
    });

    // Remover efecto al perder el enfoque
    input.addEventListener('blur', function() {
        this.style.borderColor = '#92B89D';
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });

    // Manejar el estado activo cuando hay texto
    input.addEventListener('input', function() {
        if (this.value) {
            this.parentElement.classList.add('has-text');
        } else {
            this.parentElement.classList.remove('has-text');
        }
    });
});

// Efecto hover para los botones sociales
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });

    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Manejo del formulario de login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí puedes agregar la validación del formulario
    console.log('Formulario enviado');
});

// Verificar que las imágenes se carguen correctamente
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        console.error('Error al cargar imagen:', this.src);
        // Puedes agregar una imagen de respaldo si lo deseas
        // this.src = 'assets/images/fallback-image.png';
    });
});