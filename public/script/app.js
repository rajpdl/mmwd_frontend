window.onload = () => {
  const navigation = () => {
    const burger = document.querySelector(".burger"),
      navLinks = document.querySelector(".nav-links"),
      linkLists = document.querySelectorAll(".nav-links li"),
      links = document.querySelectorAll(".nav-links li a");

    burger.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
      linkLists.forEach((link, i) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinksFadeIn 0.5s ease-in-out forwards 0s`;
        }
      });
      burger.classList.toggle("burger-icon");
    });
    links.forEach((link, i) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("nav-active");
        burger.classList.remove("burger-icon");
      });
    });
  };
  const dropdown = () => {
    const dropdown = document.querySelector(".dropdown"),
      dropdownLinks = document.querySelector(".dropdown-links");
    if (dropdown !== null) {
      dropdown.addEventListener("click", () => {
        dropdownLinks.classList.toggle("dropdown-active");
      });
    }
  };
  const app = () => {
    navigation();
    dropdown();
  };
  app();
};
