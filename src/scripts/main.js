document.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (window.scrollY > 0) {
    header.classList.add('shadow-lg');
  } else {
    header.classList.remove('shadow-lg');
  }
});

