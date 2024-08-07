const container = document.querySelectorAll('.img-desc');

container.forEach(container =>{
    const overlay = container.querySelector('.desc-preview');
    
    container.addEventListener('mouseover', function(){
        overlay.style.display = 'block';
    });

    container.addEventListener('mouseout', function(){
        overlay.style.display = 'none';
    });

});


//Display cart elements
function displayCart(){
    document.querySelector("#cart").style.display = "block";
    document.querySelector(".nav-svg").classList.add("active")
    document.querySelector("#shop-items").classList.add("blur");
    document.querySelector("body").classList.add("deactive");
}

//Close cart elements
function closeCart(){
    document.querySelector("#cart").style.display = "none";
    document.querySelector(".nav-svg").classList.remove("active")
    document.querySelector("#shop-items").classList.remove("blur");
    document.querySelector("body").classList.remove("deactive");
}

//Movie contains
const movies = [
    {index:-1,selected:false,movieName:"The Out-Laws", price:3000.00, amount:0},
    {index:-1,selected:false,movieName:"65", price:3000.00, amount:0},
    {index:-1,selected:false,movieName:"Unlocked", price:3000.00, amount:0},
    {index:-1,selected:false,movieName:"Knock At The Cabin", price:3000.00, amount:0},
    {index:-1,selected:false,movieName:"Shehazda", price:3000.00, amount:0},
    {index:-1,selected:false,movieName:"Knight of the Zodiac", price:3000.00, amount:0},
    {index:-1,selected:false,movieName:"Super Mario", price:3000.00, amount:0},
    {index:-1,selected:false,movieName:"Murder Mystery", price:3000.00, amount:0}
];

var selectedCount = -1;
var totalAmount = 0;

const pluses = document.querySelectorAll(".add");
pluses.forEach(plus =>{
    plus.addEventListener('click', function(){
        const index = plus.parentElement.id;
        const cartIndex = movies.findIndex(movie => movie.index === parseInt(index));
        buyMovie(cartIndex);
    });
});


const subtracts = document.querySelectorAll(".subtract");
subtracts.forEach(subs =>{
    subs.addEventListener('click', function(){
        const index = subs.parentElement.id;
        const cartIndex = movies.findIndex(movie => movie.index === parseInt(index));
        removeItem(cartIndex);
    });
});

//This function resets the shopping cart and hides all items
function reset(){
    movies.forEach(movie => {
        movie.index = -1;
        movie.selected = false;
        movie.amount = 0;
    });
    selectedCount = -1;
    totalAmount = 0;
    items =document.querySelectorAll(".cart-item");
    items.forEach(item =>{
        item.style.display = 'none';
    })
    updateCartIcon();
    updateTotal();
}

//Update the total quantity of movies in the cart
function buyProduct(index){
    movies[index].amount += 1;
    totalAmount+=1 
}

//Reduces the quantity of a movie in the cart when it is removed
function removeProduct(index){
    movies[index].amount -= 1;
    totalAmount-=1 
}

//Adds a movie to the cart & updates its display
function buyMovie(index){
    addedToCart();
    const movie = movies[index];
    buyProduct(index);
    updateCartIcon();
    if(!movie.selected){
        selectedCount += 1
        movie.index = selectedCount;
        movie.selected=true;
        printMovie(movie);
    } else{
        updateMovie(movie);
    }

}

//Updates the selected movie's details in the cart display
function printMovie(movie){
    const item = document.querySelectorAll(".cart-item");
    item[selectedCount].style.display = "flex";
    const pushName = item[selectedCount].querySelector(".cart-movieName");
    const pushAmount = item[selectedCount].querySelector(".amount");
    const pushPrice = item[selectedCount].querySelector(".cart-price");
    pushName.innerHTML = movie.movieName;
    pushAmount.value = movie.amount;
    pushPrice.innerHTML = movie.amount*movie.price;
    updateTotal();
}

//Updates a movie's details in the cart display
function updateMovie(movie){
    const item = document.querySelectorAll(".cart-item");
    const pushName = item[movie.index].querySelector(".cart-movieName");
    const pushAmount = item[movie.index].querySelector(".amount");
    const pushPrice = item[movie.index].querySelector(".cart-price");
    pushName.innerHTML = movie.movieName;
    pushAmount.value = movie.amount;
    pushPrice.innerHTML = (movie.amount*movie.price);    
    updateTotal();
}

//Updates the cart's total price
function updateTotal(){
    const pushTotal = document.querySelector(".total");
    let total = 0;
    movies.forEach(movienum => {
        total += movienum.amount*movienum.price;
    });
    pushTotal.innerHTML = 'Rs. ' + total+'.00';
}

//Updates the shopping cart icon based on the total amount of items
function updateCartIcon(){
    const icon = document.querySelector("#cart-amount");
    if(totalAmount>=10){
        icon.setAttribute("x","80");
    }else{
        icon.setAttribute("x","88");
    }
    icon.textContent = totalAmount;
}

//Removes one unit of a movie from the cart, and updates the relevant elements 
function removeItem(index){
    const movie = movies[index];
    if(movie.amount>0){
        removeProduct(index);
        updateMovie(movie);
        updateCartIcon();
    }
}

//Hides the payment gateway overlay
function closepaymentGateway(){
    document.querySelector(".overlay").style.display = "none";
    document.querySelector("body").classList.remove('deactive');
}

//Calculates the total cost
function getTotal(){
    const pushTotal = document.querySelector(".total");
    let total = 0;
    movies.forEach(movienum => {
        total += movienum.amount*movienum.price;
    });
    return total;
}

//Displays a payment gateway with the total price
function onClickBuy(){
    if(totalAmount>0){
        document.querySelector(".overlay").style.display = "block";
        document.querySelector("body").classList.add('deactive');
        const iframe = document.getElementById('iframe');
        iframe.contentWindow.document.getElementById('no-of-items').innerHTML = totalAmount;
        let totalamount = getTotal();
        iframe.contentWindow.document.getElementById('total-price-to-pay').innerHTML = "Rs. "+totalamount +".00";
    }
}

//Closes the payment gateway
function inCloseClick(){

    window.parent.document.querySelector(".overlay").style.display = "none";
    window.parent.document.querySelector("body").classList.remove('deactive');
}

//Displays a success overlay after payment completion
function onBought(){
    window.parent.document.querySelector(".overlay").style.display = "none";
    window.parent.document.querySelector(".booked-sucs-overlay").style.display = "flex";
}

//when the "OK" button is clicked user has successfully purchased and resets the cart
function onClickOk(){
    window.parent.document.querySelector(".booked-sucs-overlay").style.display = "none";
    reset();
}

//Displays a message when an item is added to the cart
function addedToCart(){
    var message = document.getElementById('added_to_cart');
    message.style.display = 'block';
    setTimeout(function(){
        message.style.display = 'none'
    },1000)
}