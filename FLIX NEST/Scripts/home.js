// according to the scroll event make calculations to apply animations to sectional parts

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
// listen for sccroll events
  window.addEventListener("scroll", reveal);
  window.addEventListener("scroll", navChange);

// change navigation properties according to navdark id
   function navChange() {
    let nav = document.querySelector("#navbar");
      nav.classList.toggle("navdark",window.scrollY > 70);
  }
  


  


  