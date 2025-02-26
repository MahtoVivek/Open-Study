// Loader functionality
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    const container = document.querySelector('.container');
    
    setTimeout(() => {
        loader.classList.add('hidden');
        container.classList.add('loaded');
    }, 2000);
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Button click animation
document.querySelectorAll('.btn, .telegram-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// Dynamic admission quotes
const quotes = [
    "Continue your education by enrolling in NIOS and turn your dreams into reality!",
    "Unlock your future with NIOS admission today!",
    "Education is the key – start your journey with NIOS!",
    "Your second chance at success begins with NIOS!",
    "Empower yourself with NIOS – admissions open now!"
];

const quoteElement = document.querySelector('.quote');
let currentQuoteIndex = 0;

function changeQuote() {
    quoteElement.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

changeQuote();
setInterval(changeQuote, 3000);