// Contact form submission
function submitForm(event) {
  event.preventDefault();
  const name = document.querySelector('#contact input[type="text"]').value;
  const email = document.querySelector('#contact input[type="email"]').value;
  const message = document.querySelector('#contact textarea').value;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert(`Thanks, ${name}! Your message has been sent.`);

  // Clear fields
  document.querySelector('#contact form').reset();
}

// Scroll-to-top button logic
const mybutton = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
});

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Typing Animation (if you add in Hero)
const typedText = document.getElementById("typed-text");
const textArray = ["Full-Stack Developer", "Spring Boot Specialist", "Frontend Enthusiast"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = textArray[textIndex];

  if (isDeleting) {
    typedText.textContent = currentText.substring(0, charIndex--);
  } else {
    typedText.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeEffect, 200);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typedText) {
    typeEffect();
  }

  AOS.init({
    duration: 1000,
    once: true
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const skillSection = document.querySelector("#skills");
  const skillPercents = document.querySelectorAll(".skill-percent");
  const progressBars = document.querySelectorAll(".progress-bar");
  let animated = false;

  function animateSkills() {
    if (!animated && skillSection.getBoundingClientRect().top < window.innerHeight - 100) {
      skillPercents.forEach((percent, index) => {
        let target = parseInt(percent.getAttribute("data-percent"));
        let count = 0;
        let progressBar = progressBars[index];

        progressBar.style.width = target + "%"; // Animate bar

        let counter = setInterval(() => {
          if (count < target) {
            count++;
            percent.textContent = count + "%";
          } else {
            clearInterval(counter);
          }
        }, 15); // Speed of counter
      });
      animated = true;
    }
  }

  window.addEventListener("scroll", animateSkills);
});
