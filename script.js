// Snow Animation
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';
    
    // Random size between 0.5em and 1.5em
    const size = Math.random() * 1 + 0.5;
    snowflake.style.fontSize = size + 'em';
    
    // Random starting position
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.top = '-10px';
    
    // Random animation duration between 5 and 15 seconds
    const duration = Math.random() * 10 + 5;
    snowflake.style.animationDuration = duration + 's';
    
    // Random animation delay
    snowflake.style.animationDelay = Math.random() * 2 + 's';
    
    // Random opacity
    snowflake.style.opacity = Math.random() * 0.5 + 0.5;
    
    document.getElementById('snow-container').appendChild(snowflake);
    
    // Remove snowflake after animation
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

// Create initial snowflakes
function initSnow() {
    const snowContainer = document.getElementById('snow-container');
    if (!snowContainer) return;
    
    // Detect mobile devices and reduce snowflake count for better performance
    const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const snowflakeCount = isMobile ? 20 : 50; // Reduced count on mobile
    const creationInterval = isMobile ? 800 : 500; // Slower creation on mobile
    
    for (let i = 0; i < snowflakeCount; i++) {
        setTimeout(() => {
            createSnowflake();
        }, i * (isMobile ? 300 : 200)); // Stagger creation
    }
    
    // Continuously create new snowflakes (less frequently on mobile)
    setInterval(() => {
        createSnowflake();
    }, creationInterval);
}

// Payment button handlers
const paymentButtons = ['payment-button', 'hero-payment-button'];

paymentButtons.forEach(buttonId => {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', function() {
            // Replace this with your actual payment integration
            // Example: Stripe, PayPal, or your payment provider
            
            // For now, this is a placeholder
            const paymentUrl = 'https://your-payment-link.com'; // Replace with actual payment link
            
            // Uncomment the line below when you have your payment URL
            // window.open(paymentUrl, '_blank');
            
            // Temporary alert (remove when payment is integrated)
            alert('Интеграция платежа скоро будет добавлена! Пожалуйста, свяжитесь с нами для завершения покупки.');
            
            // Example integration code (uncomment and modify as needed):
            /*
            // Stripe example
            const stripe = Stripe('your-publishable-key');
            stripe.redirectToCheckout({
                sessionId: 'your-session-id'
            });
            
            // Or PayPal example
            // window.location.href = 'your-paypal-link';
            
            // Or custom payment modal
            // showPaymentModal();
            */
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.story-content, .meeting-content, .bonus-card, .cta-content').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Initialize snow animation when page loads
window.addEventListener('DOMContentLoaded', () => {
    initSnow();
});

// Add parallax effect to background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const streetBackground = document.querySelector('.street-background');
    if (streetBackground) {
        streetBackground.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add more dynamic window flickering
setInterval(() => {
    const windows = document.querySelectorAll('.window');
    windows.forEach(window => {
        if (Math.random() > 0.7) {
            window.style.animation = 'none';
            setTimeout(() => {
                window.style.animation = '';
            }, 100);
        }
    });
}, 2000);

