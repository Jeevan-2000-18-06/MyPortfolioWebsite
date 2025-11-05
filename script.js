// ========== Smooth Scroll + Active Navbar Highlight ==========

// Select all nav links
const navLinks = document.querySelectorAll(".nav-links a");

// Add click event for each nav link
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove("active"));
        // Add 'active' to clicked link
        this.classList.add("active");
    });
});

// ========== Highlight Menu on Scroll ==========
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
