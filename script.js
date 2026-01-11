// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close other open FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileNav = document.querySelector('.nav-links');
                if (mobileNav && mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    document.querySelector('.nav-toggle').classList.remove('active');
                }
            }
        });
    });
});

// Navbar Background on Scroll
function updateNavbarStyle() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (window.scrollY > 50) {
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    } else {
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = 'none';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
}

window.addEventListener('scroll', updateNavbarStyle);

// Intersection Observer for Animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .pricing-card, .support-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Dark Mode Detection and Toggle
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
    // Initialize navbar style after theme is set
    setTimeout(() => updateNavbarStyle(), 0);
    
    // Toggle dark mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update navbar style when theme changes
            updateNavbarStyle();
        });
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateNavbarStyle();
        }
    });
});

// Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('betaModal');
    const closeModal = document.getElementById('closeModal');
    const downloadButtons = document.querySelectorAll('.download-button, .pricing-cta');
    const betaForm = document.getElementById('betaForm');
    
    // Open modal when download buttons are clicked
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.classList.contains('download-button') || this.textContent.includes('Download')) {
                openModal();
            } else if (this.textContent.includes('Pro') || this.textContent.includes('Ultra')) {
                openModal();
            }
        });
    });
    
    // Handle beta form submission
    if (betaForm) {
        betaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(betaForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const projectType = formData.get('projectType');
            const message = formData.get('message');
            
            // Create email content
            const subject = 'Beta Access Request - Unfinished-Work';
            const body = `Hi Unfinished-Work team,

I'd like to request beta access to your app.

Name: ${name}
Email: ${email}
Project Type: ${projectType || 'Not specified'}
Message: ${message || 'No additional message'}

I'm excited to try Unfinished-Work and help shape the future of AI-powered project collaboration!

Best regards,
${name}`;

            // Open email client with pre-filled content
            const mailtoLink = `mailto:support@unfinished-work.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(mailtoLink);
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            betaForm.reset();
        });
    }
    
    // Close modal when close button is clicked
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunction);
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModalFunction();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModalFunction();
        }
    });
    
    function openModal() {
        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeModalFunction() {
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    }
    
    function showSuccessMessage() {
        // Create success message element
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.innerHTML = `
            <div class="success-content">
                <div class="success-icon">✅</div>
                <h4>Beta Request Sent!</h4>
                <p>We've opened your email app with a pre-filled message. Just hit send and we'll get back to you within 24 hours!</p>
                <button class="success-close">Got it!</button>
            </div>
        `;
        
        // Add to page
        document.body.appendChild(successMsg);
        
        // Show with animation
        setTimeout(() => successMsg.classList.add('show'), 100);
        
        // Handle close button
        const closeBtn = successMsg.querySelector('.success-close');
        closeBtn.addEventListener('click', () => {
            successMsg.classList.remove('show');
            setTimeout(() => successMsg.remove(), 300);
        });
    }
});

// Contact Form Handler (if you add one later)
document.addEventListener('DOMContentLoaded', function() {
    const contactLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // You can add analytics tracking here later
            console.log('Contact link clicked:', this.href);
        });
    });
});

// Add loading animation for better UX
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Dynamic copyright year (minimum 2025)
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const minYear = 2025;
    const copyrightYear = Math.max(currentYear, minYear);
    
    const copyrightElement = document.getElementById('copyrightYear');
    if (copyrightElement) {
        copyrightElement.textContent = copyrightYear;
    }
});

// Add CSS for mobile nav active state
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border-top: 1px solid var(--border-color);
            padding: 1rem;
            flex-direction: column;
            gap: 1rem;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
    
    .loaded .hero-title,
    .loaded .hero-subtitle,
    .loaded .hero-cta {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    .loaded .hero-title { animation-delay: 0.2s; }
    .loaded .hero-subtitle { animation-delay: 0.4s; }
    .loaded .hero-cta { animation-delay: 0.6s; }
    
    .hero-title,
    .hero-subtitle,
    .hero-cta {
        opacity: 0;
        transform: translateY(30px);
    }
`;
document.head.appendChild(style);

// Beta Feedback Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const betaFeedbackForm = document.getElementById('betaFeedbackForm');
    if (betaFeedbackForm) {
        betaFeedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleBetaFeedback();
        });
    }
});

function handleBetaFeedback() {
    const form = document.getElementById('betaFeedbackForm');
    const formData = new FormData(form);
    
    // Get form values
    const name = formData.get('name');
    const email = formData.get('email');
    const type = formData.get('type');
    const location = formData.get('location');
    const description = formData.get('description');
    const device = formData.get('device');
    
    // Create email content
    const subject = `Beta Feedback: ${type} - ${name}`;
    const body = `Beta Feedback Report

Name: ${name}
Email: ${email}
Feedback Type: ${type}
Location in App: ${location}
Device & iOS: ${device}

Description:
${description}

---
Sent from Unfinished-Work Support Page`;

    // Open email client
    const mailtoLink = `mailto:support@unfinished-work.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    // Show success message
    showFeedbackSuccess();
    
    // Reset form
    form.reset();
}

function showFeedbackSuccess() {
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.innerHTML = `
        <div class="success-content">
            <div class="success-icon">✅</div>
            <h4>Feedback Submitted!</h4>
            <p>Thank you for helping improve Unfinished-Work! We've opened your email app with a pre-filled message. Just hit send and we'll review your feedback.</p>
            <button class="success-close">Got it!</button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(successMsg);
    
    // Show with animation
    setTimeout(() => successMsg.classList.add('show'), 100);
    
    // Handle close button
    const closeBtn = successMsg.querySelector('.success-close');
    closeBtn.addEventListener('click', () => {
        successMsg.classList.remove('show');
        setTimeout(() => successMsg.remove(), 300);
    });
}
