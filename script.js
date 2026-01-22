if (document.querySelector(".swiper")) {
  const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "fade",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// Sticky navbar for all pages
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.classList.toggle("sticky", window.scrollY > 0);
  }
});

if (document.querySelector(".menu")) {
  let menu = document.querySelector(".menu");
  let nums = document.querySelectorAll(".num");
  let start = false;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= menu.offsetTop) {
      if (!start) {
        nums.forEach((num) => {
          startCount(num);
        });
      }
      start = true;
    }
  });
}

const startCount = (el) => {
  let max = parseInt(el.dataset.val);
  let count = setInterval(() => {
    el.textContent = parseInt(el.textContent) + 1;
    if (parseInt(el.textContent) === max) {
      clearInterval(count);
    }
  }, 2000 / nums.length);
};

// Hamburger menu toggle function
function toggleHamburgerMenu() {
  const navigation = document.querySelector('.navigation');
  const hamburger = document.querySelector('.hamburger');
  navigation.classList.toggle('active');
  hamburger.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', toggleHamburgerMenu);
});

// View Full Menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const viewMenuBtn = document.getElementById('view-menu-btn');
  const menuCategories = document.querySelector('.menu-categories');

  if (viewMenuBtn && menuCategories) {
    viewMenuBtn.addEventListener('click', function() {
      if (menuCategories.style.display === 'none' || menuCategories.style.display === '') {
        menuCategories.style.display = 'grid';
      } else {
        menuCategories.style.display = 'none';
      }
    });
  }
});
