// Gestión de páginas
function showPage(pageId) {
    // Ocultar todas las páginas
    const pages = ['main-page', 'home-page', 'about-page', 'login-page'];
    pages.forEach(page => {
        const element = document.getElementById(page);
        if (element) {
            element.classList.add('hidden');
        }
    });

    // Mostrar la página solicitada
    const pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.classList.remove('hidden');
    }
}

// Gestión de login
const loginButtons = document.querySelectorAll('#login-btn, #login-btn-home, #login-btn-about');
loginButtons.forEach(btn => {
    btn.addEventListener('click', () => showPage('login-page'));
});

// Gestión de modales
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');
}

// Contenido de "Sobre Nosotros"
const aboutContent = {
    'quienes-somos': {
        title: '¿Quiénes somos?',
        content: 'Aquí va el contenido sobre quiénes somos...'
    },
    'que-buscamos': {
        title: '¿Qué buscamos?',
        content: 'Aquí va el contenido sobre qué buscamos...'
    },
    'como-trabajamos': {
        title: '¿Cómo trabajamos?',
        content: 'Aquí va el contenido sobre cómo trabajamos...'
    }
};

function showDetails(section) {
    const content = aboutContent[section];
    const container = document.getElementById('modal-content-container');
    container.innerHTML = `
        <h2>${content.title}</h2>
        <div class="content">
            ${content.content}
        </div>
    `;
    openModal('details-modal');
}

// Gestión de foros
let currentForumId = null;
const forumData = {
    1: {
        title: 'Tema del Foro 1',
        messages: [
            { user: 'Usuario1', message: 'Primer mensaje del foro', timestamp: '2024-01-01 10:00' },
            { user: 'Usuario2', message: 'Respuesta al primer mensaje', timestamp: '2024-01-01 10:05' }
        ]
    },
    2: {
        title: 'Tema del Foro 2',
        messages: [
            { user: 'Usuario3', message: 'Iniciando nueva discusión', timestamp: '2024-01-02 15:00' }
        ]
    }
};

function openForum(forumId) {
    currentForumId = forumId;
    const forum = forumData[forumId];
    document.getElementById('forum-title').textContent = forum.title;
    updateForumMessages();
    openModal('forum-modal');
}

function updateForumMessages() {
    const messagesContainer = document.getElementById('forum-messages');
    const forum = forumData[currentForumId];

    messagesContainer.innerHTML = forum.messages.map(msg => `
        <div class="forum-message">
            <div class="message-header">
                <span class="user">${msg.user}</span>
                <span class="timestamp">${msg.timestamp}</span>
            </div>
            <div class="message-content">${msg.message}</div>
        </div>
    `).join('');
}

function sendMessage() {
    const textarea = document.querySelector('.message-input textarea');
    const message = textarea.value.trim();

    if (message && currentForumId) {
        const newMessage = {
            user: 'Usuario Actual', // Esto debería venir de un sistema de autenticación
            message: message,
            timestamp: new Date().toLocaleString()
        };

        forumData[currentForumId].messages.push(newMessage);
        updateForumMessages();
        textarea.value = '';
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Manejo de clics fuera de los modales
    window.addEventListener('click', (e) => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });

    // Inicializar la página principal
    showPage('main-page');
});

// Animaciones para campos de entrada
document.querySelectorAll('.input-group input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });

    input.addEventListener('input', function() {
        this.parentElement.classList.toggle('has-text', this.value.length > 0);
    });
});