
/* ========================================
   ALL ARTICLE SECTIONS
======================================== */

const sections = document.querySelectorAll(".article-section");


/* ========================================
   SECTION REVEAL ON SCROLL
======================================== */

function revealOnScroll() {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            section.classList.add("visible");
        }

    });

}


/* ========================================
   IMAGE OPACITY
======================================== */

const images = document.querySelectorAll(".article-image");

images.forEach(image => {

    image.addEventListener("mouseenter", () => {
        image.classList.add("revealed");
    });

});


/* ========================================
   ACTIVE NAVIGATION
======================================== */

const navMarkers = document.querySelectorAll(
    '.section-nav a[href^="#"]'
);

function updateActiveNav() {

    const readingPosition = window.innerHeight * 0.4;

    let currentSection = sections[0];

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= readingPosition) {
            currentSection = section;
        }

    });

    navMarkers.forEach(marker => {

        marker.classList.remove("active");

        if (
            marker.getAttribute("href") === "#" + currentSection.id
        ) {
            marker.classList.add("active");
        }

    });

}


/* ========================================
   SCROLL AND RESIZE EVENTS
======================================== */

function updatePage() {

    revealOnScroll();
    updateActiveNav();

}

window.addEventListener("scroll", updatePage);
window.addEventListener("resize", updatePage);

updatePage();
