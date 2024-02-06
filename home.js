document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel2');
    const dotsContainer = document.querySelector('.dot-container');
    let currentIndex = 0;

    // add names to dots and add dots dinamically

    const slideLabels = ['First Slide', 'Second Slide', 'Third Slide', 'Fourth Slide']; // Add more labels as needed

    for (let i = 0; i < carouselItems.length; i++) {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
    
        // Add click event to each dot
        dot.addEventListener('click', function () {
            showSlide(i);
        });
    
        // Adding ARIA label to each dot
        if (slideLabels[i]) {
            dot.setAttribute('aria-label', slideLabels[i]); // Add ARIA label
        } else {
            dot.setAttribute('aria-label', `Slide ${i + 1}`); // Add ARIA label
        }
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

window.addEventListener('resize', function() {
    var prevButton = document.getElementById('prevBtn');
    var nextButton = document.getElementById('nextBtn');
    if (window.innerWidth <= 1365) {
        prevButton.tabIndex = -1;
        nextButton.tabIndex = -1;
    } else {
        prevButton.tabIndex = 0;
        nextButton.tabIndex = 0;
    }
});

// Set initial tabindex based on window width
window.onload = function() {
    var prevButton = document.getElementById('prevBtn');
    var nextButton = document.getElementById('nextBtn');
    if (window.innerWidth <= 1365) {
        prevButton.tabIndex = -1;
        nextButton.tabIndex = -1;
    } else {
        prevButton.tabIndex = 0;
        nextButton.tabIndex = 0;
    }
};



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

// Flag to track whether the menu is open
var isMenuOpen = false;

// Function to check window width and set tabindex accordingly
function setTabIndex() {
  if (window.innerWidth <= 801) {
    burgerMenu.setAttribute('tabindex', '0');
  } else {
    burgerMenu.removeAttribute('tabindex');
  }
}

// Toggle menu and overlay on burger menu click
burgerMenu.addEventListener('click', function () {
  toggleMenu();
});

// Close menu when a link is clicked
var menuLinks = document.querySelectorAll('#menu a');

menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    closeMenu();
  });
});

// Trap focus within the menu when it is open
overlay.addEventListener('keydown', function (event) {
  if (isMenuOpen && event.key === 'Tab') {
    var menuItems = overlay.querySelectorAll('a');
    if (event.shiftKey && document.activeElement === menuItems[0]) {
      event.preventDefault();
      burgerMenu.focus();
    } else if (!event.shiftKey && document.activeElement === menuItems[menuItems.length - 1]) {
      event.preventDefault();
      burgerMenu.focus();
    }
  }
});

// Make burger-menu focusable based on window width
setTabIndex();

// Handle keyboard events for burger-menu
burgerMenu.addEventListener('keydown', function(event) {
  if (event.key === 'Tab') {
    if (isMenuOpen) {
      var menuItems = overlay.querySelectorAll('a');
      if (event.shiftKey && document.activeElement === menuItems[0]) {
        event.preventDefault();
        burgerMenu.focus();
      } else if (!event.shiftKey && document.activeElement === menuItems[menuItems.length - 1]) {
        event.preventDefault();
        burgerMenu.focus();
      }
    } else {
      // If menu is closed and tab is pressed, allow default tab behavior
      return;
    }
  } else if (event.key === 'Enter' || event.key === ' ') {
    toggleMenu();
  }
});

// Toggle menu function
function toggleMenu() {
  burgerMenu.classList.toggle("close");
  overlay.classList.toggle("overlay");
  isMenuOpen = !isMenuOpen;
  burgerMenu.setAttribute("aria-expanded", isMenuOpen);
  if (isMenuOpen) {
    overlay.querySelector('li:first-child a').focus();
  }
}

// Close menu function
function closeMenu() {
  burgerMenu.classList.remove("close");
  overlay.classList.remove("overlay");
  isMenuOpen = false;
  burgerMenu.setAttribute("aria-expanded", "false");
  burgerMenu.focus();
}

// Event listener to check and set tabindex when window is resized
window.addEventListener('resize', setTabIndex);

function toggleMenu() {
    burgerMenu.classList.toggle("close");
    overlay.classList.toggle("overlay");
    isMenuOpen = !isMenuOpen;
    burgerMenu.setAttribute("aria-expanded", isMenuOpen);
    // Change the aria-label of burger-menu based on the menu state
    if (isMenuOpen) {
      burgerMenu.setAttribute("aria-label", "Close menu");
      overlay.querySelector('li:first-child a').focus();
    } else {
      burgerMenu.setAttribute("aria-label", "Menu");
      burgerMenu.focus();
    }
  }
  
  // Function to close the menu
  function closeMenu() {
    burgerMenu.classList.remove("close");
    overlay.classList.remove("overlay");
    isMenuOpen = false;
    burgerMenu.setAttribute("aria-expanded", "false");
    burgerMenu.setAttribute("aria-label", "Menu"); // Reset the aria-label when menu is closed
    burgerMenu.focus();
  }


