/**
 * Portfolio Website JavaScript for Mrs. Swati Shekhar
 * Handles all interactive functionality including navigation, portfolio filtering,
 * FAQ accordion, smooth scrolling, and form submission.
 */

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileNavigation();
    initPortfolioFilter();
    initFAQAccordion();
    initSmoothScrolling();
    initContactForm();
    initScrollAnimations();
    initNavbarScroll();
});

/**
 * Mobile Navigation Toggle
 * Handles hamburger menu functionality for mobile devices
 */
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

/**
 * Portfolio Filter Functionality
 * Filters portfolio items based on selected category
 */
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter portfolio items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

/**
 * FAQ Accordion Functionality
 * Handles expanding and collapsing FAQ items
 */
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

/**
 * Smooth Scrolling for Navigation Links
 * Provides smooth scrolling animation when clicking navigation links
 */
function initSmoothScrolling() {
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
            }
        });
    });
}

/**
 * Contact Form Handling
 * Handles form submission and validation
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Basic validation
            if (validateForm(formObject)) {
                // Show success message
                showNotification('Thank you! Your message has been sent successfully. I will get back to you soon.', 'success');
                this.reset();
            } else {
                showNotification('Please fill in all required fields correctly.', 'error');
            }
        });
    }
}

/**
 * Form Validation
 * Validates contact form fields
 * @param {Object} formData - Form data object
 * @returns {boolean} - Validation result
 */
function validateForm(formData) {
    const requiredFields = ['name', 'email', 'service', 'message'];
    
    for (let field of requiredFields) {
        if (!formData[field] || formData[field].trim() === '') {
            return false;
        }
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        return false;
    }
    
    return true;
}

/**
 * Show Notification
 * Displays success or error messages to the user
 * @param {string} message - Message to display
 * @param {string} type - Type of notification ('success' or 'error')
 */
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

/**
 * Scroll Animations
 * Adds animation classes to elements when they come into view
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.experience-card, .service-card, .testimonial-card, .skill-category, .timeline-item');
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Navbar Scroll Effect
 * Changes navbar appearance on scroll
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

/**
 * Portfolio Image Modal
 * Opens portfolio images in a modal view (for future enhancement)
 */
function initPortfolioModal() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            // This can be enhanced to show a modal with larger image
            // For now, it just logs the click
            console.log('Portfolio item clicked:', this.querySelector('h3').textContent);
        });
    });
}

/**
 * Testimonials Auto-slide
 * Automatically cycles through testimonials (for future enhancement)
 */
function initTestimonialsSlider() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.opacity = i === index ? '1' : '0.5';
            testimonial.style.transform = i === index ? 'scale(1)' : 'scale(0.95)';
        });
    }
    
    // Auto-advance testimonials every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 5000);
}

/**
 * Skills Animation
 * Animates skill tags on hover
 */
function initSkillsAnimation() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

/**
 * Service Card Hover Effects
 * Enhances service card interactions
 */
function initServiceCardEffects() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

/**
 * Statistics Counter Animation
 * Animates statistics numbers on scroll
 */
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-item h3');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = parseInt(target.textContent);
                animateCounter(target, 0, finalNumber, 2000);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

/**
 * Animate Counter
 * Animates number counting effect
 * @param {HTMLElement} element - Element to animate
 * @param {number} start - Starting number
 * @param {number} end - Ending number
 * @param {number} duration - Animation duration in milliseconds
 */
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current + (element.textContent.includes('+') ? '+' : '') + 
                            (element.textContent.includes('%') ? '%' : '');
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

/**
 * Social Media Link Handler
 * Handles social media link clicks
 */
function initSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the platform from the icon class
            const icon = this.querySelector('i');
            const platform = icon.className.includes('linkedin') ? 'LinkedIn' :
                           icon.className.includes('instagram') ? 'Instagram' :
                           icon.className.includes('facebook') ? 'Facebook' :
                           icon.className.includes('whatsapp') ? 'WhatsApp' : 'Social Media';
            
            // Show message (replace with actual social media URLs)
            showNotification(`Redirecting to ${platform} profile...`, 'success');
            
            // In a real implementation, you would redirect to the actual social media profile
            // window.open(this.href, '_blank');
        });
    });
}

/**
 * Initialize Additional Features
 * Calls additional initialization functions
 */
function initAdditionalFeatures() {
    initPortfolioModal();
    initTestimonialsSlider();
    initSkillsAnimation();
    initServiceCardEffects();
    initStatsCounter();
    initSocialLinks();
}

// Initialize additional features after a short delay
setTimeout(initAdditionalFeatures, 1000);

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: 1rem;
    }
    
    .experience-card,
    .service-card,
    .testimonial-card,
    .skill-category,
    .timeline-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .experience-card.animate-in,
    .service-card.animate-in,
    .testimonial-card.animate-in,
    .skill-category.animate-in,
    .timeline-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(style);
