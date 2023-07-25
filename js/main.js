const menu = document.querySelector(".menu");
const change_icon_menu = document.querySelector(".icon_dark_mode");
const body = document.body;
const button_cv = document.querySelector("#cv");
const path_cv = "./docs/CV_ELISEO_TORRES.pdf";
const menu_over = document.querySelector(".menu");
const menu_tag_show = document.querySelector(".list_menu");
const menu_over_hidden = document.querySelector(".icon_close");

let dark = JSON.parse(localStorage.getItem("DarkMode"));
if (dark) {
  body.classList.add("dark");
  change_icon_menu.classList.add("fa-sun");
  change_icon_menu.classList.remove("fa-moon");
} 
else{
  body.classList.remove("dark");
  
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
menu_tag_show.addEventListener("click",function(e) {
  if(e.target.hasAttribute("href")){
    menu_tag_show.classList.remove("list_menu_show");
  };
});
button_cv.addEventListener("click",function (e) {
  window.open(path_cv, "_blank");
})

