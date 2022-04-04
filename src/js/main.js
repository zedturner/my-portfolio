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
  parallax1.style.bottom = -130 + offset * 0.15 + "%";
  if (offset < 500) { 
    parallax2.style.top = 4 + offset * 0.1 + "%";
  } else { 
    parallax2.style.top = 0; 
  }; 
  parallax2.style.opacity = 100 - offset * 0.6 + "%";
  parallax3.style.bottom = -120 + offset * 0.02 + "%"; 
  parallax4.style.bottom = -120 + offset * 0.002 + "%"; 
  parallax5.style.bottom = -120 + offset * 0.001 + "%";
})

button.addEventListener("click", toggle);
hexbutton.addEventListener("click", hextoggle);
