// script.js
document.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    const pos = section.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});

// Initial animation trigger
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
});
setTimeout(() => {
  document.querySelectorAll('section').forEach(section => {
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    section.style.opacity = 1;
    section.style.transform = 'translateY(0)';
  });
}, 100);

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
}); 
// Responsive menu toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('show');
});