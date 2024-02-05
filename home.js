document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel2');
    const dotsContainer = document.querySelector('.dot-container');
    let currentIndex = 0;

    // Create dots based on the number of slides
    for (let i = 0; i < carouselItems.length; i++) {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);

        // Add click event to each dot
        dot.addEventListener('click', function () {
            showSlide(i);
        });
    }

    function showSlide(index) {
        // Hide all carousel items
        carouselItems.forEach(item => {
            item.style.display = 'none';
        });

        // Show the slide at the specified index
        carouselItems[index].style.display = 'block';

        // Update the active dot
        updateActiveDot(index);
    }

    function updateActiveDot(index) {
        // Remove active class from all dots
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Add active class to the selected dot
        dots[index].classList.add('active');

        // Update currentIndex
        currentIndex = index;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }

    function previousSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentIndex);
    }

    // Show the first slide initially
    showSlide(currentIndex);

    // Set up event listeners for next and previous buttons
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', previousSlide);

    // Touch event handling for swipe gestures
    let touchStartX;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    document.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX;

        // Adjust the threshold as needed
        if (deltaX > 50) {
            // Swipe right
            previousSlide();
        } else if (deltaX < -50) {
            // Swipe left
            nextSlide();
        }
    });
});



function focusInput() {
    document.getElementById('searchInput').focus();
}

var prevScrollpos = window.pageYOffset;

var prevScrollpos = window.pageYOffset;

var navbar = document.getElementById("navbar");
var container = document.querySelector(".container1");
var sticky = navbar.offsetTop;

function myFunction() {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollpos) {
        // Scrolling down, hide the navbar
        navbar.style.top = `-${navbar.offsetHeight}px`;
    } else {
        // Scrolling up, show the navbar
        navbar.style.top = "0";
    }

    prevScrollpos = currentScrollPos;

    // Sticky functionality
    if (currentScrollPos >= sticky) {
        navbar.classList.add("sticky");
        container.style.marginTop = navbar.offsetHeight + "px";
    } else {
        navbar.classList.remove("sticky");
        container.style.marginTop = "0";
    }
}

window.onscroll = function() {
    myFunction();
};

var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');

// Toggle menu and overlay on burger menu click
burgerMenu.addEventListener('click', function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");

  // Update aria-expanded attribute dynamically
  var isExpanded = this.classList.contains("close");
  this.setAttribute("aria-expanded", isExpanded);
});

// Close menu when a link is clicked and content reloads
var menuLinks = document.querySelectorAll('#menu a');

menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    // Close the menu and overlay
    burgerMenu.classList.remove("close");
    overlay.classList.remove("overlay");

    // Update aria-expanded attribute dynamically
    burgerMenu.setAttribute("aria-expanded", "false");

    // You can add additional logic here for content reload if needed
  });
});

// Make #burger-menu focusable when the width is smaller than 800px
window.addEventListener('resize', function () {
  if (window.innerWidth < 800) {
    burgerMenu.setAttribute('tabindex', '0');
  } else {
    burgerMenu.removeAttribute('tabindex');
  }
});

// Initial check on page load
if (window.innerWidth < 800) {
  burgerMenu.setAttribute('tabindex', '0');
}