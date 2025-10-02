document.addEventListener('DOMContentLoaded', () => {

    // --- Parallax Effect on Hero Background ---
    const parallaxBg = document.getElementById('parallax-bg');

    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        // Adjust the '0.5' value to change the parallax speed
        parallaxBg.style.transform = `translateY(${offset * 0.5}px)`;
    });


    // --- Intersection Observer for On-Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in the viewport, add the 'is-visible' class
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe each element with the 'animate-on-scroll' class
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // --- 🎃 Countdown Timer ---
const targetDate = new Date("Oct 31, 2025 00:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        const countdownEl = document.getElementById("countdown");
        if (countdownEl) countdownEl.innerHTML = "👻 Happy Halloween!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (document.getElementById("days")) {
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }
};

updateCountdown();
setInterval(updateCountdown, 1000);


});