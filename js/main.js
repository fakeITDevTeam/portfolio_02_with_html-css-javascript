// sticky navbar & active link
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll('section:not(no-link');
const navbarLinks = navbar.querySelectorAll('ul li a');

function toggleSticky() {
  var media = window.matchMedia("(min-width: 601px)");
  if (window.scrollY > 100 && media.matches) {
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

// Mobile navigation indicator start
const nav_list = document.querySelectorAll(".nav .list");

function activeLink() {
  nav_list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
nav_list.forEach((item) => item.addEventListener("click", activeLink));
// Mobile navigation indicator end

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
});


// portfolio
let list = document.querySelectorAll(".portfolio .list");
let item = document.querySelectorAll(".box");

for (let x = 0; x < list.length; x++) {
  list[x].addEventListener("click", function () {
    for (let y = 0; y < list.length; y++) {
      list[y].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let z = 0; z < item.length; z++) {
      item[z].classList.remove("active");
      item[z].classList.add("hide");

      if (item[z].getAttribute("data-item") == dataFilter || dataFilter == "all") {
        item[z].classList.remove("hide");
        item[z].classList.add("active");
      }
    }
  })
}

// testimonials

let userTexts = document.getElementsByClassName("user_text");
let userPics = document.getElementsByClassName("user_pic");

function Review() {
  for (userPic of userPics) {
    userPic.classList.remove("active");
  }
  for (userText of userTexts) {
    userText.classList.remove("active");
  }
  let k = Array.from(userPics).indexOf(event.target);
  // let k = Array.from(userPics).indexOf(EventTarget);
  userPics[k].classList.add("active");
  userTexts[k].classList.add("active");
}