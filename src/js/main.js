var button = document.querySelector(".show_hide");
var infomenu = document.querySelector(".article_info");
var hexbutton = document.querySelector(".nav_hex");
var hexmenu = document.querySelector(".hex_menu");

function toggle() {
  infomenu.classList.toggle("active");
  button.classList.toggle("active");
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
  };
}

function hextoggle() {
    hexmenu.classList.toggle("active");
    hexbutton.classList.toggle("active");
}

button.addEventListener("click", toggle);
hexbutton.addEventListener("click", hextoggle);



