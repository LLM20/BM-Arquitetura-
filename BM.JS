AOS.init();

// ===== Menu fixo com efeito =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== Filtro Portfólio =====
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');
    const category = btn.getAttribute('data-category');

    portfolioItems.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
      }
    });
  });
});

