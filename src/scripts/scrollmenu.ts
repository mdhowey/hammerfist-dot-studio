// Smooth scrolling for menu links
const pageLinks = document.querySelectorAll(".ud-menu-scroll");

// Section menu active class toggle
function onScroll() {
  const sections = document.querySelectorAll(".ud-menu-scroll");
  const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

  sections.forEach((currLink) => {
    const refElement = document.querySelector(currLink.getAttribute("href"));
    if (refElement) {
      const offsetTop = refElement.offsetTop;
      const offsetHeight = refElement.offsetHeight;
      if (scrollPos >= offsetTop - 73 && scrollPos < offsetTop + offsetHeight) {
        document.querySelector(".ud-menu-scroll.active")?.classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  });
}

window.addEventListener("scroll", onScroll);

// Initial call to set the active link on page load
document.addEventListener("DOMContentLoaded", onScroll);
