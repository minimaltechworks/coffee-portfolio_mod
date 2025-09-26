// Critical JavaScript - Above the fold functionality
(function() {
    'use strict';
    
    // Mobile menu toggle
    function initCriticalNavigation() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }
    }
    
    // Smooth scrolling for anchor links
    function initCriticalScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 70;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Initialize critical functions
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initCriticalNavigation();
            initCriticalScrolling();
        });
    } else {
        initCriticalNavigation();
        initCriticalScrolling();
    }
})();
