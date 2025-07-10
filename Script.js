const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("active");

  // Change icon based on menu state
  hamburger.innerHTML = isOpen ? "✕" : "☰";

  // Disable scroll when menu is open
  document.body.style.overflow = isOpen ? "hidden" : "";
});

// Close menu when any menu item is clicked
mobileMenu.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburger.innerHTML = "☰";
    document.body.style.overflow = "";
  });
});

// Close menu when "Contact Now" in mobile is clicked
mobileMenu
  .querySelector(".mobile-menu-button button")
  .addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburger.innerHTML = "☰";
    document.body.style.overflow = "";
  });

// Click outside to close
document.addEventListener("click", (e) => {
  if (
    mobileMenu.classList.contains("active") &&
    !mobileMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    mobileMenu.classList.remove("active");
    hamburger.innerHTML = "☰";
    document.body.style.overflow = "";
  }
});

// Escape key to close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active");
    hamburger.innerHTML = "☰";
    document.body.style.overflow = "";
  }
});
