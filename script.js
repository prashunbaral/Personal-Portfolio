// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let submit = document.querySelector('.contact form .btn');
let submitted = document.querySelector('.contact .submitted');
const form = document.querySelector('form');


form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    const input = document.querySelector('.input-field input');
    
    if (input.value.length === 0) {
        submitted.textContent = "Please fill out all the fields.";
    } else {
        submitted.textContent = "Thank you. We will get back to you soon.";
    }
});

menuIcon.onclick = () => {
  // Toggle the "active" class on both the menu icon and navbar
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      //activate navbar links
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
      // Add the "active" class to the current section for animation
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }
  });

  // Sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.add('active');

  // Animation footer on scroll
  let footer = document.querySelector('footer');
  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};
