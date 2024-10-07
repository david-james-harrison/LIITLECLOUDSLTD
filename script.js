// JavaScript for Little Clouds Web Design

// 1. Form Validation
document.querySelector('.contact__form').addEventListener('submit', function (event) {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  let isValid = true;

  // Clear previous errors
  document.querySelectorAll('.contact__control input, .contact__control textarea').forEach(input => {
    input.classList.remove('invalid');
  });

  // Name validation
  if (name.value.trim() === "") {
    isValid = false;
    name.classList.add('invalid');
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value.trim())) {
    isValid = false;
    email.classList.add('invalid');
  }

  // Message validation
  if (message.value.trim() === "") {
    isValid = false;
    message.classList.add('invalid');
  }

  // Prevent form submission if invalid
  if (!isValid) {
    event.preventDefault();
    alert("Please fill out the form correctly.");
  }
});

// 2. Smooth Scrolling to Contact Section
document.querySelector('.hero__contact').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

// 3. Update Footer Year Dynamically
const yearElement = document.querySelector('.header__home');
const currentYear = new Date().getFullYear();
yearElement.innerHTML = `Little Clouds &copy; ${currentYear} <span class="visually-hidden">(to home page)</span>`;
