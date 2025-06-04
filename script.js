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

// Smoothed Parallax Scrolling
const parallax = document.querySelector('.parallax-bg');
let scrollPosition = 0;
let currentOffset = 0;

function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

function updateParallax() {
  scrollPosition = window.scrollY;
  currentOffset = lerp(currentOffset, scrollPosition, 0.1);
  if (parallax) {
    parallax.style.transform = `translateY(${currentOffset * 0.3}px)`;
  }
  requestAnimationFrame(updateParallax);
}

requestAnimationFrame(updateParallax);
