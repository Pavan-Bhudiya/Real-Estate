const serviceSections = document.querySelectorAll(".service-section");

function revealSections() {
  serviceSections.forEach((section) => {
    if (isElementInViewport(section)) {
      section.classList.add("show");
    }
  });
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener("scroll", revealSections);
document.addEventListener("DOMContentLoaded", revealSections);
