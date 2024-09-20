// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 60, // Adjusts for sticky header height
      behavior: "smooth",
    });
  });
});

// Dark Mode Toggle
const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Dark Mode";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px 15px";
toggleButton.style.backgroundColor = "#333";
toggleButton.style.color = "#fff";
toggleButton.style.border = "none";
toggleButton.style.borderRadius = "5px";
toggleButton.style.cursor = "pointer";
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleButton.textContent = document.body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
});

// Scroll Animations for Sections
const sections = document.querySelectorAll("section");

const fadeInOnScroll = () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 150; // Adjust this for more or less trigger sensitivity

    if (sectionTop < triggerPoint) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
};

// Trigger animations on scroll and load
window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);

// Highlight the active navigation link based on scroll position
const highlightNavLink = () => {
  let scrollPosition = window.scrollY + 100; // Adjust to align with your content

  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= scrollPosition &&
      section.offsetTop + section.offsetHeight > scrollPosition
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

// Highlight nav links on scroll
window.addEventListener("scroll", highlightNavLink);
