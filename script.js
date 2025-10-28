// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }
  
  // Animate statistics counter - ANIMAÇÃO RÁPIDA
  const statNumbers = document.querySelectorAll('.stat-number');
  
  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 800; // 0.8 seconds - MUITO MAIS RÁPIDO
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, 16);
  }
  
  // Intersection Observer for counter animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 }); // Dispara mais cedo
  
  statNumbers.forEach(number => {
    observer.observe(number);
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Adjust for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add scroll effect to navbar
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
      navbar.style.backdropFilter = 'blur(10px)';
    } else {
      navbar.style.backgroundColor = 'var(--dark-color)';
      navbar.style.backdropFilter = 'none';
    }
  });
});