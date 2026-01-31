/**
 * AI & Big Data Engineer Portfolio
 * Main JavaScript File
 */

(function() {
    'use strict';

    // ============================================
    // DOM Elements
    // ============================================
    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('navMenu');
    const mobileToggle = document.getElementById('mobileToggle');
    const themeToggle = document.getElementById('themeToggle');
    const typewriter = document.getElementById('typewriter');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const skillItems = document.querySelectorAll('.skill-item');
    const statNumbers = document.querySelectorAll('.stat-number');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const contactForm = document.getElementById('contactForm');

    // ============================================
    // Theme Toggle
    // ============================================
    function initTheme() {
        // Check localStorage or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else if (systemPrefersDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    // ============================================
    // Navbar Scroll Effect
    // ============================================
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // ============================================
    // Mobile Menu Toggle
    // ============================================
    function toggleMobileMenu() {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }

    // ============================================
    // Active Navigation Link
    // ============================================
    function setActiveNavLink() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ============================================
    // Typewriter Effect
    // ============================================
    const typewriterTexts = [
        'AI 解决方案架构师',
        '大数据平台工程师',
        '机器学习专家',
        '云原生架构师'
    ];
    let typewriterIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typewriterDelay = 100;

    function typeWriter() {
        const currentText = typewriterTexts[typewriterIndex];
        
        if (isDeleting) {
            typewriter.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typewriterDelay = 50;
        } else {
            typewriter.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typewriterDelay = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typewriterDelay = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            typewriterIndex = (typewriterIndex + 1) % typewriterTexts.length;
            typewriterDelay = 500; // Pause before typing
        }
        
        setTimeout(typeWriter, typewriterDelay);
    }

    // ============================================
    // Scroll Animations (Intersection Observer)
    // ============================================
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate skill bars
                    if (entry.target.classList.contains('skill-item')) {
                        const level = entry.target.dataset.level;
                        const progress = entry.target.querySelector('.skill-progress');
                        if (progress) {
                            setTimeout(() => {
                                progress.style.width = `${level}%`;
                            }, 200);
                        }
                    }
                    
                    // Animate stat numbers
                    if (entry.target.classList.contains('stat-item') || 
                        entry.target.querySelector('.stat-number')) {
                        animateCounter(entry.target.querySelector('.stat-number'));
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.section-header, .about-card, .skill-category, ' +
            '.project-card, .timeline-item, .contact-item, .skill-item').forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });

        // Observe stat numbers specifically
        document.querySelectorAll('.stat-item').forEach(el => {
            observer.observe(el);
        });
    }

    // ============================================
    // Counter Animation
    // ============================================
    function animateCounter(element) {
        if (!element) return;
        
        const target = parseInt(element.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const counter = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target;
                clearInterval(counter);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // ============================================
    // Project Filter
    // ============================================
    function initProjectFilter() {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.dataset.filter;
                
                // Filter projects
                projectCards.forEach(card => {
                    const category = card.dataset.category;
                    
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // ============================================
    // Smooth Scroll
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    // Close mobile menu if open
                    if (navMenu.classList.contains('active')) {
                        toggleMobileMenu();
                    }
                    
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ============================================
    // Contact Form
    // ============================================
    function initContactForm() {
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show success message (in real app, send to server)
            showNotification('消息已发送！我会尽快回复您。', 'success');
            
            // Reset form
            this.reset();
        });
    }

    function showNotification(message, type = 'success') {
        // Remove existing notifications
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-left: 4px solid ${type === 'success' ? '#10b981' : '#ef4444'};
            padding: 16px 24px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 12px;
            box-shadow: 0 10px 30px var(--shadow-color);
            z-index: 9999;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // ============================================
    // Parallax Effect for Hero Orbs
    // ============================================
    function initParallax() {
        const orbs = document.querySelectorAll('.gradient-orb');
        
        if (window.matchMedia('(pointer: coarse)').matches) return; // Skip on mobile
        
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 20;
                const xOffset = (0.5 - x) * speed;
                const yOffset = (0.5 - y) * speed;
                
                orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        });
    }

    // ============================================
    // Preloader
    // ============================================
    function initPreloader() {
        const preloader = document.createElement('div');
        preloader.className = 'preloader';
        preloader.innerHTML = '<div class="preloader-spinner"></div>';
        preloader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--bg-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        `;
        
        const spinner = preloader.querySelector('.preloader-spinner');
        spinner.style.cssText = `
            width: 50px;
            height: 50px;
            border: 3px solid var(--border-color);
            border-top-color: var(--accent-primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        `;
        
        document.body.appendChild(preloader);
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
                setTimeout(() => preloader.remove(), 500);
            }, 500);
        });
    }

    // ============================================
    // Add CSS Animation Keyframes
    // ============================================
    function addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateX(100%);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            @keyframes slideOut {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100%);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ============================================
    // Initialize
    // ============================================
    function init() {
        // Initialize theme
        initTheme();
        
        // Add animation styles
        addAnimationStyles();
        
        // Event listeners
        window.addEventListener('scroll', () => {
            handleNavbarScroll();
            setActiveNavLink();
        });
        
        themeToggle.addEventListener('click', toggleTheme);
        mobileToggle.addEventListener('click', toggleMobileMenu);
        
        // Initialize features
        initSmoothScroll();
        initScrollAnimations();
        initProjectFilter();
        initContactForm();
        initParallax();
        initPreloader();
        
        // Start typewriter
        if (typewriter) {
            setTimeout(typeWriter, 1000);
        }
        
        // Initial navbar check
        handleNavbarScroll();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
