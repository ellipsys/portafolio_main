const menu = document.querySelector(".menu");
const change_icon_menu = document.querySelector(".icon_dark_mode");
const body = document.body;

let dark = Boolean(localStorage.getItem("DarkMode"));

if (dark) {
  body.classList.add("dark");
  change_icon_menu.classList.add("fa-sun");
  change_icon_menu.classList.remove("fa-moon");
} 
menu.addEventListener("click", function (e) {
    if (e.target.classList.contains("icon_dark_mode")) {
      if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        change_icon_menu.classList.add("fa-moon");
        change_icon_menu.classList.remove("fa-sun");
        localStorage.setItem("DarkMode", "false");
      } else {
        body.classList.add("dark");
        change_icon_menu.classList.add("fa-sun");
        change_icon_menu.classList.remove("fa-moon");
        localStorage.setItem("DarkMode", "true");
      }
    }
  });


const menu_over = document.querySelector(".menu");
const menu_tag_show = document.querySelector(".list_menu");
const menu_over_hidden = document.querySelector(".icon_close");

menu_over.addEventListener("click", function (e) {
  if (e.target.classList.contains("icon_menu")) {
    menu_tag_show.classList.toggle("list_menu_show");
  }
});
menu_over_hidden.addEventListener("click", function (e) {
  if (e.target.classList.contains("icon_close_")) {
    menu_tag_show.classList.toggle("list_menu_show");
  }
});

