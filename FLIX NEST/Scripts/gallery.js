// Selecting image containers by class
const containers = document.querySelectorAll('.img-desc');

// hovering effect
containers.forEach(container =>{
    const overlay = container.querySelector('.desc-preview');
    container.addEventListener('mouseover', function(){
        overlay.style.display = 'block';
    });
    container.addEventListener('mouseout', function(){
        overlay.style.display = 'none';
    });

});

// function that shows the description
function showDescription(id){
    const description = document.querySelector(id);
    document.getElementsByClassName("container")[0].classList.add("blur");
    description.style.display = "Block";
    document.querySelector('body').classList.add("descActive");
}

// function that hide the description
function hideDescription(id){
    const description = document.querySelector(id);
    document.getElementsByClassName("container")[0].classList.remove("blur");
    description.style.display = "none";
    document.querySelector('body').classList.remove("descActive");
}
// function that changes the theme
function changetheme(theme){
    removeSelectedTheme();
    if(theme === 'dark'){
        document.getElementById("theme-dark").classList.add("selected");
        document.getElementById("image-filter").style.backgroundColor = '#FFFFFF00';
        document.querySelectorAll('.heading-b0x').forEach(head => {
            head.style.color = '#FFFFFF';
        }); 
        document.querySelectorAll('.year-box').forEach(yr =>{
            yr.style.color = 'black';
        });

   } else if (theme === 'light') {
        document.getElementById("theme-light").classList.add("selected");
        document.getElementById("image-filter").style.backgroundColor = '#FFFFFFd1';
        document.querySelectorAll('.heading-box').forEach(head => {
           head.style.color = '#000000'; // Set text color to black
        });
        document.querySelectorAll('.year-box').forEach(yr => {
           yr.style.color = '#000000';
       });
    
    }else if(theme === 'ocean'){
        document.getElementById("theme-ocean").classList.add("selected");
        document.getElementById("image-filter").style.backgroundColor = '#00B7FFD1';
        document.querySelectorAll('.heading-box').forEach(head => {
            head.style.color = '#000000;';
        }); 
        document.querySelectorAll('.year-box').forEach(yr =>{
            yr.style.color = '#000000';
        });

    }else if(theme === 'green'){
        document.getElementById("theme-green").classList.add("selected");
        document.getElementById("image-filter").style.backgroundColor = '#126F00D1';
        document.querySelectorAll('.heading').forEach(head => {
            head.style.color = '#000000';
        }); 
        document.querySelectorAll('.year').forEach(yr =>{
            yr.style.color = '#000000';
        });

    }else if(theme === 'random'){
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById("image-filter").style.backgroundColor = '#'+randomColor;
        document.querySelectorAll('.heading').forEach(head => {
            head.style.color = '#000000';
        }); 
        document.querySelectorAll('.year').forEach(yr =>{
            yr.style.color = '#000000';
        });
    }
}
// function that remove selected ckass from theme class
function removeSelectedTheme(){
    const removeThemes = document.querySelectorAll('.theme');
    removeThemes.forEach(theme =>{
        theme.classList.remove('selected');
    });
}
// function that change size
function changesize(size){
    removeSelectedSize();
    if(size === 'small'){
        document.getElementById('fsize-small').classList.add("selected");
        document.querySelectorAll('.heading-box').forEach(head => {
            head.style.fontSize = '15px';
        }); 
        document.querySelectorAll('.year-box').forEach(yr =>{
            yr.style.fontSize = '15px';
        });        

    }else if(size === 'regular'){
        document.getElementById('fsize-regular').classList.add("selected");
        document.querySelectorAll('.heading-box').forEach(head => {
            head.style.fontSize = '20px';
        }); 
        document.querySelectorAll('.year-box').forEach(yr =>{
            yr.style.fontSize = '20px';
        });        

    }else if(size === 'large'){
        document.getElementById('fsize-large').classList.add("selected");
        document.querySelectorAll('.heading-box').forEach(head => {
            head.style.fontSize = '25px';
        }); 
        document.querySelectorAll('.year-box').forEach(yr =>{
            yr.style.fontSize = '25px';
        });        

    }
}
// removes the selected class from size class
function removeSelectedSize(){
    const removeThemes = document.querySelectorAll('.size');
    removeThemes.forEach(theme =>{
        theme.classList.remove('selected');
    });
}
// showing go up button when scroll down
window.addEventListener('scroll',function(){
    var scrollPosition = document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    if (scrollPosition > (scrollHeight/2) - clientHeight) {
        document.getElementById('goUp').style.bottom = "190px";
    }else{
        document.getElementById('goUp').style.bottom = "-60px";
    }
});