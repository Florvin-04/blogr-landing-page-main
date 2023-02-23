const navigations = document.querySelectorAll(".header-nav p");
const showList = document.querySelectorAll(".hover-list");

navigations.forEach((navigation) => {
  navigation.addEventListener("click", (e) => {
    const target = e.target;
    // navigations.forEach((nav) => (nav.dataset.visible = false));
    const afterDot = window.getComputedStyle(navigation, "::after");
    // console.log(target);
    let visibility = navigation.getAttribute("data-visible");

    if (visibility === "false") {
      target.style.setProperty("--rotate", "rotate(180deg)");
      if (navigation.textContent === "Product") {
        showList[0].style.setProperty("height", "10rem");
        showList[0].style.setProperty("padding", "1rem");
        showList[1].style.setProperty("height", "0");
        showList[1].style.setProperty("padding", "0");
        showList[2].style.setProperty("height", "0");
        showList[2].style.setProperty("padding", "0");
      }
      if (navigation.textContent === "Company") {
        showList[1].style.setProperty("height", "9rem");
        showList[1].style.setProperty("padding", "1rem");
        showList[0].style.setProperty("height", "0");
        showList[0].style.setProperty("padding", "0 0");
        showList[2].style.setProperty("height", "0");
        showList[2].style.setProperty("padding", "0");
      }
      if (navigation.textContent === "Connect") {
        showList[2].style.setProperty("height", "7rem");
        showList[2].style.setProperty("padding", "1rem");
        showList[0].style.setProperty("height", "0");
        showList[0].style.setProperty("padding", "0 0");
        showList[1].style.setProperty("height", "0");
        showList[1].style.setProperty("padding", "0");
      }
      navigation.dataset.visible = true;
    } else {
      target.style.setProperty("--rotate", "rotate(0deg)");
      if (navigation.textContent === "Product") {
        showList[0].style.setProperty("height", "0");
        showList[0].style.setProperty("padding", "0");
      }
      if (navigation.textContent === "Company") {
        showList[1].style.setProperty("height", "0");
        showList[1].style.setProperty("padding", "0");
      }
      if (navigation.textContent === "Connect") {
        showList[2].style.setProperty("height", "0");
        showList[2].style.setProperty("padding", "0");
      }

      navigation.dataset.visible = false;
    }
    // console.log(visibility);
  });
});

const hamburger = document.querySelector(".burger-menu");
const mobileNav = document.querySelector(".header-nav");
hamburger.addEventListener("click", () => {
  const visibility = mobileNav.getAttribute(`data-visible`);
  if (visibility === "false") {
    mobileNav.dataset.visible = true;
    mobileNav.style.setProperty("height", "25rem");
    // hamburger.style.setProperty("display", "none");
    hamburger.style.setProperty("background-image", "url(./images/icon-close.svg)");
  } else {
    mobileNav.dataset.visible = false;
    hamburger.style.setProperty("background-image", "url(./images/icon-hamburger.svg)");
    mobileNav.style.setProperty("height", "0");
  }

  //   console.log(visibility);
});
