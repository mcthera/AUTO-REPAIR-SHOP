/* ==========================================
   THE BROTHERS AUTOMOBILE SERVICE - SCRIPT.JS
   Junior Developer Friendly Interactions
   ========================================== */

const WHATSAPP_NUMBER = '233591239746';

function openWhatsApp(message) {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// 1. Mobile Navigation Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// 2. Booking Modal Management
const bookingModal = document.getElementById('booking-modal');
const bookServiceSelect = document.getElementById('book-service');

function openBookingModal(serviceName = null) {
    if (bookingModal) {
        bookingModal.classList.remove('hidden');
        // If a specific service was clicked, pre-select it in the dropdown
        if (serviceName && bookServiceSelect) {
            bookServiceSelect.value = serviceName;
        }
    }
}

function closeBookingModal() {
    if (bookingModal) {
        bookingModal.classList.add('hidden');
    }
}

// Close modal when clicking outside of content
window.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
        closeBookingModal();
    }
});

// 3. Handle Booking Form Submission
function handleBookingSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('book-name').value.trim();
    const phone = document.getElementById('book-phone').value.trim();
    const service = document.getElementById('book-service').value;
    const date = document.getElementById('book-date').value;

    const message = `Hello The Brothers Automobile Service, I would like to book an appointment.\nName: ${name}\nPhone: ${phone}\nService: ${service}\nPreferred Date: ${date}`;

    openWhatsApp(message);
    closeBookingModal();
    event.target.reset();
}

// 4. Handle General Contact Form Submission
function handleContactSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.querySelector('input[type="text"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    const issue = form.querySelector('textarea').value.trim();

    const message = `Hello The Brothers Automobile Service, I need help with my car.\nName: ${name}\nPhone: ${phone}\nIssue: ${issue}`;

    openWhatsApp(message);
    form.reset();
}

// 5. Feature Suggestion Drawer Toggle
const featureDrawer = document.getElementById('feature-drawer');

function toggleFeatureDrawer() {
    if (featureDrawer) {
        featureDrawer.classList.toggle('translate-x-full');
    }
}