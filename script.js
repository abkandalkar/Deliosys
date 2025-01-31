// header

const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});



// slide show 
let currentSlide = 0;
const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
const navCircles = document.querySelectorAll(".nav-circle");

function showSlide(index) {
  if (index >= slideCount) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slideCount - 1;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100;
  slides.style.transform = `translateX(${offset}%)`;

  navCircles.forEach((circle, idx) => {
    circle.classList.toggle("active", idx === currentSlide);
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function autoSlide() {
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

navCircles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    showSlide(index);
  });
});

autoSlide(); // Start automatic sliding


// FAQ
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("mouseover", () => {
    const answer = question.nextElementSibling;

    // Close other answers
    document.querySelectorAll(".faq-answer").forEach((a) => {
      if (a !== answer) {
        a.classList.remove("open");
        a.classList.add("closed");
      }
    });

    // Toggle current answer
    if (answer.classList.contains("open")) {
      answer.classList.remove("open");
      answer.classList.add("closed");
    } else {
      answer.classList.remove("closed");
      answer.classList.add("open");
    }
  });
});


//Tab section

function openPage(evt, pageName) {
  var i, tabcontent, tablinks;

  // Hide all tab contents
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove "active" class from all buttons
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the clicked page content and add "active" class to the clicked button
  document.getElementById(pageName).style.display = "flex";
  evt.currentTarget.classList.add("active");
}

// Show the first page by default
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tablinks").click();
});


// Testimonials
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex_t = 0;

const showTestimonial = (index) => {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
};

document.getElementById('prev').addEventListener('click', () => {
  currentIndex_t = (currentIndex_t - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex_t);
});

document.getElementById('next').addEventListener('click', () => {
  currentIndex_t = (currentIndex_t + 1) % testimonials.length;
  showTestimonial(currentIndex_t);
});

setInterval(() => {
  currentIndex_t = (currentIndex_t + 1) % testimonials.length;
  showTestimonial(currentIndex_t);
}, 5000);



