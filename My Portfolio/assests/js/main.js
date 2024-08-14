/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// Function to handle menu link clicks
function handleMenuClick(event) {
  // Prevent the default link behavior
  event.preventDefault();
  
  // Get the target section from the link's href attribute
  var targetId = this.getAttribute('href').substring(1);
  var targetSection = document.getElementById(targetId);

  // Scroll to the target section
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Close the menu
  document.getElementById("myNavMenu").className = "nav-menu";
}

// Attach event listeners to menu links
document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', handleMenuClick);
});


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: [" Software Engineer ", " Web Developer "],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })


/* -- PROJECT BOX -- */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.project-container');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const scrollAmount = 320; // Adjust based on the width of your project boxes and gap

  leftArrow.addEventListener('click', () => {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  const projectBoxes = document.querySelectorAll('.project-box');
  projectBoxes.forEach(box => {
      const btn = box.querySelector('.btn');
      btn.addEventListener('click', (e) => {
          e.preventDefault();
          const title = box.getAttribute('data-title');
          const image = box.getAttribute('data-image');
          const description = box.getAttribute('data-description');
          const linkedin = box.getAttribute('data-linkedin');
          const github = box.getAttribute('data-github');
          const url = `Projects-more.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}&linkedin=${encodeURIComponent(linkedin)}&github=${encodeURIComponent(github)}`;
          window.location.href = url;
      });
  });
});

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    } else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

/* -- EMAIL -- */

function sendMail() {
  // Get form input values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Basic validation
  if (!name || !email || !message) {
    alert("All fields are required!");
    return;
  }

  // Email format validation (simple regex)
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  // Parameters for emailjs
  let params = {
    name: name,
    email: email,
    message: message,
  };

  // Send email
  emailjs.send("service_bypn5js", "template_wjikgmb", params)
    .then(function(res) {
      alert("Email Sent!!!" + res.status);

      // Reset form fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }, function(error) {
      alert("Failed to send email. Please try again later." + error.status);
    });
}


window.addEventListener('scroll', scrollActive)