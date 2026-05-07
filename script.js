const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = siteNav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            siteNav.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (event) => {
        const emailField = contactForm.querySelector('#email');
        const messageField = contactForm.querySelector('#message');
        const emailValue = emailField ? emailField.value.trim() : '';
        const messageValue = messageField ? messageField.value.trim() : '';

        if (!emailValue || !messageValue) {
            event.preventDefault();
            formStatus.textContent = 'Please complete all required fields.';
            return;
        }

        formStatus.textContent = 'Sending...';

        const action = contactForm.getAttribute('action') || '';
        if (action.includes('your-form-id')) {
            event.preventDefault();
            formStatus.textContent = 'Set your Formspree form ID in contact.html to enable submissions.';
        }
    });
}
