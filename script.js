// Gestión de Tema (Oscuro/Claro)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Verificar preferencia guardada
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        icon.classList.replace('fa-moon', 'fa-sun');
    }
}

themeToggle.addEventListener('click', () => {
    let theme = 'light';
    
    if (body.getAttribute('data-theme') !== 'dark') {
        body.setAttribute('data-theme', 'dark');
        theme = 'dark';
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        body.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
    
    // Persistencia en LocalStorage
    localStorage.setItem('theme', theme);
});

// Smooth Scroll para navegación (Refuerzo JS)
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Ajuste por la altura de la navbar
            behavior: 'smooth'
        });
    });
});

// Animación simple al hacer scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});