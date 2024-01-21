const carouselItems = document.querySelectorAll('.carousel2');
let currentIndex = 0;

function showSlide(index) {
    // Hide all carousel items
    carouselItems.forEach(item => {
        item.style.display = 'none';
    });

    // Show the slide at the specified index
    carouselItems[index].style.display = 'block';
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
