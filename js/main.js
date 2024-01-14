// sticky navbar & active link
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll('section:not(no-link');
const navbarLinks = navbar.querySelectorAll('ul li a');

function toggleSticky() {
  if (window.scrollY > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

function updateActiveLink() {
  const scrollPosition = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop) {
      // remove the open class from all links
      navbarLinks.forEach((link) => link.classList.remove('open'));

      // find the corresponding link and add the open class
      const activeLink = navbar.querySelector(`a[href="#${sectionId}"]`);

      if (activeLink) {
        activeLink.classList.add('open');
      }
    }
  });
}

function handleScrollAndResize() {
  toggleSticky();
  updateActiveLink();
}

// listen for scroll and resize events and call the handler function
window.addEventListener('scroll', handleScrollAndResize);
window.addEventListener('resize', handleScrollAndResize);

// initial call to set the initial state
handleScrollAndResize();

// About section tabs
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // hide all tab contents
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });

      // deactivate all tabs buttons
      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      const tabId = button.getAttribute("data-tab");
      const tabContent = document.getElementById(tabId);

      if (tabContent) {
        tabContent.classList.add("active");
        button.classList.add("active");
      }
    });
  });

  // open the first tab by default
  tabButtons[0].click();
})