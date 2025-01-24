// header

const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});



// slide show 
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = dots.length;

const updateSlider = (index) => {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
};

const showNextSlide = () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider(currentIndex);
};

dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    currentIndex = parseInt(e.target.dataset.index);
    updateSlider(currentIndex);
  });
});

setInterval(showNextSlide, 5000); // Rotate every 5 seconds


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