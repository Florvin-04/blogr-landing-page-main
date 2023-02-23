const burgerMenu = document.querySelector("[data-burger-menu]");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  const target = e.target;

  const dropDownBtn = target.matches("[data-drop-down-btn]");
  if (!dropDownBtn && target.closest("[data-drop-down]") != null) return;

  let currentDropDown;
  let currentArrowDown;
  if (dropDownBtn) {
    currentDropDown = target.closest("[data-drop-down]").children[1];
    currentDropDown.classList.toggle("active");

    currentArrowDown = target.closest("[data-drop-down]").children[0];
    currentArrowDown.classList.toggle("active");
  }

  const allActiveDropDown = document.querySelectorAll(".drop-down-menu.active");
  allActiveDropDown.forEach((dropDown) => {
    if (dropDown === currentDropDown) return;
    else dropDown.classList.remove("active");
    // console.log(dropDown);
  });

  const allActiveDropDownArrow = document.querySelectorAll(".drop-down-btn.active");
  allActiveDropDownArrow.forEach((arrow) => {
    if (arrow === currentArrowDown) return;
    else arrow.classList.remove("active");
    console.log(arrow);
  });
});
