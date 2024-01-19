const carouselItems = document.querySelectorAll(".carousel2");
let currentIndex = 0;

function showSlide(index) {
  // Hide all carousel items
  carouselItems.forEach((item) => {
    item.style.display = "none";
  });

  // Show the slide at the specified index
  carouselItems[index].style.display = "block";
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Set up event listeners for next and previous buttons
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", previousSlide);

function focusInput() {
  document.getElementById("searchInput").focus();
}

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var container = document.querySelector(".container1");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    container.style.marginTop = navbar.offsetHeight + "px";
  } else {
    navbar.classList.remove("sticky");
    container.style.marginTop = "0";
  }
}

let lastScrollTop = 0;
const navigation = document.querySelector(".first-navigation");
const mainNavigation = document.querySelector(".main-navigation");

window.addEventListener(
  "scroll",
  function () {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scrolling down
      navigation.classList.add("nav-hidden");
      navigation.classList.remove("nav-shown");
      mainNavigation.style.marginTop = "0px";
    } else {
      // Scrolling up
      navigation.classList.remove("nav-hidden");
      navigation.classList.add("nav-shown");
      mainNavigation.style.marginTop = "117px";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoids negative values
  },
  false
);
