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

});