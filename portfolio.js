document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopButton = document.getElementById('scroll-to-top');

  // Function to toggle button visibility
  const toggleScrollButton = () => {
    const scrollTop = document.documentElement.scrollTop;
    scrollToTopButton.style.display = scrollTop > 100 ? 'block' : 'none';
  };

  // Initial check for button visibility
  toggleScrollButton();

  // Add scroll event listener without debounce
  window.addEventListener('scroll', toggleScrollButton);

  // Add click event listener for smooth scrolling to top
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});