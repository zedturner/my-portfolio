var button = document.querySelector(".show_hide");
var infomenu = document.querySelector(".article_info");
var hexbutton = document.querySelector(".nav_hex");
var hexmenu = document.querySelector(".hex_menu");

const parallax1 = document.getElementById("foreground"); 
const parallax2 = document.getElementById("logo");
const parallax3 = document.getElementById("midgard");
const parallax4 = document.getElementById("highgard");
const parallax5 = document.getElementById("background");

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

window.addEventListener("scroll", function()
{
  let offset = window.pageYOffset; 
  parallax1.style.bottom = -1200 + offset * 1.2 + "px";
  parallax2.style.top = offset * 1.6 + "px"; 
  parallax2.style.opacity = 100 - offset * 0.8 + "%";
  parallax3.style.bottom = -1200 + offset * 1.0 + "px"; 
  parallax4.style.bottom = -1200 + offset * 0.6 + "px"; 
  parallax5.style.bottom = -1200 + offset * 0.4 + "px";
})

button.addEventListener("click", toggle);
hexbutton.addEventListener("click", hextoggle);
