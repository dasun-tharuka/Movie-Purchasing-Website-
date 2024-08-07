window.addEventListener("scroll", navChange);

// on scroll event following function gives navbar the properties in "navdark" class
function navChange() {
 let nav = document.querySelector("#navbar");
   nav.classList.toggle("navdark",window.scrollY > 0);
}
