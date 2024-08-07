//After 5 secounds automatically redirect the user to the "home.html" page
window.onload = function() {
    setTimeout(function() {
      window.location.href = "home.html";
    }, 5000);
};