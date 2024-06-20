// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form Validation
  const form = document.querySelector('.contact-form form');
  
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector('textarea');
  
    if (nameInput.value.trim() === '') {
      alert('Please enter your name.');
      nameInput.focus();
      return;
    }
  
    if (emailInput.value.trim() === '') {
      alert('Please enter your email.');
      emailInput.focus();
      return;
    }
  
    if (messageInput.value.trim() === '') {
      alert('Please enter a message.');
      messageInput.focus();
      return;
    }
  
    // Form submission logic
    // You can add code here to send the form data to a server or handle it in some other way
    alert('Thank you for your message!');
    form.reset();
  });
  
  // Parallax Effect
  window.addEventListener('scroll', function () {
    const heroImage = document.querySelector('.hero-image img');
    const scrollPosition = window.pageYOffset;
  
    heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  });