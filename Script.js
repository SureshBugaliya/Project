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

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const isExpanded = header.getAttribute("aria-expanded") === "true";
    const content = header.nextElementSibling;

    // Toggle aria-expanded state
    header.setAttribute("aria-expanded", !isExpanded);

    // Toggle content visibility
    if (!isExpanded) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0";
    }
  });
});

document
  .querySelectorAll(".contact-form input, .contact-form textarea")
  .forEach((input) => {
    input.addEventListener("focus", () => {
      input.placeholder = "";
    });
    input.addEventListener("blur", () => {
      if (!input.value) {
        input.placeholder =
          input.getAttribute("data-placeholder") ||
          input.getAttribute("placeholder");
      }
    });
  });
