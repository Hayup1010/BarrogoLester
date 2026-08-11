// =========================================
// SIMPLE PORTFOLIO JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // Add reveal animation when sections enter the screen

    const elements = document.querySelectorAll(
        "section, .project, .card, .certificate, .contact-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.1
        }
    );


    elements.forEach((element) => {

        element.classList.add("hidden");

        observer.observe(element);

    });


    // Update active navigation link

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 200;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    });

});
