// anime({
//     targets: '.hover-element',
//     scale: 1.0,
//     opacity: 0.8,
//     duration: 5000,
//     easing: 'easeOutQuad',
//     trigger: 'hover'
// });
var animatedText = document.getElementById('animatedText');
var textArray = ['Pester', 'Bother', 'Stress'];
var currentIndex = 0;
var charIndex = 0;

function typeText() {
    var currentText = textArray[currentIndex];
    var typeSpeed = 100; // Typing speed in milliseconds

    animatedText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex > currentText.length) {
        setTimeout(deleteText, 1000); // Pause before starting to delete
        return;
    }

    setTimeout(typeText, typeSpeed);
}

function deleteText() {
    var currentText = textArray[currentIndex];
    var typeSpeed = 100; // Typing speed in milliseconds

    animatedText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
        currentIndex = (currentIndex + 1) % textArray.length;

        // Stop the animation after displaying all three words
        if (currentIndex === 0) {
            animatedText.textContent = 'Pester';
            return;
        }

        setTimeout(typeText, 1000); // Pause before starting the next word
        return;
    }

    setTimeout(deleteText, typeSpeed);
}

typeText(); // Start the typing animation

// Get the animated element
document.addEventListener('DOMContentLoaded', function () {
    // Get the animated element
    const animatedElement = document.getElementById('animatedElement');

    // Function to handle the scroll event
    function handleScroll() {
        const scrollPosition = window.scrollY;
        const elementPosition = animatedElement.offsetTop;

        if (scrollPosition > elementPosition - window.innerHeight + 100) {
            // Add the 'visible' class to trigger the animation
            animatedElement.classList.add('visible');

            // Remove the scroll event listener after the animation has been triggered
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
});


document.addEventListener("DOMContentLoaded", function () {
    var element = document.getElementById("myElement");
    var triggered = false;

    window.addEventListener("scroll", function () {
        if (!triggered && isInViewport(element)) {
            element.classList.add("fade-in");
            triggered = true;
        }
    });

    // Helper function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});


// aos js
AOS.init();