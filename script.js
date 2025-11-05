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


// hamburger toggle
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-toggle');
if (menuBtn) {
    menuBtn.addEventListener('click', () => navbar.classList.toggle('open'));
    // close after clicking a link
    document.querySelectorAll('.nav-links a').forEach(a =>
        a.addEventListener('click', () => navbar.classList.remove('open'))
    );
}


// force-download resume (works on GitHub Pages & iOS)
function downloadResume(path, filename) {
    fetch(path).then(res => res.blob()).then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = filename;
        document.body.appendChild(a); a.click();
        a.remove(); URL.revokeObjectURL(url);
    }).catch(console.error);
}
const dl = document.getElementById('downloadBtn');
if (dl) dl.addEventListener('click', (e) => {
    e.preventDefault();
    downloadResume('Surabhi-Jeevansai.pdf', 'Surabhi-Jeevansai.pdf');
});
