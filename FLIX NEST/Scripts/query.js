// selects all classes with name star
const stars = document.querySelectorAll(".star");
var isClicked = false;

// on mouse over event each star is filled gray
stars.forEach(star =>{
    star.addEventListener('mouseover', function(){
        if(!isClicked){
            for(let i = 0 ; i < star.id;i++){
                stars[i].style.fill = "gray";
            }
        }
    });

// on mouse going out each star is filled with white again
    star.addEventListener('mouseout', function(){
        if(!isClicked){
            for(let i = 0 ; i < star.id;i++){
                stars[i].style.fill =  "white";
            }
        }
    });

// on click event each star is filled with gold colour
    star.addEventListener('click', function(){
        isClicked = true;
        for(let i = 0 ; i < star.id;i++){
            stars[i].style.fill = "gold";
        }
        for(let i = star.id ; i < stars.length;i++){
            stars[i].style.fill = "white";
        }
    });
});

// get radio button tags and text area
const optionYes = document.getElementById('optionYes');
const optionNo = document.getElementById('optionNo');
const textarea_option = document.getElementById('tarea-feedback');


// if radio input is yes then text area is given a property of "required"
  optionYes.addEventListener('input', function() {
    if (optionYes.checked) {
      textarea_option.required = true;
    } 
  });

// if radio input is no then "required" property is removed
  optionNo.addEventListener('input', function() {
    if (optionNo.checked) {
      textarea_option.required = false;
    }
  });

// gets email input to check for email syntax errors
const chk_email = document.querySelector("#email");
chk_email.addEventListener("input", function () {
  const email = chk_email.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);

// if invalid error message is displayed
  if (!isValidEmail) {
    chk_email.setCustomValidity("Invalid email address");
  } else {
    chk_email.setCustomValidity("");
  }
});

// Function to remove starts rated upon licking the clear button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click",function(){
    isClicked = false;
    for(let i = 0 ; i < stars.length;i++){
        stars[i].style.fill = 'white';
    }
});




