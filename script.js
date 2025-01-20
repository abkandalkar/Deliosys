// header

function toggleMenu() {
    const mobileNav = document.getElementById("mobileNav");
    mobileNav.classList.toggle("active");
};


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