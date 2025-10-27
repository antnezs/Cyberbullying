document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  // animações simples ao rolar
  const fadeEls = document.querySelectorAll('.card, section h2');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  fadeEls.forEach(el => observer.observe(el));
});
