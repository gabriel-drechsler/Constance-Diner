// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Intersection Observer für Menüanimationen
const items = document.querySelectorAll('.menu-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.3 // Trigger, wenn 30 % sichtbar
});

items.forEach(item => observer.observe(item));

// Parallax Effect (works on mobile too!)
window.addEventListener('scroll', function () {
  const parallax = document.querySelector('.parallax-bg');
  const scroll = window.scrollY;
  if (parallax) {
    parallax.style.transform = `translateY(${scroll * 0.3}px)`;
  }
});
