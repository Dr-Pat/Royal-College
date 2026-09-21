(const testimonials = document.querySelectorAll('.testimonials .testimony');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Section is visible → add class to slide in
      entry.target.classList.add('show');
    } else {
      // Section scrolled past → remove class so it drops back
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2 // trigger when 20% of card is visible
});

cards.forEach(card => observer.observe(card));