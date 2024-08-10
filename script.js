document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    gsap.fromTo("#logo", 
        { y: "50vh", opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power2.out" }
    );

    gsap.fromTo(".hero-image", 
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
    );

    // Parallax effect for hero image
    gsap.to(".hero-image", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Fade out logo on scroll
    ScrollTrigger.create({
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
            gsap.to("#logo", { opacity: 1 - self.progress });
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-minecraft');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
});